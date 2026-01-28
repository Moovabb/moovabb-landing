# Deployment Guide - GitHub Pages with Clean URLs

## ✅ What Was Changed

Your site now has **clean, professional URLs**:
- **Home page**: `https://yourdomain.com/` (instead of `/index.html`)
- **Contact page**: `https://yourdomain.com/contact` (instead of `/contact.html`)

## 📁 Directory Structure

```
moovabb_landing/
├── _config.yml          # Jekyll config for clean URLs
├── index.html           # Home page (serves /)
├── contact/
│   └── index.html       # Contact page (serves /contact)
├── assets/              # Images and logos
├── dist/                # Compiled CSS
└── ...
```

## 🚀 How It Works on GitHub Pages

GitHub Pages has **Jekyll built-in** (no extra setup needed!). With the `_config.yml` file:
- Jekyll automatically handles clean URLs
- `/contact/index.html` → accessible at `/contact`
- `/index.html` → accessible at `/`

## 📝 Deployment Steps

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "feat: add clean URLs with Jekyll config"
   git push origin main
   ```

2. **Ensure GitHub Pages is enabled:**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

3. **Wait 1-2 minutes** for GitHub to build and deploy

4. **Test your URLs:**
   - `https://yourusername.github.io/moovabb_landing/` → Home
   - `https://yourusername.github.io/moovabb_landing/contact` → Contact

## 🌐 Custom Domain (Optional)

If you have a custom domain (like `moovabb.com`):

1. **Add to GitHub Pages:**
   - Settings → Pages → Custom domain
   - Enter: `www.moovabb.com`
   - Save

2. **Update DNS records with your domain provider:**
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. **Wait for DNS propagation** (5-30 minutes)

4. **Enable HTTPS** in GitHub Pages settings

## 🔍 SEO Updates

All internal links now use clean URLs:
- ✅ Sitemap updated with `/contact` (not `/contact.html`)
- ✅ Canonical URLs updated in meta tags
- ✅ Open Graph URLs updated

## 🧪 Local Testing

To test locally with Jekyll:

1. **Install Jekyll** (one-time):
   ```bash
   gem install bundler jekyll
   ```

2. **Create Gemfile:**
   ```bash
   echo 'source "https://rubygems.org"
   gem "github-pages", group: :jekyll_plugins' > Gemfile
   ```

3. **Install and run:**
   ```bash
   bundle install
   bundle exec jekyll serve
   ```

4. **Visit:** `http://localhost:4000/`

**Note:** You can also just open `index.html` directly in a browser for simple testing - the clean URLs will work once deployed to GitHub Pages.

## 🎯 Alternative: Switch to Vercel (If Needed)

If you want more control or need server-side features later:

1. **Push to GitHub** (same as above)
2. **Import on Vercel:**
   - Go to vercel.com
   - "New Project" → Import your GitHub repo
   - Auto-detects static site
   - Deploy
3. **Clean URLs work automatically** on Vercel

## 🚨 Troubleshooting

**Issue:** 404 errors on `/contact`
- **Fix:** Make sure `_config.yml` is committed and pushed
- **Fix:** Wait 1-2 minutes after pushing for GitHub to rebuild

**Issue:** Styles not loading on `/contact`
- **Fix:** Already fixed! Paths use `../` for assets

**Issue:** Clean URLs not working locally
- **Normal!** They only work when deployed to GitHub Pages (or with Jekyll server)

## 📊 What's Different from Before

### Before:
- URLs: `/index.html`, `/contact.html` ❌
- Looked unprofessional
- Bad for SEO

### After:
- URLs: `/`, `/contact` ✅
- Professional appearance
- Better SEO
- No server needed (Jekyll on GitHub Pages handles it)

## ✨ Next Steps

1. Push to GitHub
2. Verify it works
3. (Optional) Add custom domain
4. Share your professional site! 🎉
