// Task Guides Extension for Weeks 2-8 and Month 3
// Add these to the taskGuides object in deployment-sprint-tracker.html

const taskGuidesExtension = {
    // WEEK 2 - Days 8-13
    'd8t1': `<h4>📖 Improve describe_it UX</h4>
    <p>Based on Week 1 usage feedback, implement critical UX improvements and bug fixes for describe_it.</p>
    <pre>Tell Claude Code:
"Based on my usage of describe_it, implement these improvements:

Priority 1 (Must Fix):
1. [Top frustration from validation]
2. [Second issue]

Priority 2 (Nice to Have):
3. [Enhancement]
4. [Quality improvement]

For each:
- Show me the current behavior
- Propose the fix
- Implement after I approve
- Deploy to Vercel
- I'll test immediately"

# Deploy updates
vercel --prod

# Test improvements immediately</pre>
    <ul>
        <li>Focus on top friction points from Week 1 validation</li>
        <li>Fix critical bugs that block usage</li>
        <li>Improve most-used features</li>
        <li>Deploy and test same day</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: describe_it UX improved and deployed</div>`,

    'd8t2': `<h4>📖 Improve subjunctive_practice UX</h4>
    <p>Apply same improvement pattern to subjunctive_practice based on personal usage insights.</p>
    <pre>Tell Claude Code:
"For subjunctive_practice, implement:
1. [Critical fix 1]
2. [Critical fix 2]
3. [UX improvement]

Test locally first, then deploy to Railway + Vercel."

# Deploy updates
railway up  # Backend
vercel --prod  # Frontend

# Test thoroughly</pre>
    <ul>
        <li>Fix critical bugs from Week 1</li>
        <li>Improve exercise flow if needed</li>
        <li>Enhance progress tracking</li>
        <li>Test full user journey</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: subjunctive_practice optimized and tested</div>`,

    'd8t3': `<h4>📖 Create Beta Testing Assets</h4>
    <p>Prepare all materials needed for beta user recruitment and feedback collection.</p>
    <pre>Tell Claude Code:
"Create beta testing assets for describe_it and subjunctive_practice:

1. Google Forms for feedback (2 forms):
   Questions:
   - How many days did you use it? (1-7)
   - Did you find it helpful? (1-5 stars)
   - What worked well? (text)
   - What was frustrating? (text)
   - Would you pay for premium features? (Y/N/Maybe)
   - If yes, what price: $2.99, $4.99, $9.99/month?
   - Additional comments

   Export as markdown, I'll create in Google Forms

2. Email templates (2 templates):
   - Beta invitation email
   - Weekly check-in email
   - Thank you + feedback request email

3. Onboarding guides (2 guides):
   - Quick start guide for new users
   - Feature walkthrough
   - Troubleshooting FAQ

Put all in ~/deployment_sprint/beta-materials/"</pre>
    <ul>
        <li>Create Google Forms for structured feedback</li>
        <li>Write email templates for beta communication</li>
        <li>Prepare onboarding guides</li>
        <li>Save all materials in beta-materials folder</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Beta testing assets ready to use</div>`,

    'd8t4': `<h4>📖 Setup Analytics Tracking</h4>
    <p>Add simple analytics to track user behavior without external services.</p>
    <pre>Tell Claude Code:
"Add simple analytics tracking to describe_it and subjunctive_practice:

For describe_it:
- Track: Searches performed, descriptions generated, vocab saved
- Store in Supabase analytics table
- Create simple dashboard page at /admin/stats (protected route)

For subjunctive_practice:
- Track: Exercises completed, accuracy rates, daily active users
- Store in PostgreSQL analytics table
- Create dashboard at /admin/stats

Use existing auth for protection.
No external services (Google Analytics), keep it simple."

# Deploy analytics updates
# Test dashboards
# Verify data collection working</pre>
    <ul>
        <li>Create analytics tables in databases</li>
        <li>Track key user actions</li>
        <li>Build protected admin dashboards</li>
        <li>Test data collection</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Analytics tracking both apps</div>`,

    'd9t1': `<h4>📖 Recruit describe_it Beta Testers</h4>
    <p>Find 10 Spanish learners to test describe_it for one week.</p>
    <pre>Channels to post (Target: 10 testers):

1. Reddit (30 min):
   □ r/Spanish (900k members)
   □ r/languagelearning (1.5M members)
   □ r/learnspanish (90k members)

2. Discord Servers (30 min):
   □ Spanish Learning Server
   □ Language Exchange
   □ The Spanish Hub

3. Language Exchange Apps (30 min):
   □ Tandem - Message 5 active users
   □ HelloTalk - Post in community
   □ Italki - Community forum

4. Personal Network (30 min):
   □ Email 5 friends learning Spanish
   □ Post on your LinkedIn/Twitter
   □ Ask in any Spanish classes you're in</pre>
    <ul>
        <li>Use beta invitation template</li>
        <li>Focus on Spanish learners</li>
        <li>Highlight free beta access</li>
        <li>Track signup responses</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Beta invites sent for describe_it</div>`,

    'd9t2': `<h4>📖 Recruit subjunctive_practice Beta Testers</h4>
    <p>Find 10 Spanish learners specifically interested in subjunctive practice.</p>
    <pre>Reddit posts:
□ "Built a Spanish subjunctive practice app - free beta"
□ Focus on the specific pain point (subjunctive is hard)
□ Show screenshots

Discord:
□ Same servers as describe_it
□ Different message (focus on exercises/gamification)

Personal:
□ Spanish teachers you know
□ Spanish learning communities
□ University Spanish departments (email profs)</pre>
    <ul>
        <li>Target users struggling with subjunctive</li>
        <li>Emphasize exercise variety</li>
        <li>Show progress tracking features</li>
        <li>Collect email addresses for beta access</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Beta invites sent for subjunctive_practice</div>`,

    'd9t3': `<h4>📖 Process Beta Signups</h4>
    <p>Organize and prepare beta testers as they sign up.</p>
    <pre>For each interested person:
1. Send personal thank you email
2. Include access link
3. Include feedback form link
4. Set calendar reminder to check-in Day 3
5. Add to beta tracking spreadsheet:
   - Name, Email, Project, Date Started, Status

Create tracking sheet:
Tell Claude Code:
"Create a CSV template for tracking beta testers:
Columns: Name, Email, Project, Start Date, Last Active,
         Exercises Completed, Feedback Submitted,
         Status (Active/Churned/Completed)

Generate sample data for 10 testers."

# Fill in real data as signups come in</pre>
    <ul>
        <li>Respond to each signup personally</li>
        <li>Send onboarding materials</li>
        <li>Track in spreadsheet</li>
        <li>Schedule follow-up reminders</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Beta user management system ready</div>`,

    'd10t1': `<h4>📖 Onboard describe_it Beta Users</h4>
    <p>Send welcoming onboarding emails to all describe_it beta testers.</p>
    <pre>Email 1 (Immediate - Welcome):
Subject: Welcome to describe_it Beta! 🎉

Hi [Name],

Thanks for joining the beta!

Quick Start (2 minutes):
1. Visit: [your describe_it URL]
2. Sign up with any email
3. Search for an image (try "sunset")
4. Generate description
5. Save new Spanish vocabulary

Your mission this week:
□ Use for 15 min/day
□ Try to learn 30 new words
□ Note anything confusing
□ Fill out feedback form Friday: [form URL]

Questions? Reply to this email anytime.

Thanks!
[Your name]

# Send to all describe_it beta users
# Track: Who opens, who uses app</pre>
    <ul>
        <li>Send personalized welcome emails</li>
        <li>Include quick start guide</li>
        <li>Set clear expectations</li>
        <li>Provide feedback form link</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: describe_it beta users onboarded</div>`,

    'd10t2': `<h4>📖 Onboard subjunctive_practice Beta Users</h4>
    <p>Send onboarding emails to subjunctive_practice testers.</p>
    <pre>Email 1 (Welcome):
Subject: Welcome to Subjunctive Practice Beta!

Hi [Name],

Excited to have you test the subjunctive practice app!

Quick Start:
1. Visit: [URL]
2. Register with email
3. Complete 5 exercises to get started
4. Check your progress dashboard

Your mission:
□ 10-15 exercises/day for 1 week
□ Try all exercise types
□ Report any bugs
□ Feedback form Friday: [form URL]

Let me know if you have any issues!

[Your name]

# Send to all subjunctive beta users</pre>
    <ul>
        <li>Customize email for subjunctive focus</li>
        <li>Explain exercise types</li>
        <li>Set daily usage goal</li>
        <li>Include support contact</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: All beta users onboarded</div>`,

    'd10t3': `<h4>📖 Monitor Beta Activity</h4>
    <p>Check analytics dashboards and respond to early feedback.</p>
    <pre># Check analytics dashboards

For describe_it:
□ How many beta users logged in?
□ How many performed searches?
□ Any error spikes?
□ Any support emails?

For subjunctive_practice:
□ How many registered?
□ How many completed exercises?
□ What's average accuracy?
□ Any bugs reported?

# Respond to any questions immediately
# Fix any critical bugs same-day

Tell Claude Code:
"Bug reported: [description]
Fix and deploy within 2 hours."</pre>
    <ul>
        <li>Review user activity hourly</li>
        <li>Respond to support requests quickly</li>
        <li>Fix critical bugs immediately</li>
        <li>Document feedback themes</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Beta week started, monitoring active</div>`,

    'd11t1': `<h4>📖 Send Mid-Week Check-in Emails</h4>
    <p>Send check-in emails to beta users on Day 3 of testing.</p>
    <pre>Email 2 (Mid-Week Check-in):
Subject: How's it going with [App Name]?

Hi [Name],

You're halfway through the beta week!

Quick check-in:
- Have you used the app? (Y/N)
- Any blockers or confusing parts?
- What feature do you use most?
- Any bugs to report?

Reply with quick thoughts, or wait for Friday's form.

Thanks!
[Your name]

# Send to all
# Compile responses</pre>
    <ul>
        <li>Send to all beta testers</li>
        <li>Ask specific questions</li>
        <li>Encourage feedback</li>
        <li>Note common issues</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Mid-week feedback collected</div>`,

    'd11t2': `<h4>📖 Implement Quick Wins</h4>
    <p>Fix issues mentioned by multiple beta users immediately.</p>
    <pre># Analyze early feedback
# Implement quick wins

Common feedback themes:
If 3+ people mention same issue → Fix immediately

Tell Claude Code:
"Multiple beta users reported: [issue]
This is blocking usage. Fix priority 1.
Implement fix, test, deploy today."

# Deploy fixes
# Email beta users: "Just fixed [issue] based on your feedback!"</pre>
    <ul>
        <li>Identify most common complaints</li>
        <li>Prioritize fixes by impact</li>
        <li>Deploy same day</li>
        <li>Show responsiveness to users</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Quick wins deployed, users see responsiveness</div>`,

    'd12t1': `<h4>📖 Send Feedback Request</h4>
    <p>Send final feedback request to all beta testers.</p>
    <pre>Email 3 (Feedback Request):
Subject: Last day of beta - quick feedback?

Hi [Name],

Today's the last day of the beta week!

If you have 5 minutes, please fill out the feedback form:
[Google Form URL]

Your input will directly shape the final product.

Even if you didn't use it much, I'd love to know why!

Thanks so much for testing!
[Your name]

# Send to all beta users
# Monitor form responses throughout day</pre>
    <ul>
        <li>Send on final day of beta</li>
        <li>Include feedback form link</li>
        <li>Request honest feedback</li>
        <li>Thank beta testers</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Feedback requests sent</div>`,

    'd12t2': `<h4>📖 Analyze Feedback</h4>
    <p>Review and summarize all beta feedback collected.</p>
    <pre># Analyze feedback as it comes in

Create summary:
Tell Claude Code:
"Help me analyze beta feedback.
Create a summary report for each project:

Metrics:
- Total beta users: X
- Active users (used 3+ times): X
- Completion rate: X%
- Average rating: X/5
- Would recommend: X%
- Willing to pay: X%

Top Issues (by frequency):
1. [Issue] - Mentioned by X users
2. [Issue] - Mentioned by X users

Top Feature Requests:
1. [Feature] - Requested by X users
2. [Feature] - Requested by X users

Positive Feedback:
- [Quote 1]
- [Quote 2]

Decision: Proceed to monetization? YES/NO/MAYBE"</pre>
    <ul>
        <li>Compile all feedback</li>
        <li>Calculate key metrics</li>
        <li>Identify top issues</li>
        <li>List feature requests</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Feedback analyzed, decisions ready</div>`,

    'd13t1': `<h4>📖 Beta Results Review</h4>
    <p>Evaluate beta results and score each project.</p>
    <pre># For each HIGH priority project:

Questions to answer:
1. Did 50%+ of beta users use it 3+ times?
   → If YES: Strong signal, proceed to monetization
   → If NO: Identify blockers, iterate

2. Did 70%+ say they'd recommend?
   → If YES: Product-market fit signal
   → If NO: Major improvements needed

3. Did 40%+ say they'd pay?
   → If YES: Ready for paid tiers
   → If NO: Stay free longer, build more value

4. What's the #1 requested feature?
   → Implement this before public launch

# Score each project: 0-10
Final Score = (Retention × 3) + (NPS × 2) + (WTP × 5)
Where:
- Retention = % who used 5+ days (0-1.0)
- NPS = % who'd recommend (0-1.0)
- WTP = % who'd pay (0-1.0)

Example:
- Retention: 60% = 0.6 × 3 = 1.8
- NPS: 80% = 0.8 × 2 = 1.6
- WTP: 50% = 0.5 × 5 = 2.5
- Score: 5.9/10 = GOOD, proceed to monetization</pre>
    <ul>
        <li>Calculate retention metrics</li>
        <li>Score each project objectively</li>
        <li>Identify top performers</li>
        <li>Make go/no-go decisions</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Beta results quantified and reviewed</div>`,

    'd13t2': `<h4>📖 Plan Weeks 3-4</h4>
    <p>Create actionable plan for next two weeks based on beta results.</p>
    <pre>Based on beta results, plan next 2 weeks:

Projects Scoring 6+/10:
→ Implement Stripe payments Week 3
→ Launch publicly Week 4

Projects Scoring 4-6/10:
→ Implement top feature requests Week 3
→ Retest with 10 more users Week 4

Projects Scoring <4/10:
→ Major pivot needed or defer

# Create specific Week 3-4 roadmap</pre>
    <ul>
        <li>Prioritize high-scoring projects</li>
        <li>Plan monetization implementation</li>
        <li>Schedule public launch</li>
        <li>Defer low-scoring projects</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Week 3-4 plan complete</div>`,

    'd13t3': `<h4>📖 Create Monetization Plan</h4>
    <p>Design pricing tiers and Stripe integration strategy.</p>
    <pre>For projects proceeding to monetization:

Tell Claude Code:
"Create Stripe integration plan for [Project Name]:

Free Tier:
- [Feature limits]
- Goal: Hook users

Pro Tier: $X/month
- [Premium features]
- Goal: Main revenue

Implementation tasks:
1. Stripe account setup (30 min)
2. Backend integration (2 hours)
3. Frontend pricing page (1 hour)
4. Paywall logic (1 hour)
5. Testing (1 hour)
6. Deploy (30 min)

Total: 6 hours

Generate the code for backend Stripe integration."

# Review plan
# Prepare for Week 3 implementation</pre>
    <ul>
        <li>Define free vs paid features</li>
        <li>Set pricing ($4.99/month recommended)</li>
        <li>Plan Stripe integration steps</li>
        <li>Estimate implementation time</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Monetization strategy ready for Week 3</div>`,

    // WEEK 3 - Days 14-20
    'd14t1': `<h4>📖 Stripe Account Setup</h4>
    <p>Create and configure Stripe account for payment processing.</p>
    <pre># Set up Stripe for all projects (one account)

1. Create Stripe account: https://dashboard.stripe.com/register
2. Complete business verification
3. Enable test mode
4. Create products:

   For describe_it:
   □ Free tier: $0
   □ Pro Monthly: $4.99/month
   □ Pro Yearly: $49/year (save $10)

   For subjunctive_practice:
   □ Free tier: $0
   □ Pro Monthly: $4.99/month
   □ Pro Yearly: $49/year

5. Get API keys:
   □ Publishable key (test): pk_test_xxx
   □ Secret key (test): sk_test_xxx

6. Configure webhook endpoint (Claude will create this)

# Store keys in password manager</pre>
    <ul>
        <li>Complete Stripe registration</li>
        <li>Create product listings</li>
        <li>Get test API keys</li>
        <li>Store credentials securely</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Stripe configured for both apps</div>`,

    'd14t2': `<h4>📖 Generate Payment Integration Code</h4>
    <p>Use Claude Code to generate complete Stripe integration code.</p>
    <pre>Tell Claude Code:
"Generate complete Stripe payment integration for describe_it and subjunctive_practice.

For BOTH projects, create:

Backend:
1. /api/payments/create-checkout-session
   - Accept plan parameter (pro_monthly, pro_yearly)
   - Create Stripe checkout session
   - Return checkout URL

2. /api/payments/webhook
   - Verify Stripe signature
   - Handle: checkout.session.completed
   - Handle: customer.subscription.deleted
   - Handle: invoice.payment_failed
   - Update user subscription status in database

3. /api/payments/customer-portal
   - Generate Stripe customer portal link
   - Allow subscription management

4. Middleware: @requires_subscription decorator
   - Check user subscription status
   - Return 402 if free tier hitting limits

Frontend:
1. /pricing page
   - Show Free vs Pro comparison
   - 'Upgrade' buttons → checkout

2. /dashboard/billing page
   - Current plan
   - Usage stats
   - Manage subscription button

3. Paywall modals
   - Show when free tier limit hit
   - Explain Pro benefits

Generate all code, show me the structure first for approval."

# Review generated code
# Approve
# Save to both projects</pre>
    <ul>
        <li>Generate backend payment routes</li>
        <li>Create webhook handlers</li>
        <li>Build frontend pricing pages</li>
        <li>Implement paywall logic</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Payment code generated for both projects</div>`,

    'd15t1': `<h4>📖 describe_it Payment Backend</h4>
    <p>Implement Stripe backend integration for describe_it.</p>
    <pre>cd ../describe_it

# Implement Stripe integration
Tell Claude Code:
"Implement the Stripe backend code you generated yesterday.
Steps:
1. Add Stripe SDK to package.json
2. Create payment routes
3. Add webhook handler
4. Update database schema (add subscription fields to users table)
5. Create migration
6. Add subscription checking middleware
7. Test with Stripe test keys locally
8. Deploy to Vercel"

# Test payment flow locally
# Deploy to production
vercel --prod</pre>
    <ul>
        <li>Install Stripe SDK</li>
        <li>Create API routes</li>
        <li>Update database schema</li>
        <li>Test locally with test cards</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: describe_it payment backend LIVE</div>`,

    'd15t2': `<h4>📖 subjunctive_practice Payment Backend</h4>
    <p>Implement Stripe backend for subjunctive_practice (FastAPI).</p>
    <pre>cd ../subjunctive_practice/backend

Tell Claude Code:
"Implement Stripe integration for subjunctive_practice backend.
Reuse the same patterns from describe_it.
Adapt for FastAPI (not Next.js API routes).

Deploy to Railway after testing."

# Test locally
# Deploy to Railway
railway up</pre>
    <ul>
        <li>Adapt code for FastAPI framework</li>
        <li>Create payment endpoints</li>
        <li>Test with Stripe test mode</li>
        <li>Deploy to Railway</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: subjunctive_practice payment backend LIVE</div>`,

    'd15t3': `<h4>📖 describe_it Payment Frontend</h4>
    <p>Build pricing pages and payment UI for describe_it.</p>
    <pre>For describe_it:
Tell Claude Code:
"Implement the Stripe frontend:
1. Create /pricing page with tier comparison
2. Create /dashboard/billing page
3. Add paywall modal component
4. Add 'Upgrade to Pro' CTAs in relevant places
5. Test checkout flow with test card (4242 4242 4242 4242)
6. Verify webhook updates subscription status
7. Verify pro features unlock after payment
8. Deploy to Vercel"

# Test thoroughly
vercel --prod</pre>
    <ul>
        <li>Create pricing page with tiers</li>
        <li>Build billing dashboard</li>
        <li>Add paywall modals</li>
        <li>Test complete flow</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: describe_it payment frontend LIVE</div>`,

    'd15t4': `<h4>📖 subjunctive_practice Payment Frontend</h4>
    <p>Build pricing and billing UI for subjunctive_practice.</p>
    <pre>cd ../subjunctive_practice/frontend

Tell Claude Code:
"Same pattern as describe_it, but for subjunctive_practice.
Deploy to Vercel after testing."

vercel --prod</pre>
    <ul>
        <li>Create pricing page</li>
        <li>Build billing management</li>
        <li>Test checkout flow</li>
        <li>Deploy to production</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Both apps have complete payment flows</div>`,

    'd16t1': `<h4>📖 Test describe_it Payment Flow</h4>
    <p>Comprehensive end-to-end payment testing for describe_it.</p>
    <pre># End-to-end payment testing

Test Scenario 1: Free User Hits Limit
1. Create new free account
2. Use until hitting free tier limit (10 descriptions/day)
3. Verify paywall appears
4. Verify messaging is clear
5. Verify upgrade CTA works

Test Scenario 2: Successful Payment
1. Click "Upgrade to Pro"
2. Enter test card: 4242 4242 4242 4242
3. Complete checkout
4. Verify redirect back to app
5. Verify subscription status = "pro"
6. Verify can now generate unlimited descriptions
7. Check Stripe dashboard shows subscription

Test Scenario 3: Subscription Management
1. Go to /dashboard/billing
2. Click "Manage Subscription"
3. Opens Stripe customer portal
4. Can view invoices, update payment method
5. Test cancellation flow (but don't actually cancel)

Test Scenario 4: Webhook Processing
1. Use Stripe CLI: stripe listen --forward-to localhost:3000/api/payments/webhook
2. Trigger test webhook: stripe trigger checkout.session.completed
3. Verify database updates
4. Check logs

# Fix any issues found
# Redeploy</pre>
    <ul>
        <li>Test free tier limits</li>
        <li>Test payment flow with test card</li>
        <li>Test subscription management</li>
        <li>Verify webhook processing</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: describe_it payments working perfectly</div>`,

    'd16t2': `<h4>📖 Test subjunctive Payment Flow</h4>
    <p>Same comprehensive testing for subjunctive_practice.</p>
    <pre># Same comprehensive testing as describe_it
# Fix any issues
# Redeploy</pre>
    <ul>
        <li>Test all payment scenarios</li>
        <li>Verify webhooks work correctly</li>
        <li>Test on mobile devices</li>
        <li>Fix any bugs found</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: subjunctive_practice payments working</div>`,

    'd16t3': `<h4>📖 Switch to Live Mode</h4>
    <p>Activate production Stripe keys and test with real payment.</p>
    <pre># Move from test mode to production

1. Stripe Dashboard:
   □ Activate account (provide business info)
   □ Switch to Live mode
   □ Get production API keys
   □ Configure webhook production endpoint

2. Update environment variables:
   For describe_it (Vercel):
   STRIPE_SECRET_KEY=sk_live_xxx (was sk_test_xxx)
   STRIPE_PUBLISHABLE_KEY=pk_live_xxx

   For subjunctive_practice (Railway):
   STRIPE_SECRET_KEY=sk_live_xxx

3. Test with REAL card (charge yourself $4.99)
   □ Complete payment
   □ Verify it works
   □ Cancel subscription
   □ Get refund

# Deploy production configs
vercel --prod
railway up</pre>
    <ul>
        <li>Activate Stripe account</li>
        <li>Switch to live API keys</li>
        <li>Test with real payment</li>
        <li>Verify refund process works</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: LIVE payments enabled, tested with real money</div>`,

    'd16t4': `<h4>📖 Create Admin Dashboards</h4>
    <p>Build revenue tracking dashboards for monitoring.</p>
    <pre>Tell Claude Code:
"Create admin dashboards for describe_it and subjunctive_practice at /admin route.

Show:
- Total users (free vs pro)
- MRR (monthly recurring revenue)
- New signups today/week/month
- Churn rate
- Most active users
- Recent payments
- Failed payments (needs attention)

Protect with password or admin email whitelist.
Make it read-only, clean, fast."

# Deploy dashboards
# Bookmark URLs</pre>
    <ul>
        <li>Create admin-only routes</li>
        <li>Show key revenue metrics</li>
        <li>Display user statistics</li>
        <li>Protect with authentication</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Revenue tracking dashboards live</div>`,

    'd17t1': `<h4>📖 Create Demo Videos</h4>
    <p>Record screen captures showing key features of each app.</p>
    <pre>Task 1: Demo Videos (1 hour)
□ Record 2-minute screen capture for each app
□ Show: Main feature, value prop, how to use
□ Upload to YouTube
□ Embed on landing pages</pre>
    <ul>
        <li>Use screen recording software (OBS, Loom)</li>
        <li>Keep videos short (2-3 minutes)</li>
        <li>Show actual usage, not slides</li>
        <li>Upload to YouTube as unlisted</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Demo videos created and uploaded</div>`,

    'd17t2': `<h4>📖 Capture Screenshots</h4>
    <p>Take high-quality screenshots for marketing materials.</p>
    <pre>Task 2: Screenshots (30 min)
□ Capture 5-6 key screenshots per app
□ Home page, core feature, results/progress
□ Save for social media + ProductHunt</pre>
    <ul>
        <li>Use full browser window (hide extensions)</li>
        <li>Show actual data, not lorem ipsum</li>
        <li>Capture on both desktop and mobile</li>
        <li>Save in high resolution</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Marketing screenshots captured</div>`,

    'd17t3': `<h4>📖 Generate Marketing Copy</h4>
    <p>Write compelling marketing copy for launch channels.</p>
    <pre>Task 3: Marketing Copy (30 min)
Tell Claude Code:
"Write marketing copy for:
1. ProductHunt post (describe_it)
2. Reddit post (r/languagelearning)
3. Twitter announcement
4. LinkedIn post

For each, emphasize: visual learning, AI-powered, free tier available"

# Review generated copy
# Edit for your voice</pre>
    <ul>
        <li>Generate copy for each platform</li>
        <li>Tailor messaging per audience</li>
        <li>Highlight unique value props</li>
        <li>Include CTAs</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Marketing copy ready for all channels</div>`,

    'd17t4': `<h4>📖 Optimize Landing Pages</h4>
    <p>Improve conversion rates on homepage and landing pages.</p>
    <pre>Tell Claude Code:
"Optimize landing pages for describe_it and subjunctive_practice:

For each, ensure homepage has:
1. Clear value proposition (above fold)
2. 'Try Free' CTA button (prominent)
3. Feature showcase (3-4 key features)
4. Social proof (beta testimonials if available)
5. Pricing comparison (Free vs Pro)
6. FAQ section (common questions)

Update both landing pages, deploy."

# Review changes
# A/B test CTA button text if possible
# Deploy

vercel --prod (for both)</pre>
    <ul>
        <li>Add clear value proposition</li>
        <li>Make CTAs prominent</li>
        <li>Add social proof if available</li>
        <li>Include FAQ section</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Landing pages conversion-optimized</div>`,

    'd17t5': `<h4>📖 Draft ProductHunt Posts</h4>
    <p>Prepare ProductHunt submissions (don't publish yet).</p>
    <pre># Prepare ProductHunt submissions (don't submit yet)

For describe_it:
Title: "describe_it - Learn Spanish through AI-powered image descriptions"
Tagline: "Visual language learning with AI"
Description: [Use Claude's generated copy]
First Comment: [Founder story, tech stack, ask for feedback]

For subjunctive_practice:
Title: "Spanish Subjunctive Practice - Master the hardest Spanish tense"
Tagline: "Interactive exercises for Spanish subjunctive"
Description: [Customized copy]
First Comment: [Why you built it, features, invitation to try]

# Save drafts (don't publish until Day 21)</pre>
    <ul>
        <li>Draft compelling titles and taglines</li>
        <li>Write detailed descriptions</li>
        <li>Prepare first comment as maker</li>
        <li>Save as drafts for later</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: ProductHunt posts drafted and ready</div>`,

    'd17t6': `<h4>📖 SEO Optimization</h4>
    <p>Optimize metadata and SEO for organic discovery.</p>
    <pre>Tell Claude Code:
"Optimize SEO for describe_it and subjunctive_practice:

1. Update meta tags:
   - Title, description, keywords
   - Open Graph tags (for social sharing)
   - Twitter cards

2. Create sitemap.xml for each

3. Create robots.txt

4. Add schema.org markup (SoftwareApplication)

5. Optimize page titles and H1 tags

Deploy SEO improvements."

# Verify with:
# - View page source
# - Test social share preview
# - Google Search Console (submit sitemaps)</pre>
    <ul>
        <li>Add comprehensive meta tags</li>
        <li>Create XML sitemaps</li>
        <li>Add structured data markup</li>
        <li>Submit to Google Search Console</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: SEO optimized for organic discovery</div>`,

    'd17t7': `<h4>📖 Plan Launch Calendar</h4>
    <p>Create detailed launch week schedule.</p>
    <pre># Plan launch week timing

Create launch calendar:
┌─────────────────────────────────────────────────┐
│ Week 4 Launch Schedule (Day 21-27)             │
├─────────────────────────────────────────────────┤
│ Monday (Day 21):    Soft launch (Reddit, Twitter)│
│ Tuesday (Day 22):   ProductHunt (describe_it)   │
│ Thursday (Day 24):  ProductHunt (subjunctive)   │
│ Fri-Sun (Day 25-27): Community engagement       │
└─────────────────────────────────────────────────┘

# Schedule ProductHunt submissions
# Prepare content calendar</pre>
    <ul>
        <li>Plan specific launch dates</li>
        <li>Schedule content posts</li>
        <li>Coordinate across platforms</li>
        <li>Set reminders for each milestone</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Launch week planned and scheduled</div>`,

    'd18t1': `<h4>📖 Fix All Pre-Launch Critical Bugs</h4>
    <p>Eliminate all critical bugs before public launch.</p>
    <pre># Review all known issues from beta + personal use

Priority 1 (Must fix before launch):
□ [List critical bugs]

For each:
Tell Claude Code:
"Critical bug in [project]: [description]
This breaks [workflow]. Fix immediately."

# Test fixes thoroughly
# Deploy to production
# Verify fix works</pre>
    <ul>
        <li>Review all known bugs</li>
        <li>Prioritize critical fixes only</li>
        <li>Test each fix thoroughly</li>
        <li>Deploy all fixes today</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: All critical bugs eliminated</div>`,

    'd19t1': `<h4>📖 Performance Optimization</h4>
    <p>Run performance audits and optimize slow areas.</p>
    <pre>Tell Claude Code:
"Run performance audits on describe_it and subjunctive_practice:

1. Lighthouse scores (target: 90+ on all metrics)
2. Check slow API endpoints (optimize queries)
3. Implement caching where beneficial
4. Optimize images
5. Reduce bundle sizes

Fix performance issues, redeploy."

# Run Lighthouse in Chrome DevTools
# Deploy optimizations</pre>
    <ul>
        <li>Run Lighthouse audits</li>
        <li>Optimize slow queries</li>
        <li>Add caching where needed</li>
        <li>Compress images and assets</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Performance scores >90</div>`,

    'd19t2': `<h4>📖 Security Audit</h4>
    <p>Audit security vulnerabilities and harden both apps.</p>
    <pre>Tell Claude Code:
"Security audit both apps:

Check for:
1. SQL injection vulnerabilities
2. XSS vulnerabilities
3. CSRF protection
4. Rate limiting (prevent abuse)
5. Secrets exposed in client code
6. API authentication properly enforced
7. CORS configured correctly

Fix any issues found."

# Deploy security fixes immediately</pre>
    <ul>
        <li>Check for common vulnerabilities</li>
        <li>Add rate limiting</li>
        <li>Verify authentication works</li>
        <li>Test CORS configuration</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Security hardened</div>`,

    'd20t1': `<h4>📖 Write Blog Posts</h4>
    <p>Create blog content for launch week.</p>
    <pre>Task 1: Blog Posts (2 hours)
Write or generate with Claude:
□ "How I Built describe_it in 2 Weeks with AI"
□ "Learning Spanish Subjunctive: A Better Way"
□ "AI-Assisted Development: 10x Faster"</pre>
    <ul>
        <li>Write founder story posts</li>
        <li>Share technical insights</li>
        <li>Provide value to readers</li>
        <li>Include links to apps</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Blog posts written and ready</div>`,

    'd20t2': `<h4>📖 Create Social Media Content</h4>
    <p>Prepare social media posts for launch week.</p>
    <pre>Task 2: Social Media Content (1 hour)
□ Twitter threads (3-5 tweets each)
□ LinkedIn posts
□ Reddit post text</pre>
    <ul>
        <li>Write Twitter threads</li>
        <li>Create LinkedIn updates</li>
        <li>Prepare Reddit posts</li>
        <li>Schedule posts for launch week</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Social content calendar ready</div>`,

    'd20t3': `<h4>📖 Create Demo GIFs</h4>
    <p>Convert video demos to shareable GIFs.</p>
    <pre>Task 3: Demo GIFs (1 hour)
□ Record 10-second demos of each app
□ Convert to GIF
□ Upload to Imgur/Giphy
□ Use in social posts</pre>
    <ul>
        <li>Record short feature demos</li>
        <li>Convert to GIF format</li>
        <li>Optimize file size</li>
        <li>Upload to sharing platforms</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Content library ready for launch week</div>`,

    // WEEK 4 - Days 21-27
    'd21t1': `<h4>📖 Final Pre-Launch Checks</h4>
    <p>Complete final checklist before going public.</p>
    <pre># Final checklist before going public

For each app:
□ Health check returns 200 OK
□ Can register new account
□ Core features work
□ Payment flow works (test mode one more time)
□ Mobile responsive
□ No console errors
□ Analytics tracking works
□ Admin dashboard accessible

# Fix any last-minute issues</pre>
    <ul>
        <li>Test all critical flows</li>
        <li>Verify payments work</li>
        <li>Check mobile experience</li>
        <li>Review analytics setup</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: All systems go for launch</div>`,

    'd21t2': `<h4>📖 Reddit Soft Launch</h4>
    <p>Post to Reddit communities for initial feedback.</p>
    <pre># Post to relevant subreddits (not ProductHunt yet)

10:00 - Post describe_it to r/Spanish
Title: "I built a free app to learn Spanish through AI image descriptions"
Body: [Use prepared text]
Include: Demo GIF, feature list, free tier details

10:30 - Post subjunctive_practice to r/Spanish
Title: "Free Spanish subjunctive practice app - 200+ exercises"

11:00 - Post both to r/languagelearning

11:30 - Post aves to r/birdwatching (if deploying)
Title: "Learn bird names in Spanish - visual learning app"

# Monitor comments every 30 minutes
# Respond to ALL comments within 1 hour</pre>
    <ul>
        <li>Post to relevant subreddits</li>
        <li>Include demo GIFs</li>
        <li>Engage with all comments</li>
        <li>Note early feedback</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Soft launch on Reddit, early users coming in</div>`,

    'd21t3': `<h4>📖 Community Engagement</h4>
    <p>Actively engage with early users and feedback.</p>
    <pre># Respond to comments, questions, feedback

□ Answer every Reddit comment
□ Thank people for trying it
□ Fix urgent bugs if reported
□ Note feature requests
□ Invite engaged users to Discord/email list (if you have one)

# Monitor analytics dashboards
□ How many signups from Reddit?
□ How many actually used the app?
□ Conversion rate from visitor to user?

# Tweet about the launch
□ Share Reddit posts
□ Show early metrics if good
□ Engage with replies</pre>
    <ul>
        <li>Respond to every comment</li>
        <li>Track signup sources</li>
        <li>Fix urgent issues</li>
        <li>Share progress on social media</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Community engaged, early feedback collected</div>`,

    'd21t4': `<h4>📖 Hotfix Critical Issues</h4>
    <p>Deploy same-day fixes for any critical bugs reported.</p>
    <pre># If critical bugs reported:

For each critical bug:
Tell Claude Code:
"Critical bug reported by Reddit users: [description]
Fix immediately and deploy."

# Fix, test, deploy within 1 hour
# Comment on Reddit: "Just fixed this! Refresh and try again."</pre>
    <ul>
        <li>Prioritize critical bugs</li>
        <li>Fix within 1 hour</li>
        <li>Deploy immediately</li>
        <li>Notify users of fixes</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Critical issues resolved same-day</div>`,

    'd22t1': `<h4>📖 Submit to ProductHunt (6 AM)</h4>
    <p>Launch describe_it on ProductHunt early morning.</p>
    <pre>6:00 - Submit to ProductHunt
□ Log in to ProductHunt
□ Submit describe_it
□ Use prepared title, tagline, description
□ Upload demo video and screenshots
□ Set maker account
□ Add topics/tags
□ Submit!

6:05 - Post first comment (as maker)
□ Your founder story
□ Tech stack details
□ Invitation to try and give feedback

6:30 - Share PH link
□ Twitter: "Just launched on ProductHunt!"
□ Reddit: Comment on yesterday's posts
□ Email beta users: "We're live on PH, appreciate your support!"
□ LinkedIn</pre>
    <ul>
        <li>Submit at 12:01 AM PST (ProductHunt timezone)</li>
        <li>Post first comment immediately</li>
        <li>Share across all channels</li>
        <li>Ask beta users for support</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: ProductHunt post live</div>`,

    'd22t2': `<h4>📖 ProductHunt Engagement Marathon</h4>
    <p>Engage with every comment and upvoter throughout the day.</p>
    <pre># ProductHunt engagement marathon

9:00-13:00: Respond to EVERY comment
□ Check ProductHunt every 30 minutes
□ Answer all questions thoroughly
□ Thank people for upvotes
□ Ask for specific feedback
□ Fix bugs mentioned in comments

# Monitor metrics:
Time | Upvotes | Comments | Signups | Rank
9:00 | ___    | ___     | ___     | #___
10:00| ___    | ___     | ___     | #___
11:00| ___    | ___     | ___     | #___
12:00| ___    | ___     | ___     | #___

Goal: Top 10 by noon, Top 5 by evening</pre>
    <ul>
        <li>Check ProductHunt every 30 min</li>
        <li>Respond to all comments</li>
        <li>Track hourly metrics</li>
        <li>Aim for top 5</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Strong engagement on ProductHunt</div>`,

    'd22t3': `<h4>📖 Monitor Metrics & Deploy Hotfixes</h4>
    <p>Track launch metrics and fix any issues immediately.</p>
    <pre>14:00-18:00: Continued engagement + analytics

□ Keep responding to PH comments
□ Monitor analytics dashboard:
  - Unique visitors: ___
  - Signups: ___
  - Activation rate: ___%
  - Paid conversions: ___

□ Share milestones on Twitter:
  - "100 visitors in first hour!"
  - "Top 5 on ProductHunt!"
  - "10 signups already!"

□ Engage on Twitter with replies

□ Check for server issues (traffic spike)
  - Monitor Vercel analytics
  - Check Supabase connection limits
  - Verify no errors in Sentry

# Deploy hotfixes if needed</pre>
    <ul>
        <li>Monitor all metrics closely</li>
        <li>Share milestones publicly</li>
        <li>Watch for traffic spikes</li>
        <li>Deploy fixes immediately</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: ProductHunt launch Day 1 complete</div>`,

    'd23t1': `<h4>📖 Support & Engagement</h4>
    <p>Continue engaging with users and providing support.</p>
    <pre># Respond to overnight PH comments
# Check Reddit for new comments on soft launch posts
# Respond to user emails/questions
# Monitor analytics
# Fix any bugs reported</pre>
    <ul>
        <li>Check all channels for comments</li>
        <li>Respond to support requests</li>
        <li>Monitor ProductHunt ranking</li>
        <li>Fix reported bugs</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Community supported, issues addressed</div>`,

    'd23t2': `<h4>📖 Prep subjunctive_practice Launch</h4>
    <p>Prepare second ProductHunt launch based on learnings.</p>
    <pre># Tomorrow is PH launch for subjunctive

1. Final testing (1 hour)
2. Update screenshots if needed (30 min)
3. Refine ProductHunt post based on describe_it learnings (30 min)
4. Schedule submission for 6 AM tomorrow (5 min)
5. Prep first comment (30 min)
6. Line up supporters for early upvotes (25 min)</pre>
    <ul>
        <li>Test app thoroughly</li>
        <li>Update marketing materials</li>
        <li>Apply learnings from first launch</li>
        <li>Prepare for 6 AM launch</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Ready for launch #2</div>`,

    'd24t1': `<h4>📖 Submit subjunctive_practice to ProductHunt</h4>
    <p>Launch second app on ProductHunt.</p>
    <pre># Identical process as describe_it launch
# Engage all day
# Respond to all comments
# Monitor metrics
# Deploy hotfixes</pre>
    <ul>
        <li>Submit at 6 AM PST</li>
        <li>Post first comment</li>
        <li>Share across channels</li>
        <li>Engage throughout day</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: subjunctive_practice launched on ProductHunt</div>`,

    'd24t2': `<h4>📖 All-Day Engagement</h4>
    <p>Dedicate full day to ProductHunt engagement.</p>
    <pre># Same engagement pattern as Day 22
# Monitor both products
# Respond to all comments
# Track metrics hourly
# Deploy fixes as needed</pre>
    <ul>
        <li>Check ProductHunt every 30 min</li>
        <li>Engage with commenters</li>
        <li>Share progress updates</li>
        <li>Fix issues immediately</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Full day engagement completed</div>`,

    'd25t1': `<h4>📖 Community Engagement</h4>
    <p>Continue engaging with users across all channels.</p>
    <pre>Morning (9:00-11:00 - 2 hours):
□ Respond to PH comments (both products)
□ Engage on Reddit/Twitter
□ Answer user support emails
□ Monitor metrics dashboards</pre>
    <ul>
        <li>Check ProductHunt for both apps</li>
        <li>Respond to social media</li>
        <li>Answer support emails</li>
        <li>Track key metrics</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Community engaged</div>`,

    'd25t2': `<h4>📖 Metrics Analysis</h4>
    <p>Analyze launch week performance and learnings.</p>
    <pre>Afternoon (15:00-16:00 - 1 hour):
□ Analyze daily metrics
□ Document learnings
□ Plan improvements
□ Celebrate wins!</pre>
    <ul>
        <li>Review signup numbers</li>
        <li>Calculate conversion rates</li>
        <li>Document what worked</li>
        <li>Note areas for improvement</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Metrics tracked and analyzed</div>`,

    'd27t1': `<h4>📖 Week 4 Metrics Review</h4>
    <p>Comprehensive review of launch week results.</p>
    <pre>Days 21-27: Public launch week
Projects Launched: describe_it (Day 22), subjunctive (Day 24)
Total Signups: ___ + ___ = ___ combined
Paid Conversions: ___
MRR: $___
ProductHunt Results: #___ (describe_it), #___ (subjunctive)
Status: ✅ Publicly launched, revenue started</pre>
    <ul>
        <li>Calculate total signups</li>
        <li>Count paid conversions</li>
        <li>Calculate MRR</li>
        <li>Document ProductHunt rankings</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Week 4 complete, metrics documented</div>`,

    'd27t2': `<h4>📖 Plan Week 5 Optimizations</h4>
    <p>Plan data-driven improvements for Week 5.</p>
    <pre># Based on Week 4 data, plan Week 5 optimizations

Focus areas:
- Fix top user complaints
- Optimize conversion funnel
- Improve onboarding
- Add most-requested features

Create task list for Week 5</pre>
    <ul>
        <li>Identify top issues from launch</li>
        <li>Prioritize feature requests</li>
        <li>Plan conversion improvements</li>
        <li>Schedule implementation tasks</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Week 5 plan ready</div>`,

    // WEEKS 5-6 - Days 28-41
    'd28t1': `<h4>📖 Daily Analytics Review (Mon-Fri)</h4>
    <p>Morning routine for checking overnight metrics and prioritizing tasks.</p>
    <pre>9:00-11:00: Analytics Review & Prioritization (2 hours)

1. Check overnight metrics (30 min):
   □ New signups
   □ Activation rate
   □ Paid conversions
   □ Churn (any cancellations?)
   □ Support tickets

2. Prioritize tasks (30 min):
   Based on data:
   - High usage feature → Optimize
   - Low usage feature → Improve or remove
   - High abandonment point → Fix UX
   - Common support question → Add to FAQ/UX

3. Plan day's work (1 hour):
   Create task list for top issues</pre>
    <ul>
        <li>Review metrics daily</li>
        <li>Identify trends</li>
        <li>Prioritize based on data</li>
        <li>Plan high-impact work</li>
    </ul>
    <div class="checkpoint">✅ Daily: Priorities clear, ready to work</div>`,

    'd28t2': `<h4>📖 Daily Implementation (Mon-Fri)</h4>
    <p>Focused implementation time on highest-impact improvements.</p>
    <pre>11:00-13:00: Implementation (2 hours)

Example tasks:
- "Data shows 40% of users drop off at [step]. Analyze UX, fix friction"
- "Users requesting feature: [X]. Mentioned by 10+ people. Implement it"
- "Conversion rate is 3% (target: 5-8%). Improve upgrade flow"

Tell Claude Code specific improvement tasks
Deploy improvements daily
Monitor impact</pre>
    <ul>
        <li>Work on data-driven improvements</li>
        <li>Use Claude Code for implementation</li>
        <li>Deploy daily</li>
        <li>Track impact of changes</li>
    </ul>
    <div class="checkpoint">✅ Daily: High-impact improvements shipped</div>`,

    'd28t3': `<h4>📖 Daily Content Marketing (Mon-Fri)</h4>
    <p>Consistent content creation for growth.</p>
    <pre>14:00-16:00: Content Marketing (2 hours)

Daily content schedule:
Monday: Write blog post
Tuesday: Create Twitter thread
Wednesday: Record tutorial video
Thursday: Post in communities
Friday: Weekly metrics review

Example content:
□ "Week 1 Results: X signups, Y conversions, $Z MRR"
□ "How users are learning Spanish with describe_it"
□ "5 Tips for Mastering Spanish Subjunctive"

Post to:
□ Your blog (if you have one)
□ Medium / Dev.to
□ Reddit (value-add, not spam)
□ Twitter / LinkedIn</pre>
    <ul>
        <li>Create valuable content daily</li>
        <li>Share learnings publicly</li>
        <li>Build in public</li>
        <li>Engage with audience</li>
    </ul>
    <div class="checkpoint">✅ Daily: Growth content published</div>`,

    'd28t4': `<h4>📖 Evening Support (Mon-Fri)</h4>
    <p>Optional evening support and community engagement.</p>
    <pre>Evening (Optional 18:00-19:00 - 1 hour)

□ Respond to user emails
□ Engage with Twitter mentions
□ Answer Reddit questions
□ Update documentation if needed</pre>
    <ul>
        <li>Respond to user questions</li>
        <li>Engage on social media</li>
        <li>Provide support</li>
        <li>Update docs as needed</li>
    </ul>
    <div class="checkpoint">✅ Daily: Community supported</div>`,

    'd34t1': `<h4>📖 Week 5 Metrics Snapshot</h4>
    <p>Review Week 5 performance and growth.</p>
    <pre># Week 5 Summary

Metrics Review:
- Total signups this week: ___
- Active users: ___
- MRR growth: $___
- Top performing features: ___
- Main user complaints: ___

Document learnings for Week 6</pre>
    <ul>
        <li>Calculate week-over-week growth</li>
        <li>Identify successful changes</li>
        <li>Note areas needing work</li>
        <li>Celebrate wins</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Week 5 metrics documented</div>`,

    'd34t2': `<h4>📖 Plan Week 6 A/B Tests</h4>
    <p>Plan experiments and optimizations for Week 6.</p>
    <pre># Plan Week 6 A/B tests and experiments

Tests to run:
□ Test pricing ($4.99 vs $7.99)
□ Test CTA button text
□ Test onboarding flows
□ Test feature positioning

Create experiment plan</pre>
    <ul>
        <li>Identify elements to test</li>
        <li>Plan A/B test variants</li>
        <li>Set success metrics</li>
        <li>Schedule implementation</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Week 6 experiments planned</div>`,

    'd35t1': `<h4>📖 Daily A/B Testing</h4>
    <p>Run and analyze A/B tests to improve conversion.</p>
    <pre>9:00-11:00: A/B Testing & Optimization
□ Test pricing ($4.99 vs $7.99)
□ Test CTA button text
□ Test onboarding flows
□ Test feature positioning</pre>
    <ul>
        <li>Implement test variants</li>
        <li>Split traffic evenly</li>
        <li>Track conversion rates</li>
        <li>Analyze results</li>
    </ul>
    <div class="checkpoint">✅ Daily: A/B tests running</div>`,

    'd35t2': `<h4>📖 Daily Feature Development</h4>
    <p>Ship user-requested features daily.</p>
    <pre>11:00-13:00: Feature Development
□ Ship 1 feature/day based on requests
□ Use Claude Code for speed
□ Deploy and test same day</pre>
    <ul>
        <li>Pick top-requested feature</li>
        <li>Implement with Claude Code</li>
        <li>Test thoroughly</li>
        <li>Deploy to production</li>
    </ul>
    <div class="checkpoint">✅ Daily: New feature shipped</div>`,

    'd35t3': `<h4>📖 Growth Experiments</h4>
    <p>Try new marketing channels and tactics.</p>
    <pre>14:00-16:00: Growth Experiments
□ Try new marketing channel
□ Guest post on blog
□ YouTube tutorial
□ Podcast interview (pitch)</pre>
    <ul>
        <li>Test new acquisition channels</li>
        <li>Create educational content</li>
        <li>Reach new audiences</li>
        <li>Track channel effectiveness</li>
    </ul>
    <div class="checkpoint">✅ Daily: Growth experiments running</div>`,

    'd35t4': `<h4>📖 Metrics & Planning</h4>
    <p>Daily metrics review and next-day planning.</p>
    <pre>17:00-18:00: Metrics & Planning
□ Review daily metrics
□ Plan tomorrow
□ Celebrate wins</pre>
    <ul>
        <li>Check key metrics</li>
        <li>Document learnings</li>
        <li>Plan next day's work</li>
        <li>Maintain momentum</li>
    </ul>
    <div class="checkpoint">✅ Daily: Metrics tracked, tomorrow planned</div>`,

    'd41t1': `<h4>📖 Week 6 Metrics Snapshot</h4>
    <p>Comprehensive Week 6 performance review.</p>
    <pre># Week 6 Summary

Target metrics:
- Hit $500 MRR combined: ___
- Improve conversion rate 5% → 7%: ___
- Reduce churn 30% → 20%: ___
- Add most-requested features: ___

Document what worked and what didn't</pre>
    <ul>
        <li>Calculate MRR growth</li>
        <li>Measure conversion improvements</li>
        <li>Track churn rate</li>
        <li>Review feature additions</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Week 6 complete, growth measured</div>`,

    'd41t2': `<h4>📖 Plan Week 7 Analytics</h4>
    <p>Plan deep analytics work for Week 7.</p>
    <pre># Plan Week 7 deep analytics

Week 7 focus areas:
Monday: Cohort Analysis
Tuesday: Feature Usage Analysis
Wednesday: Conversion Funnel
Thursday: Churn Analysis
Friday: Revenue Deep Dive

Prepare analytics queries and reports</pre>
    <ul>
        <li>Plan cohort analysis</li>
        <li>Prepare feature usage queries</li>
        <li>Set up funnel tracking</li>
        <li>Design churn analysis</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Week 7 analytics work planned</div>`,

    // WEEKS 7-8 - Days 42-55
    'd42t1': `<h4>📖 Monday: Cohort Analysis</h4>
    <p>Analyze user cohorts and retention patterns.</p>
    <pre>Monday: Cohort Analysis
- Analyze user cohorts (Week 1 signups vs Week 4)
- Retention by cohort
- Revenue by cohort
- Which acquisition channel has best LTV?</pre>
    <ul>
        <li>Group users by signup week</li>
        <li>Calculate retention curves</li>
        <li>Compare cohort performance</li>
        <li>Identify best acquisition sources</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Cohort analysis complete</div>`,

    'd42t2': `<h4>📖 Tuesday: Feature Usage Analysis</h4>
    <p>Analyze which features drive retention and which are unused.</p>
    <pre>Tuesday: Feature Usage Analysis
- Which features drive retention?
- Which features are ignored?
- Kill unused features, double down on used</pre>
    <ul>
        <li>Track feature usage rates</li>
        <li>Correlate features with retention</li>
        <li>Identify features to remove</li>
        <li>Plan to enhance popular features</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Feature usage insights documented</div>`,

    'd42t3': `<h4>📖 Wednesday: Conversion Funnel</h4>
    <p>Optimize the conversion funnel from visitor to paying customer.</p>
    <pre>Wednesday: Conversion Funnel Optimization
- Where do users drop off?
- Fix the leakiest points
- A/B test improvements</pre>
    <ul>
        <li>Map complete funnel</li>
        <li>Calculate drop-off rates</li>
        <li>Fix biggest leaks first</li>
        <li>Test improvements</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Funnel optimizations implemented</div>`,

    'd42t4': `<h4>📖 Thursday: Churn Analysis</h4>
    <p>Understand why users cancel and how to prevent it.</p>
    <pre>Thursday: Churn Analysis
- Interview 5 churned users
- Why did they leave?
- Can you win them back?
- Fix root causes</pre>
    <ul>
        <li>Identify churned users</li>
        <li>Send exit surveys</li>
        <li>Interview 5 churned users</li>
        <li>Implement fixes for top reasons</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Churn causes identified and addressed</div>`,

    'd42t5': `<h4>📖 Friday: Revenue Deep Dive</h4>
    <p>Analyze revenue patterns and pricing optimization.</p>
    <pre>Friday: Revenue Deep Dive
- Which pricing tier converts best?
- Should you raise prices?
- Should you add annual plan?
- What's your LTV:CAC ratio?</pre>
    <ul>
        <li>Analyze pricing tier performance</li>
        <li>Calculate LTV and CAC</li>
        <li>Test price increase hypothesis</li>
        <li>Consider annual pricing</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Revenue optimization plan created</div>`,

    'd48t1': `<h4>📖 Week 7 Analytics Summary</h4>
    <p>Synthesize all Week 7 analytics insights.</p>
    <pre># Week 7 Complete: Deep understanding of metrics

Key insights:
- Best performing cohorts: ___
- Features driving retention: ___
- Biggest funnel leaks: ___
- Top churn reasons: ___
- Optimal pricing: ___

Document all learnings</pre>
    <ul>
        <li>Compile all analytics work</li>
        <li>Identify key insights</li>
        <li>Create action items</li>
        <li>Share learnings</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Deep understanding of all metrics</div>`,

    'd48t2': `<h4>📖 Strategic Decisions Preview</h4>
    <p>Prepare for major strategic decisions in Week 8.</p>
    <pre># Preview Week 8 strategic decisions

Prepare to answer:
- Which projects to keep?
- Which to kill?
- Where to focus?
- What's the path to $5k MRR?</pre>
    <ul>
        <li>Review all project performance</li>
        <li>Prepare scoring framework</li>
        <li>Gather all data needed</li>
        <li>Schedule decision time</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Ready for strategic planning</div>`,

    'd49t1': `<h4>📖 Monday-Tuesday: Project Scoring</h4>
    <p>Objectively score all projects to make keep/kill decisions.</p>
    <pre># Score each project honestly

For each project, calculate:
1. Personal Value Score (0-10)
   - Do YOU use it daily?
   - Does it save YOU time?
   - Would you miss it if gone?

2. User Traction Score (0-10)
   - Weekly active users
   - 7-day retention rate
   - NPS score

3. Revenue Score (0-10)
   - MRR generated
   - Conversion rate
   - Growth rate

4. Effort Score (0-10 inverse)
   - Hours/week to maintain
   - Bug frequency
   - Support burden

Total Score: Sum of all 4 (max 40)

Decisions:
- Score 30+: KEEP and grow
- Score 20-29: MAINTAIN
- Score <20: DEFER or kill</pre>
    <ul>
        <li>Score all projects objectively</li>
        <li>Use consistent framework</li>
        <li>Be honest about performance</li>
        <li>Make data-driven decisions</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: All projects scored objectively</div>`,

    'd49t2': `<h4>📖 Wednesday-Friday: Strategic Planning</h4>
    <p>Create strategic plan based on project scores.</p>
    <pre>Based on scores, make decisions:

HIGH Performers (30+ score):
Decision: Double down
Actions:
□ Increase marketing spend (if profitable)
□ Add premium features
□ Improve retention
□ Goal: 2x MRR by Month 3

MEDIUM Performers (20-29):
Decision: Maintain
Actions:
□ Keep running
□ Minimal improvements
□ Monitor for growth
□ Revisit in Month 3

LOW Performers (<20):
Decision: Archive or Pivot
Actions:
□ Extract learnings
□ Archive codebase
□ Shut down infrastructure (save costs)
□ Move on without guilt

# Create Month 3 plan
# Focus on winners
# Document what you learned</pre>
    <ul>
        <li>Make keep/kill decisions</li>
        <li>Plan focus areas</li>
        <li>Archive low performers</li>
        <li>Double down on winners</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Clear strategy for each project</div>`,

    'd49t3': `<h4>📖 Weekend: Month 3 Roadmap</h4>
    <p>Create detailed Month 3 roadmap for winning projects.</p>
    <pre># Create Month 3 plan

Focus on top 2 projects:
- Feature roadmap
- Marketing plan
- Revenue goals
- Time allocation

Goal: Path to $1k+ MRR by Day 90</pre>
    <ul>
        <li>Plan Month 3 features</li>
        <li>Set revenue targets</li>
        <li>Allocate time wisely</li>
        <li>Create clear milestones</li>
    </ul>
    <div class="checkpoint">✅ Checkpoint: Month 3 roadmap complete</div>`,

    // MONTH 3 - Days 56-90
    'd56t1': `<h4>📖 Daily Development (Mon-Fri)</h4>
    <p>Consistent feature development for top projects.</p>
    <pre>9:00-11:00: Development (2 hours)

# Feature development for top 2 projects

Tell Claude Code:
"Implement [feature] for [top project].
Users requested this X times.
Show mockup first, then implement."

# Ship 1-2 features per week
# Deploy daily</pre>
    <ul>
        <li>Focus on top 2 projects only</li>
        <li>Implement user-requested features</li>
        <li>Deploy frequently</li>
        <li>Maintain momentum</li>
    </ul>
    <div class="checkpoint">✅ Daily: New features shipped to top projects</div>`,

    'd56t2': `<h4>📖 Daily Support (Mon-Fri)</h4>
    <p>User support and community engagement.</p>
    <pre>11:00-12:00: Support & Community (1 hour)

□ Answer support emails (10-15 min)
□ Respond to social media (10-15 min)
□ Engage in communities (20-30 min)
□ Update FAQ if needed (10 min)</pre>
    <ul>
        <li>Provide excellent support</li>
        <li>Engage with users daily</li>
        <li>Build community</li>
        <li>Update docs as needed</li>
    </ul>
    <div class="checkpoint">✅ Daily: Users supported, community engaged</div>`,

    'd56t3': `<h4>📖 Daily Marketing (Mon-Fri)</h4>
    <p>Consistent marketing and growth activities.</p>
    <pre>12:00-13:00: Marketing & Growth (1 hour)

Monday: Write blog post
Tuesday: Create social content
Wednesday: Guest post pitching
Thursday: Community engagement
Friday: Weekly metrics analysis</pre>
    <ul>
        <li>Create valuable content</li>
        <li>Build in public</li>
        <li>Engage communities</li>
        <li>Track growth metrics</li>
    </ul>
    <div class="checkpoint">✅ Daily: Growth activities completed</div>`,

    'd56t4': `<h4>📖 Weekly Deep Work (Saturdays)</h4>
    <p>Optional Saturday deep work on major features.</p>
    <pre>Weekly Deep Work (Saturdays, 4 hours optional):

Saturday projects:
Week 9: Improve onboarding (reduce drop-off)
Week 10: Add annual pricing tier
Week 11: Build referral system
Week 12: Launch affiliate program</pre>
    <ul>
        <li>Work on major features</li>
        <li>Implement retention improvements</li>
        <li>Build growth mechanisms</li>
        <li>Scale successful projects</li>
    </ul>
    <div class="checkpoint">✅ Weekly: Major improvements shipped</div>`
};

// To use: Merge this object with the existing taskGuides object in the HTML file
