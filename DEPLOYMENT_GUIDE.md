# 🚀 Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (free)
- Your project pushed to GitHub

---

## 📋 Pre-Deployment Checklist

### ✅ Things Already Done:
- [x] Project is built with Vite + React
- [x] EmailJS is configured
- [x] React Router is set up
- [x] `vercel.json` created for proper routing

### ⚠️ Before Deploying:

1. **Update Contact Information** (if needed):
   - Email in `src/components/Footer.jsx`
   - Phone number in `src/components/Footer.jsx`
   - Social media links (Twitter, LinkedIn) in `src/components/Footer.jsx`

2. **Verify EmailJS Credentials** are correct:
   - Service ID: `service_jjheqv5`
   - Template ID: `template_2lzphxb`
   - Public Key: `FOjHaASn5PuP8rJ-8`

3. **Test Locally** one more time:
   ```bash
   npm run dev
   ```

---

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Easiest)

#### Step 1: Push to GitHub

1. **Create a new repository** on GitHub
2. **Initialize git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ready for deployment"
   ```

3. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click **"Add New Project"**
4. **Import** your GitHub repository
5. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Click **"Deploy"**

#### Step 3: Wait for Deployment
- Vercel will build and deploy your site
- Takes about 1-3 minutes
- You'll get a URL like: `your-project.vercel.app`

---

### Option 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
# First deployment
vercel

# Production deployment
vercel --prod
```

Follow the prompts and your site will be deployed!

---

## 🔧 Vercel Configuration

Your `vercel.json` file is already configured:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures React Router works correctly with all your routes:
- `/`
- `/recruitment`
- `/virtual-assistant`
- `/data-analytics`
- `/software-development`
- `/schedule-call`

---

## 🌐 Custom Domain (Optional)

### Add Your Own Domain:

1. Go to your project on Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `inprava.com`)
4. Follow DNS configuration instructions
5. Vercel provides free SSL automatically!

### DNS Configuration:
For **Hostinger** or any DNS provider:
1. Add a CNAME record:
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com
2. Add an A record for root domain:
   - **Type**: A
   - **Name**: @
   - **Value**: 76.76.21.21

---

## ✅ Post-Deployment Checklist

After deployment, test these:

### 1. Navigation
- [ ] Home page loads
- [ ] All service pages work (Recruitment, VA, Analytics, Software)
- [ ] Call scheduling page works
- [ ] Header navigation works
- [ ] Footer links work

### 2. Forms
- [ ] Contact form submits successfully
- [ ] Call scheduling form submits
- [ ] Email arrives in your Hostinger inbox
- [ ] Success/error messages display correctly

### 3. Responsive Design
- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop

### 4. Performance
- [ ] All images load
- [ ] Animations work smoothly
- [ ] No console errors

---

## 🔄 Automatic Deployments

Once connected to GitHub:
- **Every push to `main` branch** = automatic deployment to production
- **Preview deployments** for pull requests
- **Instant rollbacks** if needed

---

## 📊 Monitoring & Analytics

### Vercel Dashboard provides:
- Real-time deployment logs
- Performance metrics
- Error tracking
- Analytics (with Vercel Analytics - optional upgrade)

---

## 🐛 Troubleshooting

### Issue: 404 on Direct Route Access
**Solution**: Make sure `vercel.json` is in your project root (already done ✅)

### Issue: EmailJS Not Working
**Solution**: 
1. Check browser console for errors
2. Verify EmailJS credentials are correct
3. Check EmailJS dashboard for failed sends

### Issue: Environment Variables Not Working
**Solution**: In Vercel Dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add your variables (if you move to .env later)

### Issue: Build Fails
**Solution**: 
1. Check build logs in Vercel
2. Make sure `package.json` has correct scripts
3. Verify all dependencies are in `package.json`

---

## 🎯 Optimization Tips

### 1. Add Environment Variables (Later)
Move EmailJS credentials to environment variables:
```bash
# In Vercel Dashboard → Settings → Environment Variables
VITE_EMAILJS_SERVICE_ID=service_jjheqv5
VITE_EMAILJS_TEMPLATE_ID=template_2lzphxb
VITE_EMAILJS_PUBLIC_KEY=FOjHaASn5PuP8rJ-8
```

### 2. Enable Vercel Analytics
- Go to **Analytics** tab
- Enable Web Analytics
- Get insights on page views, visitors, etc.

### 3. Set Up Domain
- Add your custom domain
- Vercel handles SSL automatically

---

## 📝 Build Commands Reference

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for errors
npm run lint
```

---

## 🎉 You're Done!

After deployment, your site will be live at:
- `https://your-project.vercel.app` (Vercel subdomain)
- `https://yourdomain.com` (if you added custom domain)

### Share Your Links:
- Main Site: `https://your-project.vercel.app`
- Recruitment: `https://your-project.vercel.app/recruitment`
- VA Services: `https://your-project.vercel.app/virtual-assistant`
- Analytics: `https://your-project.vercel.app/data-analytics`
- Software: `https://your-project.vercel.app/software-development`
- Schedule Call: `https://your-project.vercel.app/schedule-call`

---

## 📞 Support

- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: Available in dashboard
- **Community**: [https://github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

## 🚀 Quick Deploy Checklist

```bash
# 1. Make sure everything works locally
npm run dev

# 2. Build to check for errors
npm run build

# 3. Commit all changes
git add .
git commit -m "Ready for deployment"

# 4. Push to GitHub
git push origin main

# 5. Deploy on Vercel Dashboard
# Go to vercel.com → New Project → Import from GitHub

# Done! 🎉
```

---

**Your Inprava website is now ready to go live! 🚀**

