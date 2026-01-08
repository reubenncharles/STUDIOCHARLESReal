# Custom Domain Setup: studiocharles.co

## ✅ WHAT I JUST DID

1. ✅ Created CNAME file with "studiocharles.co"
2. ✅ Updated vite.config.ts base path from `/STUDIOCHARLES/` to `/`
3. ✅ Updated App.tsx Router to remove basename
4. ✅ Rebuilt the site
5. ✅ Deployed to GitHub Pages with CNAME file

---

## 🔧 WHAT YOU NEED TO DO NOW

### Step 1: Configure GitHub Pages Settings

1. Go to: https://github.com/reubenncharles/STUDIOCHARLESReal/settings/pages
2. Under "Custom domain", you should see: **studiocharles.co**
3. Check the box: **"Enforce HTTPS"** (wait a few minutes for certificate)
4. Leave "Source" as: **Deploy from a branch** → **gh-pages** / **root**

---

### Step 2: Configure DNS at GoDaddy

Your domain is registered with GoDaddy (nameservers: NS69/NS70.DOMAINCONTROL.COM).

Log in to GoDaddy and add these DNS records:

#### A Records (Point to GitHub Pages)
Add **FOUR** A records pointing to GitHub's IP addresses:

| Type | Name | Value              | TTL  |
|------|------|--------------------|------|
| A    | @    | 185.199.108.153    | 1 Hour |
| A    | @    | 185.199.109.153    | 1 Hour |
| A    | @    | 185.199.110.153    | 1 Hour |
| A    | @    | 185.199.111.153    | 1 Hour |

#### CNAME Record (For www subdomain)
| Type  | Name | Value                              | TTL  |
|-------|------|------------------------------------|------|
| CNAME | www  | reubenncharles.github.io           | 1 Hour |

---

### Step 3: Detailed GoDaddy Instructions

1. **Log in to GoDaddy**: https://dcc.godaddy.com/
2. **Go to DNS Management**:
   - Click on your domain: studiocharles.co
   - Click "DNS" or "Manage DNS"
3. **Delete Old Records** (if any):
   - Remove old A records pointing to @
   - Remove old CNAME for www (if exists)
4. **Add New A Records**:
   - Click "Add" or "Add Record"
   - Type: A
   - Name: @ (represents your root domain)
   - Value: 185.199.108.153
   - TTL: 1 Hour
   - Click "Save"
   - **Repeat 3 more times** with the other IPs: .109.153, .110.153, .111.153
5. **Add CNAME Record**:
   - Click "Add" or "Add Record"
   - Type: CNAME
   - Name: www
   - Value: reubenncharles.github.io
   - TTL: 1 Hour
   - Click "Save"

---

### Step 4: Wait for DNS Propagation

DNS changes can take anywhere from **5 minutes to 48 hours** to fully propagate.

#### Check DNS Status:
```bash
# Check A records
dig studiocharles.co +short

# Check CNAME for www
dig www.studiocharles.co +short

# Online checker
# Visit: https://dnschecker.org/#A/studiocharles.co
```

Expected results:
- `studiocharles.co` → Should show 4 GitHub IPs
- `www.studiocharles.co` → Should show reubenncharles.github.io

---

### Step 5: Enable HTTPS on GitHub Pages

After DNS propagates (usually 10-30 minutes):

1. Go back to: https://github.com/reubenncharles/STUDIOCHARLESReal/settings/pages
2. Check the box: **"Enforce HTTPS"**
3. GitHub will automatically provision an SSL certificate (takes 5-10 minutes)
4. Once enabled, your site will be accessible at: **https://studiocharles.co**

---

## 🧪 TESTING TIMELINE

### Immediate (now)
- ✅ GitHub Pages deployment: https://reubenncharles.github.io/STUDIOCHARLES/ (old URL - still works)
- ⏳ studiocharles.co → 404 (waiting for DNS)

### After 10-30 minutes (DNS propagation)
- ✅ http://studiocharles.co → Should work
- ✅ http://www.studiocharles.co → Should redirect to http://studiocharles.co
- ⏳ HTTPS not yet enabled (waiting for certificate)

### After 30-60 minutes (SSL certificate issued)
- ✅ https://studiocharles.co → Fully working with SSL
- ✅ https://www.studiocharles.co → Redirects to https://studiocharles.co
- ✅ All HTTP traffic auto-redirects to HTTPS

---

## 🚨 TROUBLESHOOTING

### DNS Not Propagating?
1. Clear your browser cache
2. Try incognito/private browsing
3. Try a different browser
4. Check DNS: https://dnschecker.org/#A/studiocharles.co
5. Wait longer (can take up to 48 hours, but usually 30 min)

### SSL Certificate Not Issuing?
1. Make sure DNS is fully propagated first
2. Uncheck "Enforce HTTPS" and wait 5 minutes
3. Check it again
4. GitHub will retry certificate issuance

### Still Getting 404?
1. Verify CNAME file exists in gh-pages branch:
   - https://github.com/reubenncharles/STUDIOCHARLESReal/tree/gh-pages
   - Should see CNAME file with "studiocharles.co"
2. Verify GitHub Pages settings show custom domain
3. Check that A records point to correct GitHub IPs

### Wrong Content Loading?
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Wait for CDN cache to clear (up to 10 minutes)

---

## 📋 QUICK REFERENCE

### Current Status
- Domain: studiocharles.co (GoDaddy)
- GitHub Repo: reubenncharles/STUDIOCHARLESReal
- GitHub Pages Branch: gh-pages
- CNAME File: ✅ Deployed
- Base Path: / (root, not /STUDIOCHARLES/)

### DNS Records Needed
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
CNAME www reubenncharles.github.io
```

### Links
- GoDaddy DNS: https://dcc.godaddy.com/
- GitHub Pages Settings: https://github.com/reubenncharles/STUDIOCHARLESReal/settings/pages
- DNS Checker: https://dnschecker.org/#A/studiocharles.co
- SSL Checker: https://www.sslshopper.com/ssl-checker.html#hostname=studiocharles.co

---

## 🎯 NEXT STEPS AFTER DNS WORKS

Once studiocharles.co is loading:

1. ✅ Test all pages (/, /portfolio, /about, /contact)
2. ✅ Test contact form submission
3. ✅ Test mobile menu
4. ✅ Verify SSL certificate (green padlock)
5. ✅ Update any hardcoded URLs in marketing materials
6. ✅ Submit to Google Search Console with new domain
7. ✅ Update social media links

---

## 📝 WHAT CHANGED IN THE CODE

### vite.config.ts
```typescript
// Before:
base: '/STUDIOCHARLES/'

// After:
base: '/'
```

### App.tsx
```typescript
// Before:
<Router basename="/STUDIOCHARLES">

// After:
<Router>
```

### New File: CNAME
```
studiocharles.co
```

---

## ✅ SUMMARY

**Your site is now configured for studiocharles.co!**

1. ✅ Code updated and deployed
2. ⏳ Waiting for you to configure DNS at GoDaddy
3. ⏳ After DNS: GitHub will auto-provision SSL
4. ✅ Once DNS propagates: https://studiocharles.co will work perfectly

**Estimated Time to Live:**
- DNS setup: 5 minutes
- DNS propagation: 10-30 minutes (occasionally up to 48 hours)
- SSL certificate: Automatic once DNS works (5-10 minutes)
- **Total: 30-60 minutes from now**

---

## 🆘 NEED HELP?

If studiocharles.co isn't working after 2 hours:
1. Check DNS configuration at GoDaddy (verify IPs are correct)
2. Check GitHub Pages settings (custom domain should show)
3. Check CNAME file exists in gh-pages branch
4. Contact GitHub Support or check their docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Good luck! Your professional custom domain is almost ready! 🚀
