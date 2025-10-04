# 📊 Metrics Tracker - User Guide

**Companion tool for tracking portfolio metrics and calculating business KPIs**

---

## 🎯 What This Tool Does

The **Metrics Tracker** helps you:
1. ✅ Track raw numbers (signups, paying customers, revenue)
2. ✨ Auto-calculate derived metrics (conversion rate, churn, ARPU)
3. 📸 Save weekly snapshots (see growth over time)
4. 📋 Copy metrics to paste into sprint tracker gates
5. 🧮 Calculate LTV, CAC, break-even point
6. 📈 Visualize trends with charts

**Use alongside** `deployment-sprint-tracker.html` for complete sprint management.

---

## 🚀 Quick Start

```bash
# Open the metrics tracker
cd C:\Users\brand\Development\Project_Workspace\active-development\deployment_sprint
start metrics-tracker.html

# Enter your current numbers
# See calculated metrics update in real-time
# Click "📸 Save Weekly Snapshot" every Sunday
# Click "📋 Copy to Sprint Tracker" to paste into gates
```

---

## 📋 The 4 Tabs

### **Tab 1: 📊 Current Metrics (Main View)**

**Input Fields (You Enter):**
```
Total Signups: [___]           ← All users across all apps
Weekly Active Users: [___]      ← Active in last 7 days
Daily Active Users: [___]       ← Average per day
Paying Customers: [___]         ← Active subscriptions
Total Revenue This Month: [___] ← Actual $ collected
Cancelled This Month: [___]     ← Churned customers
Marketing Spend: [___]          ← Ads, tools, etc.
Infrastructure Cost: [___]      ← Hosting, APIs, etc.
```

**Auto-Calculated (Instant):**
```
✨ MRR: $___                    (Total Revenue)
✨ Conversion Rate: ___%        (Paying / Signups)
✨ Churn Rate: ___%             (Cancelled / Paying)
✨ Activation Rate: ___%        (Active / Signups)
✨ ARPU: $___                   (Revenue / Paying)
✨ Net Profit: $___             (Revenue - Costs)
```

**When to use:**
- Daily: Update paying customers, revenue
- Weekly: Update all fields before snapshot
- Anytime: Check calculated metrics

---

### **Tab 2: 📱 By Project (Optional)**

Track metrics for each project separately:

```
describe_it:
- Signups: [___]
- Weekly Active: [___]
- Paying: [___]
- MRR: [___]

subjunctive_practice:
- Signups: [___]
- Weekly Active: [___]
- Paying: [___]
- MRR: [___]

...etc
```

**When to use:**
- Want to see which project performs best
- Track individual project health
- Analyze which to focus on

---

### **Tab 3: 📈 History & Trends**

**Weekly Snapshots:**
- Bar chart showing MRR growth week-over-week
- Table comparing all snapshots
- See trends at a glance

**When to use:**
- Every Sunday: Review weekly growth
- Compare Week 4 vs Week 5 vs Week 6
- See if growth rate is accelerating or slowing

---

### **Tab 4: 🧮 Calculator**

**Three calculators:**

**1. LTV (Lifetime Value):**
```
Enter:
- Avg Monthly Revenue per Customer: $7
- Avg Customer Lifetime: 12 months
- Gross Margin: 70%

Get:
- Customer LTV: $58.80
```

**2. CAC (Customer Acquisition Cost):**
```
Enter:
- Total Marketing Spend: $200
- New Customers Acquired: 20

Get:
- CAC: $10
- LTV:CAC Ratio: 5.9:1 ✅ (Target: >3:1)
```

**3. Break-Even:**
```
Enter:
- Monthly Fixed Costs: $125
- Avg Revenue per Customer: $7

Get:
- Break-Even: 18 customers
- Current Status: Need 10 more customers
```

---

## 🔄 Weekly Workflow

### **Recommended Sunday Routine (10 minutes):**

**Step 1: Gather Data from Platforms (5 min)**
```bash
# Check each platform's dashboard:

Vercel Analytics (describe_it, subjunctive):
- Total signups this week: ___
- Daily active users: ___

Railway/Supabase Dashboards:
- Database user count: ___
- API requests (indicates activity): ___

Stripe Dashboard:
- Active subscriptions: ___
- MRR: ___
- New customers this week: ___
- Cancelled: ___

Google Analytics / Plausible (if installed):
- Weekly active users: ___
```

**Step 2: Enter into Metrics Tracker (3 min)**
```bash
# Open metrics tracker
start metrics-tracker.html

# Update all fields with current numbers
# Watch calculated metrics update automatically
```

**Step 3: Save Snapshot (1 min)**
```bash
# Click "📸 Save Weekly Snapshot"
# Snapshot recorded with timestamp
# Can now compare week-over-week
```

**Step 4: Copy to Sprint Tracker (1 min)**
```bash
# Click "📋 Copy to Sprint Tracker"
# Copy the formatted text
# Open deployment-sprint-tracker.html
# Expand current week's Sunday (Day 27, 34, 41, or 48)
# Paste values into yellow metrics section
```

---

## 📊 Example Real Usage

### **Week 4 End (Day 27) - Launch Week Results**

**What happened this week:**
- Launched describe_it on ProductHunt Tuesday
- Launched subjunctive_practice on ProductHunt Thursday
- Got first paying customers!

**Gather from platforms:**
```
Vercel: 147 total signups
Analytics: 58 weekly active users
Stripe: 8 paying customers, $39.92 total revenue
Cancelled: 0
Marketing: $0 (organic only)
Infrastructure: $35 (Vercel + Railway + Supabase)
```

**Enter into Metrics Tracker:**
```
Total Signups: 147
Weekly Active: 58
Paying Customers: 8
Total Revenue: 40  (round up)
Cancelled: 0
Marketing Spend: 0
Infrastructure: 35
```

**See Calculations:**
```
✨ MRR: $40
✨ Conversion: 5.4% (8/147)
✨ Churn: 0%
✨ Activation: 39.5% (58/147)
✨ ARPU: $5.00 (40/8)
✨ Profit: $5 (40 - 35)
```

**Click "📸 Save Weekly Snapshot"**
- Week 4 snapshot saved with all data

**Click "📋 Copy to Sprint Tracker"**
- Gets formatted text with all values
- Copy to clipboard
- Open sprint tracker
- Go to Day 27
- Paste into metrics fields

---

## 🎯 Tips for Accurate Tracking

### **Tip 1: Track Consistently**

**Same day every week:**
- Recommended: Sunday evening
- Gather from all platforms
- Enter into tracker
- Save snapshot
- Takes 10 minutes

**Why Sundays:**
- End of week (complete 7 days)
- Matches sprint tracker gates (Days 7, 14, 21, 27, 34, etc.)
- Weekly rhythm easier than daily

---

### **Tip 2: Where to Find Each Number**

**Total Signups:**
```
Supabase: SELECT COUNT(*) FROM users;
Or: Check each app's database user count
Sum across all projects
```

**Weekly Active Users:**
```
Analytics tools (Plausible, Google Analytics)
Or: Check app dashboards
Or: Database: SELECT COUNT(DISTINCT user_id) FROM events
    WHERE created_at > NOW() - INTERVAL '7 days';
```

**Paying Customers:**
```
Stripe Dashboard → Customers → Active subscriptions
Or: Database: SELECT COUNT(*) FROM subscriptions
    WHERE status = 'active';
```

**MRR (Monthly Recurring Revenue):**
```
Stripe Dashboard → Shows MRR directly
Or: Sum all active subscription amounts
```

**Cancelled:**
```
Stripe Dashboard → Customers → Cancelled this month
Or: Track manually when you get cancellation emails
```

---

### **Tip 3: Use the Calculators**

**Before pricing decisions:**
```
Calculator Tab → LTV Calculator

If customer stays 12 months @ $5/month with 70% margin:
LTV = $5 × 12 × 0.70 = $42

If CAC is $10:
LTV:CAC = 4.2:1 ✅ Good!

Decision: Pricing is viable, can spend up to $14 on acquisition
```

**To find break-even:**
```
Calculator Tab → Break-Even

Costs: $125/month
ARPU: $7

Break-Even = 18 customers

Current: 8 customers
Status: Need 10 more to break even
```

---

## 🔗 Integration with Sprint Tracker

### **Two Tools Work Together:**

**Metrics Tracker** (this tool):
- Track raw numbers weekly
- Calculate business metrics
- See trends and growth
- Export snapshots

**Sprint Tracker** (deployment-sprint-tracker.html):
- Track daily tasks
- Document decisions
- Record historical gates
- Manage sprint progress

**Workflow:**
```
Sunday Evening:
1. Gather metrics from platforms (5 min)
2. Enter into Metrics Tracker (3 min)
3. Review calculated metrics
4. Save snapshot
5. Click "Copy to Sprint Tracker"
6. Open sprint tracker
7. Navigate to this week's Sunday gate
8. Paste values
9. Both tools now have complete data!
```

---

## 📈 Interpreting Your Metrics

### **Good Benchmarks:**

**Conversion Rate (Free → Paid):**
- 🟢 5-10%: Excellent
- 🟡 3-5%: Good
- 🔴 <3%: Needs improvement

**Churn Rate (Monthly):**
- 🟢 <15%: Excellent retention
- 🟡 15-30%: Average
- 🔴 >30%: High churn, fix retention

**Activation Rate:**
- 🟢 >50%: Users engage quickly
- 🟡 30-50%: Good onboarding
- 🔴 <30%: Improve first-time UX

**LTV:CAC Ratio:**
- 🟢 >3:1: Healthy business
- 🟡 2-3:1: OK but optimize
- 🔴 <2:1: Unsustainable

---

## 🎯 Weekly Tracking Template

**Copy this checklist, use every Sunday:**

```markdown
# Week ___ Metrics (Date: _______)

## Platform Data Collection
□ Vercel/Supabase: Total signups = ___
□ Analytics: Weekly active = ___
□ Stripe: Paying customers = ___
□ Stripe: MRR = $___
□ Stripe: Cancelled this month = ___
□ Costs: Marketing = $___, Infra = $___

## Enter into Metrics Tracker
□ All fields filled
□ Calculated metrics reviewed
□ Snapshot saved (📸 button)
□ Copied to sprint tracker (📋 button)

## Analysis
□ Conversion rate trend: [up/down/stable]
□ Churn acceptable: [yes/no]
□ On track for goals: [yes/no/ahead]

## Actions for Next Week
□ If conversion low: Improve pricing page
□ If churn high: Interview churned users
□ If activation low: Fix onboarding
```

---

## 💾 Data Persistence

**All data saved to localStorage:**
- Current metrics
- Weekly snapshots
- Project breakdowns
- Auto-saves on every change

**Export weekly:**
- Click "💾 Export Data"
- Save JSON file
- Backup to cloud

---

## 🚨 Troubleshooting

### **"Metrics not calculating"**

**Check:**
- All input fields have numbers (not empty)
- Numbers are valid (no negative values where inappropriate)
- Refresh page if stale

---

### **"Can't find where to enter MRR"**

**MRR is calculated automatically:**
- Enter "Total Revenue This Month"
- MRR = Total Revenue (assumes recurring)
- For accurate MRR, enter what Stripe shows

---

### **"Snapshots not showing"**

**Must save first:**
- Enter current metrics
- Click "📸 Save Weekly Snapshot"
- Switch to "History & Trends" tab
- See chart and table

---

## ✅ Quick Reference

**Open Metrics Tracker:**
```bash
start metrics-tracker.html
```

**Every Sunday (10 min):**
1. Gather numbers from platforms
2. Enter into tracker
3. Save snapshot
4. Copy to sprint tracker

**Every Day (Optional):**
- Update paying customers if changed
- Update MRR if new customer
- Quick check of metrics

**Keyboard Shortcuts:**
- Ctrl+S: Save data
- Escape: Close modal

---

*Created: 2025-10-04*
*Version: 1.0*
*Works with: deployment-sprint-tracker.html*
*Purpose: Comprehensive metrics tracking and business calculations*
