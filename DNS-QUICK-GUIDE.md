# 🚀 QUICK DNS SETUP for studiocharles.co

## 1. Log in to GoDaddy
https://dcc.godaddy.com/

## 2. Go to DNS Management
- Click: studiocharles.co
- Click: DNS or Manage DNS

## 3. Add These Records

### Delete old A records (if any exist for @)

### Add FOUR A Records:

**Record 1:**
- Type: A
- Name: @ 
- Value: 185.199.108.153
- TTL: 1 Hour
→ Click Save

**Record 2:**
- Type: A
- Name: @
- Value: 185.199.109.153
- TTL: 1 Hour
→ Click Save

**Record 3:**
- Type: A
- Name: @
- Value: 185.199.110.153
- TTL: 1 Hour
→ Click Save

**Record 4:**
- Type: A
- Name: @
- Value: 185.199.111.153
- TTL: 1 Hour
→ Click Save

### Add ONE CNAME Record:

**www subdomain:**
- Type: CNAME
- Name: www
- Value: reubenncharles.github.io
- TTL: 1 Hour
→ Click Save

## 4. Wait 10-30 minutes

## 5. Check if it's working
Visit: http://studiocharles.co

## 6. Enable HTTPS on GitHub
Once the site loads:
1. Go to: https://github.com/reubenncharles/STUDIOCHARLESReal/settings/pages
2. Check: "Enforce HTTPS"
3. Wait 5-10 minutes for SSL certificate

## Done! ✅
Your site will be live at: https://studiocharles.co

---

**Need detailed help?** Check CUSTOM-DOMAIN-SETUP.md
