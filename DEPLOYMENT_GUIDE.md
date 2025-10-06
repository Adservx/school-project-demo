# Deployment Guide - Ranabir Janahit Secondary School Website

## Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager
- Git (optional, for version control)

### Local Development

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm start
```
The website will open at `http://localhost:3000`

3. **Build for Production**
```bash
npm run build
```
This creates an optimized production build in the `build/` folder.

---

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Free SSL certificate
- Automatic deployments from Git
- Global CDN
- Zero configuration
- Perfect for React apps

**Steps:**

1. **Sign up at [vercel.com](https://vercel.com)**

2. **Connect GitHub Repository** (if using Git)
   - Import project from GitHub
   - Vercel auto-detects React configuration

3. **Or Deploy Directly**
```bash
npm install -g vercel
vercel login
vercel
```

4. **Custom Domain Setup**
   - Go to Project Settings → Domains
   - Add `www.ranabirjanahit.edu.np`
   - Update DNS records as instructed

**Environment Variables:** None required for this static site

---

### Option 2: Netlify

**Steps:**

1. **Sign up at [netlify.com](https://netlify.com)**

2. **Drag & Drop Deployment**
   - Run `npm run build`
   - Drag `build/` folder to Netlify dashboard

3. **Or Git-based Deployment**
   - Connect repository
   - Build command: `npm run build`
   - Publish directory: `build`

4. **Custom Domain**
   - Site settings → Domain management
   - Add custom domain
   - Update DNS records

---

### Option 3: Traditional Web Hosting (cPanel)

**Steps:**

1. **Build the Project**
```bash
npm run build
```

2. **Upload Files**
   - Upload everything from `build/` folder to `public_html/`
   - Ensure `.htaccess` is configured for SPA routing

3. **Create .htaccess file** (if not exists)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

4. **Configure SSL Certificate**
   - Use Let's Encrypt (free)
   - Enable in cPanel SSL/TLS section

---

### Option 4: Firebase Hosting

**Steps:**

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
firebase login
```

2. **Initialize Firebase**
```bash
firebase init hosting
```
   - Select existing project or create new
   - Public directory: `build`
   - Configure as SPA: Yes
   - Overwrites: No

3. **Deploy**
```bash
npm run build
firebase deploy
```

---

## Domain Configuration

### DNS Records for Custom Domain

**For www.ranabirjanahit.edu.np:**

#### If using Vercel/Netlify:
```
A     @        76.76.21.21 (or provided IP)
CNAME www      your-site.vercel.app
```

#### If using traditional hosting:
```
A     @        YOUR_SERVER_IP
CNAME www      @
```

### SSL Certificate
- Vercel/Netlify: Automatic SSL
- Traditional hosting: Use Let's Encrypt (free)
- Firebase: Automatic SSL

---

## Post-Deployment Checklist

### Required Updates

1. **Contact Information**
   - Update phone number in `src/utils/translations.js`
   - Update email addresses
   - Add social media links if needed

2. **School Photos**
   - Add real photos to gallery
   - Optimize images (WebP format, <200KB)
   - Update gallery events

3. **Google Analytics** (Optional)
   - Create GA4 property
   - Add tracking code to `public/index.html`

4. **Search Console**
   - Verify site ownership
   - Submit sitemap
   - Monitor performance

### SEO Optimization

1. **Create Sitemap**
```bash
npm install --save-dev react-snap
```

Add to package.json:
```json
"scripts": {
  "postbuild": "react-snap"
}
```

2. **Generate robots.txt**
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://www.ranabirjanahit.edu.np/sitemap.xml
```

3. **Google My Business**
   - Create/claim school listing
   - Add photos, hours, location
   - Connect website

---

## Monitoring & Maintenance

### Performance Monitoring

**Free Tools:**
- Google PageSpeed Insights
- GTmetrix
- Lighthouse (Chrome DevTools)

**Target Metrics:**
- First Contentful Paint: <2s
- Time to Interactive: <3.5s
- Largest Contentful Paint: <2.5s

### Regular Updates

**Monthly:**
- Update events calendar
- Add new photos to gallery
- Check for broken links

**Quarterly:**
- Review and update content
- Check dependencies: `npm outdated`
- Update packages: `npm update`

**Annually:**
- Renew domain
- Review SSL certificate
- Major content overhaul

---

## Troubleshooting

### Build Errors

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**"Out of memory"**
```bash
export NODE_OPTIONS=--max-old-space-size=4096
npm run build
```

### Deployment Issues

**404 on refresh (SPA routing)**
- Ensure .htaccess is configured
- Or use `HashRouter` instead of `BrowserRouter`

**Slow loading**
- Enable Gzip compression
- Use CDN for assets
- Optimize images

---

## Security Best Practices

1. **Regular Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Use `npm audit` to check vulnerabilities

2. **Form Protection**
   - Add CAPTCHA to contact/admission forms
   - Implement rate limiting
   - Validate all inputs

3. **Backup**
   - Regular code backups (Git)
   - Database backups (when backend is added)
   - Keep local copy of content

---

## Support & Resources

### Documentation
- React: https://react.dev
- React Router: https://reactrouter.com
- Vercel: https://vercel.com/docs

### Community
- React Community: https://react.dev/community
- Stack Overflow: tag `reactjs`

### Tutorials
- freeCodeCamp React course
- React official tutorial
- YouTube: Traversy Media, Net Ninja

---

## Cost Estimate

### Free Tier (Recommended for Start)
- **Hosting:** Vercel/Netlify (Free)
- **Domain:** $10-15/year (.edu.np may vary)
- **SSL:** Free (Let's Encrypt)
- **Total:** ~$10-15/year

### Professional Setup
- **Premium Hosting:** $50-100/year
- **Domain:** $10-15/year
- **Professional Email:** $6/user/month (Google Workspace)
- **CDN:** Free tier sufficient
- **Total:** ~$150-200/year

---

## Next Steps After Deployment

1. **Announce the Website**
   - Social media posts
   - Email to parents/students
   - Add to school stationery

2. **Collect Feedback**
   - User surveys
   - Analytics review
   - Continuous improvement

3. **Plan Phase 2**
   - Online admission system
   - Student portal
   - Parent communication app

---

**Deployment Date:** To be determined  
**Version:** 1.0.0  
**Maintained by:** Ranabir Janahit Secondary School IT Team

For technical support, contact: [Your Contact Information]
