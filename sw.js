const CACHE_NAME = 'quran-tracker-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap'
];

// Reminder state stored in SW memory (synced from main page)
let reminderConfig = null;
let reminderMessages = [];
let reminderTimer = null;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        const fetched = fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => cached);
        return cached || fetched;
      })
  );
});

// Handle messages from main page (reminder config sync)
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SET_REMINDER') {
    reminderConfig = event.data.reminder;
    reminderMessages = event.data.messages || [];
    scheduleSWReminder();
  }
});

// Schedule notification from service worker
function scheduleSWReminder() {
  if (reminderTimer) { clearTimeout(reminderTimer); reminderTimer = null; }
  if (!reminderConfig || !reminderConfig.enabled || !reminderConfig.days.length) return;

  const now = new Date();
  const [hh, mm] = reminderConfig.time.split(':').map(Number);
  let next = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm, 0);

  for (let i = 0; i < 8; i++) {
    const candidate = new Date(next.getTime() + i * 86400000);
    if (candidate > now && reminderConfig.days.includes(candidate.getDay())) {
      next = candidate;
      break;
    }
  }

  const ms = next.getTime() - now.getTime();
  if (ms > 0 && ms < 7 * 86400000) {
    reminderTimer = setTimeout(() => {
      const body = reminderMessages.length
        ? reminderMessages[Math.floor(Math.random() * reminderMessages.length)]
        : 'حان وقت مراجعة القرآن';
      self.registration.showNotification('متابع حفظ القرآن', {
        body,
        icon: 'icon-192.png',
        badge: 'icon-192.png',
        tag: 'qt-reminder',
        renotify: true,
        vibrate: [200, 100, 200],
        data: { url: './' }
      });
      setTimeout(() => scheduleSWReminder(), 1000);
    }, ms);
  }
}

// Open app when notification is clicked
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('index.html') || client.url.endsWith('/')) {
          return client.focus();
        }
      }
      return clients.openWindow('./');
    })
  );
});
