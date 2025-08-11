# 🚀 Deploy to Vercel - Complete Guide

## 📋 **Prerequisites**

1. **GitHub Account** - Your code must be on GitHub
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **MongoDB Atlas Account** - Free database at [mongodb.com/atlas](https://mongodb.com/atlas)
4. **Gmail Account** - For sending emails

## 🔧 **Step 1: Prepare Your Code**

### 1.1 Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 1.2 Verify File Structure
Your project should have:
```
├── api/
│   ├── inquiries.js
│   └── gallery.js
├── client/
│   ├── src/
│   ├── package.json
│   └── public/
├── vercel.json
├── package.json
└── server.js
```

## 🌐 **Step 2: Set Up MongoDB Atlas**

### 2.1 Create MongoDB Atlas Cluster
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Sign up for free account
3. Create new cluster (free tier)
4. Wait for cluster to be ready

### 2.2 Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database password

**Example:**
```
mongodb+srv://username:yourpassword@cluster0.xxxxx.mongodb.net/wedlanzaa?retryWrites=true&w=majority
```

## 🚀 **Step 3: Deploy to Vercel**

### 3.1 Connect GitHub to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository

### 3.2 Configure Project
1. **Project Name**: `wedlanzaa-photography`
2. **Framework Preset**: Other
3. **Root Directory**: `./` (root)
4. **Build Command**: Leave empty
5. **Output Directory**: Leave empty

### 3.3 Set Environment Variables
Click "Environment Variables" and add:

```
MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/wedlanzaa?retryWrites=true&w=majority
EMAIL_USER = your_gmail@gmail.com
EMAIL_PASS = your_gmail_app_password
NODE_ENV = production
```

### 3.4 Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Your app will be live at: `https://your-project.vercel.app`

## 📧 **Step 4: Configure Gmail for Emails**

### 4.1 Enable 2-Factor Authentication
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Security → 2-Step Verification → Turn on

### 4.2 Generate App Password
1. Security → App passwords
2. Select "Mail" and "Other (Custom name)"
3. Name it "Wedlanzaa Website"
4. Copy the 16-character password
5. Use this password in `EMAIL_PASS` environment variable

## 🔍 **Step 5: Test Your Deployment**

### 5.1 Test All Pages
- ✅ Home page loads
- ✅ Gallery displays images
- ✅ About page shows content
- ✅ Contact form works

### 5.2 Test Contact Form
1. Fill out the inquiry form
2. Submit
3. Check if email is received
4. Check MongoDB Atlas for new document

### 5.3 Test API Endpoints
- `https://your-app.vercel.app/api/inquiries`
- `https://your-app.vercel.app/api/gallery`

## 🌍 **Step 6: Custom Domain (Optional)**

### 6.1 Add Custom Domain
1. In Vercel dashboard, go to Domains
2. Add your domain (e.g., `wedlanzaa.com`)
3. Update DNS records as instructed
4. Wait for DNS propagation (24-48 hours)

### 6.2 SSL Certificate
- Vercel automatically provides SSL
- Your site will be accessible via HTTPS

## 📊 **Step 7: Monitor & Analytics**

### 7.1 Vercel Analytics
- View deployment logs
- Monitor performance
- Check error rates

### 7.2 MongoDB Atlas Monitoring
- Monitor database performance
- Check connection status
- View data usage

## 🔧 **Troubleshooting**

### Common Issues:

#### 1. **Build Fails**
```bash
# Check build logs in Vercel dashboard
# Ensure all dependencies are in package.json
```

#### 2. **MongoDB Connection Error**
- Verify connection string
- Check IP whitelist in Atlas
- Ensure database user exists

#### 3. **Email Not Sending**
- Verify Gmail credentials
- Check app password is correct
- Ensure 2FA is enabled

#### 4. **API Routes Not Working**
- Check `vercel.json` configuration
- Verify API folder structure
- Check environment variables

## 📱 **Mobile Testing**

### Test on Different Devices:
- iPhone (Safari)
- Android (Chrome)
- Tablet (iPad)
- Desktop browsers

## 🚀 **Performance Optimization**

### 1. **Image Optimization**
- Use WebP format
- Compress images
- Implement lazy loading

### 2. **Code Splitting**
- React.lazy() for components
- Route-based code splitting

### 3. **Caching**
- Browser caching
- CDN optimization

## 💰 **Cost & Limits**

### Vercel Free Tier:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ 100GB storage
- ✅ Custom domains
- ✅ SSL certificates

### MongoDB Atlas Free Tier:
- ✅ 512MB storage
- ✅ Shared clusters
- ✅ Basic monitoring

## 🔄 **Updates & Maintenance**

### Deploy Updates:
```bash
git add .
git commit -m "Update description"
git push origin main
# Vercel auto-deploys on push
```

### Environment Variable Changes:
1. Update in Vercel dashboard
2. Redeploy project

## 📞 **Support Resources**

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **MongoDB Atlas**: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## 🎉 **Congratulations!**

Your Wedlanzaa wedding photography website is now live on the internet! 

**Next Steps:**
1. Share your website URL
2. Test all functionality
3. Monitor performance
4. Add real content and images
5. Set up Google Analytics

---

**Your website URL**: `https://your-project.vercel.app`

**Need help?** Check the troubleshooting section or Vercel documentation. 