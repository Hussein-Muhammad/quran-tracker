Create a **ARABIC mobile-first Progressive Web App (PWA)** to track a Quran memorization and revision workflow.

The app is a **personal lightweight tracker** that helps the user instantly see **what Ayat must be revised today**.

The application must be **very simple, fast, and usable daily on mobile**.

---

TECHNOLOGY REQUIREMENTS

* **Progressive Web App (PWA)**
* Single Page Application
* **One HTML file** containing:

  * HTML
  * CSS
  * JavaScript
* No frameworks
* Store data in **localStorage**
* Works **offline**
* Installable on phone home screen
* Include:

  * service worker
  * manifest

---

UI / UX REQUIREMENTS

Design **mobile-first**.

UI must be:
* islamic
* clean
* minimal
* touch friendly
* fast to use

Appearance:

* **Dark mode by default**
* modern minimal design
* large buttons
* card-based layout
* simple progress indicators
* readable Arabic text support

Optional:

* light/dark toggle

---

APP STRUCTURE

The app has **two main tracks**:

1. New Memorization Track (حفظ الجديد)
2. Review Memorization Track (مراجعة الماضي)

---

TRACK 1 — New Memorization Track (حفظ الجديد)

Purpose:
Log memorization sessions and automatically generate **7-day revision tasks**.

Example session:

Monday:
New memorization
From Ayah **15 → 30**

Old revision with Sheikh
From Ayah **1 → 50** (Surah Al-Furqan)

When the user logs this session, the app should:

Create **revision tasks for the next 7 days**.

Meaning:

For the next 7 days the dashboard will show:

"Revise: Surah Al-Furqan Ayah 1 → 50"

If another session is logged on Thursday:

New memorization
Ayah **31 → 45**

Old revision
Ayah **51 → 80**

These should also be added to the **7-day revision queue**.

The app must automatically:

* track the **7-day revision window**
* remove items after 7 days
* combine all active revision items

---

DAILY DASHBOARD (MAIN SCREEN)

When the user opens the app they should immediately see:

TODAY'S REVISION

Example display:

Revise Today

• Al-Furqan 1 → 50
• Al-Furqan 51 → 80
• New memorization review 15 → 30

Each item should have:

✔ Mark as Revised Today

Revision items should automatically expire after **7 days**.

---

SESSION LOGGING

User should be able to log a Sheikh session easily.

Session form:

Day (auto detect or selectable)

New Memorization

* Surah name
* Ayah start
* Ayah end

Old Revision With Sheikh

* Surah name
* Ayah start
* Ayah end

Button:
"Save Session"

Saving the session should automatically create the **7-day revision tasks**.

---

TRACK 2 — OLD MEMORIZATION REVIVAL (HIZB SYSTEM)

User reviews older memorized Quran using Hizb cycles.

Default method:

For each **Hizb (~10 pages)** the user:

* Reads **1 time**
* Listens **2 times**

This is repeated for **3–5 days**.

User must be able to **customize counts**.

Settings:

Reads count (default = 1)
Listens count (default = 2)

During the day the user can mark progress:

Example:

Read progress
✔ Read 1 / 1

Listen progress
✔ Listen 1 / 2
✔ Listen 2 / 2

Features:

* Create new Hizb cycle
* Track current day
* Track read/listen counts
* Mark day complete
* Mark Hizb complete

---

DASHBOARD SECTION 2

Show:

Current Hizb Cycle (or configured page counts for review default is Hizb=10 pages)

Example:

Hizb 12
Day 3 / 5

Read progress
Listen progress

Progress bar

---

OPTIONAL FEATURES (IF EASY)

* progress tracker for **Configured Amount of Juz**
* streak counter
* reset Hizb cycle
* dark/light toggle
* install PWA button

---

IMPORTANT

Do NOT over-engineer.

Avoid:

* frameworks
* backend
* login systems
* databases
* complex routing
* multiple pages

The goal is a **very fast personal Quran revision tracker**.

When opening the app, the **first thing visible must be:**

"What should I revise today?"
The App should be in ARABIC 
The App should allow me to configure (page counts, repetitions counts, pages revision intersection amount ...etc ) in very user friendly and comptability
The App should have perfect UX with Islamic UI
I will give you referrence of All Surah List along with Ayah if needed:
السور مع عدد الآيات
الفاتحة 7
البقرة 286
آل عمران 200
النساء 176
المائدة 120
الأنعام 165
الأعراف 206
الأنفال 75
التوبة 129
يونس 109
هود 123
يوسف 111
الرعد 43
إبراهيم 52
الحجر 99
النحل 128
الإسراء 111
الكهف 110
مريم 98
طه 135
الأنبياء 112
الحج 78
المؤمنون 118
النور 64
الفرقان 77
الشعراء 227
النمل 93
القصص 88
العنكبوت 69
الروم 60
لقمان 34
السجدة 30
الأحزاب 73
سبأ 54
فاطر 45
يس 83
الصافات 182
ص 88
الزمر 75
غافر 85
فصلت 54
الشورى 53
الزخرف 89
الدخان 59
الجاثية 37
الأحقاف 35
محمد 38
الفتح 29
الحجرات 18
ق 45
الذاريات 60
الطور 49
النجم 62
القمر 55
الرحمن 78
الواقعة 96
الحديد 29
المجادلة 22
الحشر 24
الممتحنة 13
الصف 14
الجمعة 11
المنافقون 11
التغابن 18
الطلاق 12
التحريم 12
الملك 30
القلم 52
الحاقة 52
المعارج 44
نوح 28
الجن 28
المزمل 20
المدثر 56
القيامة 40
الإنسان 31
المرسلات 50
النبأ 40
النازعات 46
عبس 42
التكوير 29
الانفطار 19
المطففين 36
الانشقاق 25
البروج 22
الطارق 17
الأعلى 19
الغاشية 26
الفجر 30
البلد 20
الشمس 15
الليل 21
الضحى 11
الشرح 8
التين 8
العلق 19
القدر 5
البينة 8
الزلزلة 8
العاديات 11
القارعة 11
التكاثر 8
العصر 3
الهمزة 9
الفيل 5
قريش 4
الماعون 7
الكوثر 3
الكافرون 6
النصر 3
المسد 5
الإخلاص 4
الفلق 5
الناس 6
