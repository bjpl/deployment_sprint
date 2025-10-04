# AVES Development - Visual Action Plan

**Quick Visual Reference for Getting AVES Working**

---

## 🎯 Three Paths to Choose From

```
┌─────────────────────────────────────────────────────────────────┐
│                     CHOOSE YOUR PATH                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  PATH 1: QUICK START (2-3 hours)                                │
│  ├─ Goal: Working app for personal use TODAY                    │
│  ├─ Output: 10 birds, 50 exercises, basic features              │
│  └─ Effort: ███░░░░░░░ 30% effort                              │
│                                                                  │
│  PATH 2: FULL FEATURES (10-15 hours)                            │
│  ├─ Goal: Complete learning platform                            │
│  ├─ Output: 50 birds, 250 exercises, audio, dashboard           │
│  └─ Effort: ███████░░░ 70% effort                              │
│                                                                  │
│  PATH 3: FREEMIUM LAUNCH (25-35 hours)                          │
│  ├─ Goal: Public product with paying users                      │
│  ├─ Output: 200 birds, 1000 exercises, premium features         │
│  └─ Effort: ██████████ 100% effort                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## PATH 1: Quick Start (2-3 Hours)

### Visual Timeline

```
Hour 0                    Hour 1                    Hour 2                    Hour 3
│                         │                         │                         │
├─ FIX BUILD ────────────┤                         │                         │
│  (30 min)               │                         │                         │
│  ┌──────────────┐      │                         │                         │
│  │ You: 5 min   │      │                         │                         │
│  │ Claude: 15min│      │                         │                         │
│  │ Verify: 10min│      │                         │                         │
│  └──────────────┘      │                         │                         │
│                         │                         │                         │
│                         ├─ CREATE EXERCISES ─────┤                         │
│                         │  (1.5 hours)            │                         │
│                         │  ┌──────────────┐      │                         │
│                         │  │ You: 30 min  │      │                         │
│                         │  │ Claude: 45min│      │                         │
│                         │  │ Verify: 15min│      │                         │
│                         │  └──────────────┘      │                         │
│                         │                         │                         │
│                         │                         ├─ DEPLOY & TEST ────────┤
│                         │                         │  (30 min)               │
│                         │                         │  ┌──────────────┐      │
│                         │                         │  │ You: 25 min  │      │
│                         │                         │  │ Claude: 5 min│      │
│                         │                         │  └──────────────┘      │
│                         │                         │                         │
▼                         ▼                         ▼                         ▼
START                     BUILD FIXED               EXERCISES READY           DEPLOYED ✓
```

### Phase Breakdown with Roles

```
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: FIX BUILD (30 minutes)                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  YOU (Manual) - 5 minutes:                                             │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ ▶ Decide: Exclude tests from build (quick fix)                │    │
│  │ ▶ Tell Claude: "Exclude test files from production build"     │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  CLAUDE (Automated) - 15 minutes:                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ ✓ Update tsconfig.json                                         │    │
│  │ ✓ Add exclude patterns                                         │    │
│  │ ✓ Test build                                                   │    │
│  │ ✓ Report success                                               │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  YOU (Verify) - 10 minutes:                                            │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ $ cd frontend                                                   │    │
│  │ $ npm run build                                                 │    │
│  │ ✓ No errors → Success!                                         │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 2: CREATE EXERCISES (1.5 hours)                                  │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  YOU (Manual) - 30 minutes:                                            │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ ▶ Decide how many: 20 / 50 / 100 exercises?                   │    │
│  │ ▶ Decide types: Visual / Fill-in / Translation?               │    │
│  │ ▶ Tell Claude: [detailed prompt - see walkthrough]            │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  CLAUDE (Automated) - 45 minutes:                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ ✓ Read species.json (10 birds)                                │    │
│  │ ✓ Read annotations.json (10 vocab terms)                      │    │
│  │ ✓ Generate 50 exercises                                        │    │
│  │   ├─ 15 Visual Discrimination                                  │    │
│  │   ├─ 15 Contextual Fill                                        │    │
│  │   ├─ 10 Translation                                            │    │
│  │   └─ 10 Vocabulary Matching                                    │    │
│  │ ✓ Add difficulty levels (1-3)                                  │    │
│  │ ✓ Create realistic distractors                                 │    │
│  │ ✓ Write data/exercises.json                                    │    │
│  │ ✓ Validate JSON                                                │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  YOU (Verify) - 15 minutes:                                            │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ $ cat data/exercises.json | jq length                          │    │
│  │ ✓ Should output: 50                                            │    │
│  │ $ npm run dev                                                   │    │
│  │ ✓ Navigate to practice page                                    │    │
│  │ ✓ Complete 5 exercises                                         │    │
│  │ ✓ Verify answers work correctly                               │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 3: DEPLOY & TEST (30 minutes)                                    │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  YOU (Manual) - 25 minutes:                                            │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ $ npm run build                                                 │    │
│  │ $ git add .                                                     │    │
│  │ $ git commit -m "Add exercises for personal use"               │    │
│  │ $ git push                                                      │    │
│  │ $ npm run deploy                                                │    │
│  │                                                                 │    │
│  │ Wait 2-5 minutes for GitHub Pages deployment...                │    │
│  │                                                                 │    │
│  │ Visit: https://[username].github.io/aves/                      │    │
│  │ ✓ Test species browser                                         │    │
│  │ ✓ Complete 5 exercises                                         │    │
│  │ ✓ Check progress saves                                         │    │
│  │ ✓ Test on mobile                                               │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  CLAUDE (Automated) - 5 minutes (if deployment fails):                │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ ✓ Fix deployment config                                        │    │
│  │ ✓ Verify paths correct                                         │    │
│  │ ✓ Provide fix commands                                         │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘

SUCCESS! You now have a working app for personal use! 🎉
```

---

## PATH 2: Full Features (10-15 Hours)

### Visual Roadmap

```
┌──────────────┐      ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   PHASE 1    │      │   PHASE 2    │      │   PHASE 3    │      │   PHASE 4    │
│  Fix Build   │──────▶  Create      │──────▶   Deploy     │──────▶   Use 1      │
│              │      │  Exercises   │      │   & Test     │      │   Week       │
│  30 min      │      │  1.5 hours   │      │   30 min     │      │  Daily 15min │
└──────────────┘      └──────────────┘      └──────────────┘      └──────────────┘
                                                                            │
                                                                            ▼
                                    ┌──────────────────────────────────────────────┐
                                    │       DECISION POINT                          │
                                    │   Did I use it 5+ days?                       │
                                    └──────────────────────────────────────────────┘
                                            │                         │
                                           YES                       NO
                                            │                         │
                                            ▼                         ▼
                                    ┌──────────────┐        ┌──────────────┐
                                    │  Continue to │        │   Identify   │
                                    │   Phase 5    │        │   Blockers   │
                                    └──────────────┘        └──────────────┘
                                            │
                                            ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   PHASE 5    │      │   PHASE 6    │      │   PHASE 7    │      │   PHASE 8    │
│   Expand     │──────▶    Audio      │──────▶  Enhanced    │──────▶   Polish &   │
│   Content    │      │ Pronunciation│      │    UI/UX     │      │   Deploy     │
│              │      │              │      │              │      │              │
│  4-6 hours   │      │  2-3 hours   │      │  2-3 hours   │      │   1 hour     │
└──────────────┘      └──────────────┘      └──────────────┘      └──────────────┘

RESULT: 50 birds, 250 exercises, audio, dashboard, full features ✓
```

### Effort Distribution

```
Total Time: 10-15 hours

┌─────────────────────────────────────────────────────────────┐
│                     TIME ALLOCATION                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  YOUR MANUAL WORK (40%):   ████████░░░░░░░░░░░  4-6 hours  │
│  ├─ Decisions & Planning:  2 hours                          │
│  ├─ Testing & Verification: 2 hours                         │
│  └─ Daily Usage (7 days):  2 hours                          │
│                                                              │
│  CLAUDE'S AUTOMATED WORK (60%):  ████████████░░░  6-9 hours │
│  ├─ Content Generation:    4 hours                          │
│  ├─ Feature Implementation: 3 hours                         │
│  └─ Data Creation:         2 hours                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Feature Completion Checklist

```
QUICK START (Completed)
├─ ✓ Build works
├─ ✓ 50 exercises created
└─ ✓ Deployed to GitHub Pages

FULL FEATURES
├─ ☐ Expand to 50 species (currently 10)
│   ├─ ☐ Research 40 new species
│   ├─ ☐ Find Unsplash images
│   ├─ ☐ Create vocabulary annotations (120 total)
│   └─ ☐ Generate 250 exercises
│
├─ ☐ Audio Pronunciation (120 terms)
│   ├─ ☐ Setup Google Cloud TTS
│   ├─ ☐ Generate audio files
│   └─ ☐ Integrate into UI
│
├─ ☐ Enhanced UI/UX
│   ├─ ☐ Progress Dashboard
│   ├─ ☐ Spaced Repetition
│   ├─ ☐ Export/Import Progress
│   ├─ ☐ Dark Mode
│   └─ ☐ Keyboard Shortcuts
│
└─ ☐ Polish & Deploy
    ├─ ☐ Final QA testing
    ├─ ☐ Create release notes
    └─ ☐ Deploy v1.0.0
```

---

## PATH 3: Freemium Launch (25-35 Hours)

### Full Journey Map

```
WEEK 1: Build Foundation (10-15 hours)
┌────────────────────────────────────────────────────────────┐
│ Day 1-2: Quick Start                           (3 hours)   │
│ Day 3-5: Full Features                         (7 hours)   │
│ Day 6-7: Use & Validate                        (2 hours)   │
└────────────────────────────────────────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────┐
        │  DECISION CHECKPOINT 1:   │
        │  Am I using this daily?   │
        └───────────────────────────┘
                │              │
               YES            NO → Fix blockers, retry
                │
                ▼
WEEK 2: User Validation (8-10 hours)
┌────────────────────────────────────────────────────────────┐
│ Day 8-9:  Recruit 10 beta testers              (3 hours)   │
│ Day 10-14: Beta testing period                 (2 hours)   │
│ Day 15:   Collect & analyze feedback           (3 hours)   │
└────────────────────────────────────────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────┐
        │  DECISION CHECKPOINT 2:   │
        │  70%+ recommend?          │
        │  50%+ would pay?          │
        └───────────────────────────┘
                │              │
               YES            NO → Improve or pivot
                │
                ▼
WEEK 3-4: Build Premium (10-12 hours)
┌────────────────────────────────────────────────────────────┐
│ Day 16-18: Expand content (200 species)        (6 hours)   │
│ Day 19-20: Premium features                    (4 hours)   │
│ Day 21:    Payment integration                 (2 hours)   │
└────────────────────────────────────────────────────────────┘
                        │
                        ▼
WEEK 5: Launch (8-10 hours)
┌────────────────────────────────────────────────────────────┐
│ Day 22-23: Marketing assets                    (4 hours)   │
│ Day 24-28: Public launch & support             (6 hours)   │
└────────────────────────────────────────────────────────────┘
                        │
                        ▼
                ┌──────────────┐
                │   SUCCESS!   │
                │ Live Product │
                │ With Revenue │
                └──────────────┘
```

### Freemium Tier Comparison

```
┌───────────────────────────────────────────────────────────────────┐
│                    FREE vs PREMIUM                                │
├───────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Feature                    │  FREE TIER    │  PREMIUM ($4.99/mo)│
│  ───────────────────────────┼───────────────┼────────────────────│
│  Bird Species               │     10        │       200+         │
│  Exercises                  │     50        │      1000+         │
│  Audio (words)              │     ✓         │        ✓           │
│  Audio (sentences)          │     ✗         │        ✓           │
│  Progress Tracking          │     ✓         │        ✓           │
│  Spaced Repetition (basic)  │     ✓         │        ✓           │
│  Spaced Repetition (AI)     │     ✗         │        ✓           │
│  Export Progress            │     ✓         │        ✓           │
│  Dark Mode                  │     ✓         │        ✓           │
│  AI Exercise Generation     │     ✗         │        ✓           │
│  Conversation Practice      │     ✗         │        ✓           │
│  Mobile App                 │     ✗         │        ✓           │
│  Priority Support           │     ✗         │        ✓           │
│                                                                    │
│  VALUE PROPOSITION:                                                │
│  Free  = "Try bird vocabulary learning"                           │
│  Premium = "Master Spanish ornithology with AI personalization"   │
│                                                                    │
└───────────────────────────────────────────────────────────────────┘
```

### Revenue Projections

```
┌────────────────────────────────────────────────────────────────┐
│                CONSERVATIVE REVENUE FORECAST                    │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Month 1:                                                       │
│  ├─ Free users:    100                                         │
│  ├─ Conversions:   5 (5%)                                      │
│  ├─ MRR:           $25                                         │
│  └─ Status:        ████░░░░░░░░░░░░░░░░  Traction             │
│                                                                 │
│  Month 3:                                                       │
│  ├─ Free users:    500                                         │
│  ├─ Conversions:   25 (5%)                                     │
│  ├─ MRR:           $125                                        │
│  └─ Status:        ████████░░░░░░░░░░░░  Growing              │
│                                                                 │
│  Month 6:                                                       │
│  ├─ Free users:    1,500                                       │
│  ├─ Conversions:   100 (6.7%)                                  │
│  ├─ MRR:           $500                                        │
│  └─ Status:        ████████████░░░░░░░░  Sustainable          │
│                                                                 │
│  Month 12:                                                      │
│  ├─ Free users:    5,000                                       │
│  ├─ Conversions:   400 (8%)                                    │
│  ├─ MRR:           $2,000                                      │
│  ├─ ARR:           $24,000                                     │
│  └─ Status:        ████████████████████  Success!             │
│                                                                 │
│  Assumptions:                                                   │
│  • 5-8% conversion rate (typical for education apps)           │
│  • 15% monthly churn                                           │
│  • Organic growth via word-of-mouth                            │
│  • $4.99/mo pricing (premium tier)                             │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## Decision Flowchart

```
                        ┌──────────────┐
                        │    START     │
                        │ What's your  │
                        │     goal?    │
                        └──────┬───────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
           ▼                   ▼                   ▼
    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
    │  Portfolio  │    │  Personal   │    │  Business   │
    │   Project   │    │     Use     │    │  /Revenue   │
    └─────┬───────┘    └─────┬───────┘    └─────┬───────┘
          │                  │                    │
          ▼                  ▼                    ▼
    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
    │ Quick Start │    │    Full     │    │  Freemium   │
    │   (3 hrs)   │    │  Features   │    │   Launch    │
    │             │    │  (15 hrs)   │    │  (35 hrs)   │
    └─────┬───────┘    └─────┬───────┘    └─────┬───────┘
          │                  │                    │
          ▼                  ▼                    ▼
    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
    │  Document   │    │  Use Daily  │    │   Validate  │
    │   Process   │    │   1 Week    │    │   w/Users   │
    └─────┬───────┘    └─────┬───────┘    └─────┬───────┘
          │                  │                    │
          ▼                  │                    ▼
    ┌─────────────┐          │              ┌─────────────┐
    │    Move     │          │              │    Build    │
    │  to Next    │          │              │   Premium   │
    │   Project   │          │              └─────┬───────┘
    └─────────────┘          │                    │
                             ▼                    ▼
                       ┌─────────────┐    ┌─────────────┐
                       │  Enjoying?  │    │   Launch    │
                       │   YES: Add  │    │  Publicly   │
                       │    Features │    └─────┬───────┘
                       │   NO: Tweak │          │
                       └─────────────┘          ▼
                                          ┌─────────────┐
                                          │   Monitor   │
                                          │   & Grow    │
                                          └─────────────┘
```

---

## Effort vs Impact Matrix

```
                        HIGH IMPACT
                             │
                             │
      ┌──────────────────────┼──────────────────────┐
      │                      │                      │
      │   CREATE            │    EXPAND TO         │
 LOW  │   EXERCISES    ┌────┼────┐  200 SPECIES    │  HIGH
      │   (must do)    │ AUDIO   │  (premium)      │
EFFORT│                │  FILES  │                 │ EFFORT
      │                └────┼────┘                 │
      │   FIX BUILD         │    USER VALIDATION   │
      │   (must do)         │    (before premium)  │
      └──────────────────────┼──────────────────────┘
                             │
                        LOW IMPACT

PRIORITIES:
1. Fix Build (low effort, high impact)      ← DO FIRST
2. Create Exercises (med effort, high impact) ← DO SECOND
3. Audio Files (med effort, med impact)      ← OPTIONAL
4. User Validation (med effort, high impact) ← BEFORE PREMIUM
5. Expand Species (high effort, high impact) ← ONLY IF VALIDATED
```

---

## Time Investment by Path

```
PATH 1: QUICK START
────────────────────────────────────────────────────────
Week 1:  ████░░░ (3 hours)  → Working app
────────────────────────────────────────────────────────

PATH 2: FULL FEATURES
────────────────────────────────────────────────────────
Week 1:  ████████░░░░░░░ (10 hours) → Quick Start + Expand
Week 2:  ███░░░░░░░░░░░░ (5 hours)  → Polish + Daily Use
────────────────────────────────────────────────────────
Total: 15 hours → Production-quality personal tool

PATH 3: FREEMIUM LAUNCH
────────────────────────────────────────────────────────
Week 1:  ████████░░░░░░░ (10 hours) → Foundation
Week 2:  ████████░░░░░░░ (10 hours) → Validation
Week 3:  ███████░░░░░░░░ (8 hours)  → Premium Build
Week 4:  ████░░░░░░░░░░░ (6 hours)  → Launch
────────────────────────────────────────────────────────
Total: 34 hours → Public product with revenue potential

ROI Analysis:
├─ Quick Start:   3 hrs  = Personal learning tool
├─ Full Features: 15 hrs = Portfolio showcase
└─ Freemium:      34 hrs = Potential $2K/mo MRR in year 1
```

---

## What You Do vs What Claude Does

```
┌─────────────────────────────────────────────────────────────┐
│                    WORK DISTRIBUTION                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  YOUR WORK (Strategic & Validation)                          │
│  ═══════════════════════════════════════════                │
│  • Make decisions (what features, how many species)          │
│  • Test everything manually                                  │
│  • Use app daily (dogfooding)                                │
│  • Recruit beta testers                                      │
│  • Deploy to GitHub Pages                                    │
│  • Marketing & launch                                        │
│  • Customer support                                          │
│                                                              │
│  Time: 25-35% of total                                       │
│  ████████░░░░░░░░░░░░░░░░░░░░░                             │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CLAUDE'S WORK (Implementation & Content)                    │
│  ═════════════════════════════════════════════              │
│  • Fix TypeScript build                                      │
│  • Generate exercise data (hundreds of exercises)            │
│  • Research & add species (up to 200)                        │
│  • Create vocabulary terms with etymology                    │
│  • Generate audio files (with TTS)                           │
│  • Implement UI features                                     │
│  • Write component code                                      │
│  • Add payment integration                                   │
│  • Validate data integrity                                   │
│  • Create documentation                                      │
│                                                              │
│  Time: 65-75% of total                                       │
│  ████████████████████████░░░░░░                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘

KEY INSIGHT: Claude does the heavy lifting, you do the thinking.
```

---

## Critical Success Metrics

### Quick Start (Path 1)

```
┌────────────────────────────────────────────┐
│  ✓ Build completes with no errors          │
│  ✓ 50 exercises load in browser            │
│  ✓ Can complete 10 exercises without bugs  │
│  ✓ Progress saves between sessions         │
│  ✓ Deployed to GitHub Pages successfully   │
└────────────────────────────────────────────┘

SUCCESS = You can learn 10 bird names TODAY
```

### Full Features (Path 2)

```
┌────────────────────────────────────────────┐
│  ✓ 50 species with images                  │
│  ✓ 250 exercises working                   │
│  ✓ Audio plays on all terms                │
│  ✓ Dashboard shows accurate stats          │
│  ✓ Used 5+ days in first week              │
│  ✓ Learned 20+ bird names in Spanish       │
└────────────────────────────────────────────┘

SUCCESS = You use it daily and enjoy it
```

### Freemium Launch (Path 3)

```
┌────────────────────────────────────────────┐
│  ✓ 100+ free users in first month          │
│  ✓ 5+ premium signups (5% conversion)      │
│  ✓ 70%+ user satisfaction                  │
│  ✓ <20% churn rate                         │
│  ✓ $50+ MRR after month 1                  │
└────────────────────────────────────────────┘

SUCCESS = Validated product with revenue
```

---

## Quick Reference: Commands You'll Use

```
┌─────────────────────────────────────────────────────────────┐
│  DEVELOPMENT COMMANDS                                        │
├─────────────────────────────────────────────────────────────┤
│  npm install              Install dependencies               │
│  npm run dev              Start dev server (localhost)       │
│  npm run build            Build for production               │
│  npm test                 Run test suite                     │
├─────────────────────────────────────────────────────────────┤
│  DEPLOYMENT COMMANDS                                         │
├─────────────────────────────────────────────────────────────┤
│  npm run deploy           Deploy to GitHub Pages             │
│  git add .                Stage all changes                  │
│  git commit -m "msg"      Commit with message                │
│  git push                 Push to GitHub                     │
├─────────────────────────────────────────────────────────────┤
│  DATA VALIDATION COMMANDS                                    │
├─────────────────────────────────────────────────────────────┤
│  cat data/species.json | jq length      Count species        │
│  cat data/exercises.json | jq empty     Validate JSON        │
│  ls data/*.json                          List data files     │
└─────────────────────────────────────────────────────────────┘
```

---

## When to Ask Claude for Help

```
┌─────────────────────────────────────────────────────────────┐
│  ASK CLAUDE WHEN:                                            │
├─────────────────────────────────────────────────────────────┤
│  ✓ Build fails with errors                                   │
│  ✓ Need to generate content (exercises, species, etc.)       │
│  ✓ Want to add a new feature                                 │
│  ✓ Code isn't working as expected                            │
│  ✓ Need help with deployment                                 │
│  ✓ Data validation fails                                     │
│  ✓ Want to optimize performance                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  DON'T ASK CLAUDE:                                           │
├─────────────────────────────────────────────────────────────┤
│  ✗ Which features to build (that's your decision)            │
│  ✗ How much to charge (market research needed)               │
│  ✗ Who your target users are (you decide strategy)           │
│  ✗ Whether your Spanish is correct (use a native speaker)    │
└─────────────────────────────────────────────────────────────┘
```

---

## Conclusion: Your Next Step

```
                    ┌──────────────────┐
                    │  Read This Doc?  │
                    │    YES ✓         │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Choose Path:    │
                    │  1, 2, or 3?     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Tell Claude:    │
                    │ "I choose Path X,│
                    │  let's start"    │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Claude begins   │
                    │  Phase 1...      │
                    └──────────────────┘

              🎯 You're ready to start!
```

---

**Questions? Ask Claude:**
- "Claude, I choose Path 1, let's fix the build"
- "Claude, I'm at Phase 2, create 50 exercises"
- "Claude, I'm stuck at [specific issue]"

**Good luck building AVES!** 🦅
