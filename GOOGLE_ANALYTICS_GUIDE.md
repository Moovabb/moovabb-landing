# Google Analytics Setup & Marketing Campaign Guide

## 🎯 Setup Instructions

### 1. Get Your Google Analytics Tracking ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Navigate to **Admin** (bottom left)
4. Under **Property**, click **Data Streams**
5. Select your web data stream
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Replace Placeholder ID in Your Code

Replace `G-XXXXXXXXXX` with your actual Measurement ID in these files:
- `index.html` (lines 108 and 113)
- `contact/index.html` (lines 43 and 48)
- `contact-form.js` (line 36)

You can do this with a find-and-replace:
```bash
find . -type f \( -name "*.html" -o -name "*.js" \) -exec sed -i '' 's/G-XXXXXXXXXX/YOUR-ACTUAL-ID/g' {} +
```

### 3. Deploy Your Updated Site

Push your changes to production and verify GA is working by checking the "Realtime" report in Google Analytics.

---

## 📊 What's Being Tracked

### Automatic Tracking (Default GA4 Events)
- **page_view**: Every page visit
- **first_visit**: First-time visitors
- **session_start**: New sessions
- **user_engagement**: Active engagement on your site
- **scroll**: When users scroll (90% depth)

### Custom Events I've Added

#### 1. **hero_cta_click**
- Triggered when: User clicks "En savoir +" button on homepage
- Category: `engagement`
- Label: `Hero CTA Button`

#### 2. **offer_click**
- Triggered when: User clicks any offer "En savoir +" button
- Category: `offers`
- Label: The specific offer name (e.g., "Avis à l'unité", "3 Avis", "6 Avis")

#### 3. **instagram_follow_click**
- Triggered when: User clicks Instagram follow button
- Category: `social`
- Label: `Instagram Follow Button`

#### 4. **campaign_visit**
- Triggered when: User arrives via a marketing campaign (UTM parameters)
- Category: `marketing`
- Data captured: `utm_source`, `utm_medium`, `utm_campaign`

#### 5. **form_submission**
- Triggered when: User successfully submits the contact form
- Category: `lead_generation`
- Label: `Contact Form`
- Additional data: `newsletter_opted_in` (true/false)

#### 6. **conversion**
- Triggered when: Form submission completes (for conversion tracking)
- Category: `lead`
- Label: `Contact Form Completed`

---

## 🎯 How to Use This for Marketing Campaigns

### Creating Campaign URLs

Use UTM parameters to track where your traffic comes from. Format:
```
https://www.moovabb.com/?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN
```

### Campaign Examples

#### Instagram Ad Campaign
```
https://www.moovabb.com/?utm_source=instagram&utm_medium=paid_social&utm_campaign=launch_january_2025
```

#### Instagram Story (Organic)
```
https://www.moovabb.com/?utm_source=instagram&utm_medium=social&utm_campaign=story_swipe_up
```

#### Email Newsletter
```
https://www.moovabb.com/?utm_source=newsletter&utm_medium=email&utm_campaign=launch_announcement
```

#### Facebook Ad
```
https://www.moovabb.com/?utm_source=facebook&utm_medium=paid_social&utm_campaign=winter_2025
```

#### Google Ads
```
https://www.moovabb.com/?utm_source=google&utm_medium=cpc&utm_campaign=location_recherche
```

#### Influencer Partnership
```
https://www.moovabb.com/?utm_source=influencer_name&utm_medium=social&utm_campaign=partnership_Q1
```

### UTM Parameter Guide

- **utm_source**: Where the traffic comes from (e.g., `instagram`, `facebook`, `google`, `newsletter`)
- **utm_medium**: Marketing channel type (e.g., `social`, `paid_social`, `email`, `cpc`)
- **utm_campaign**: Specific campaign name (e.g., `launch_january_2025`, `spring_promo`)
- **utm_content** (optional): Differentiate similar content (e.g., `blue_button`, `red_button`)
- **utm_term** (optional): Paid search keywords (e.g., `location+appartement`)

### Free URL Builder Tool
Use [Google's Campaign URL Builder](https://ga-dev-tools.google/campaign-url-builder/) to create your campaign URLs.

---

## 📈 Viewing Your Data in Google Analytics

### 1. Real-Time Reports
**Admin → Realtime**
- See current active users
- View which pages they're on
- See which campaigns are driving traffic RIGHT NOW

### 2. Campaign Performance
**Reports → Acquisition → Traffic acquisition**
- View all traffic sources
- Compare campaign performance
- See which campaigns drive the most conversions

### 3. Custom Events
**Reports → Engagement → Events**
- See all custom events (hero_cta_click, offer_click, etc.)
- View event counts and user engagement
- Track conversion rates

### 4. Campaign Visits
**Reports → Engagement → Events → campaign_visit**
- Click on the event name
- See breakdown by `utm_source`, `utm_medium`, `utm_campaign`
- Compare which campaigns perform best

### 5. Form Submissions (Lead Tracking)
**Reports → Engagement → Events → form_submission**
- See total form submissions
- View newsletter opt-in rate
- Track by traffic source

### 6. Creating Custom Reports
**Explore → Create a blank exploration**

Example: Campaign Effectiveness Report
1. Add dimensions: `Session source`, `Session medium`, `Session campaign`
2. Add metrics: `Sessions`, `Users`, `form_submission` (event count), `Conversion rate`
3. Filter by date range
4. Export to Google Sheets

---

## 🎨 Setting Up Conversions in GA4

To track form submissions as official conversions:

1. Go to **Admin → Events**
2. Find `form_submission` event
3. Toggle **Mark as conversion** to ON
4. Do the same for `conversion` event

Now you can see conversion rates in all your reports!

---

## 💡 Marketing Campaign Strategy Tips

### What to Monitor

1. **Traffic Sources**: Which platform sends the most visitors?
   - Instagram vs Facebook vs Google Ads

2. **Engagement**: Which campaigns drive the most engagement?
   - Look at hero_cta_click and offer_click rates by campaign

3. **Conversion Rate**: Which campaigns convert best?
   - Form submissions per 100 visitors by campaign

4. **Offer Interest**: Which pricing tier is most popular?
   - Track offer_click events by label

5. **Newsletter Interest**: How many leads opt into newsletter?
   - Track newsletter_opted_in parameter in form_submission

### Optimization Based on Data

- **Low traffic, high conversion**: Increase budget on this campaign
- **High traffic, low conversion**: Improve targeting or landing page
- **Popular offer**: Consider promoting this pricing tier more
- **High Instagram engagement**: Focus more resources there
- **Low newsletter opt-in**: Consider better incentives

### A/B Testing Ideas

Create multiple campaign URLs with different content:
```
utm_content=blue_button
utm_content=red_button
utm_content=discount_10
utm_content=free_trial
```

Compare which performs better!

---

## 🔍 Troubleshooting

### Events Not Showing Up?
1. Check browser console for errors
2. Verify GA Measurement ID is correct
3. Use **DebugView** in GA4 (Admin → DebugView)
4. Make sure ad blockers are disabled when testing

### Campaign Parameters Not Tracking?
1. Ensure UTM parameters are in the URL
2. Check they're spelled correctly (lowercase recommended)
3. View **Realtime → Event count by Event name** to see campaign_visit events

### Test Your Setup
1. Visit your site with campaign parameters
2. Click buttons and submit forms
3. Check GA4 Realtime report (within 30 seconds)
4. Look for your events under "Event count by Event name"

---

## 📱 Pro Tips

1. **Shorten Your URLs**: Use [bit.ly](https://bitly.com) or similar to make campaign URLs cleaner for Instagram bio/stories

2. **Create a Campaign Tracking Sheet**: Keep a Google Sheet with:
   - Campaign name
   - URL
   - Platform
   - Start date
   - Budget
   - Goals
   - Performance metrics

3. **Set Up Weekly Reports**: GA4 can email you automated reports every week

4. **Mobile vs Desktop**: Check device breakdown in GA4 to optimize for your audience

5. **Best Posting Times**: Cross-reference GA4 traffic peaks with your posting schedule

---

## 🚀 Next Steps

1. Replace the placeholder Measurement ID
2. Deploy your site
3. Create your first campaign URL
4. Test it yourself
5. Launch your marketing campaigns
6. Monitor GA4 daily for the first week
7. Adjust strategy based on data

Bonne chance avec Moovabb! 🎉
