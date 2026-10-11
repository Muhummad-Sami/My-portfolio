# Netlify Deployment Guide

This Next.js 15 portfolio is fully configured and ready for one-click deployment on **Netlify**.

---

## 🚀 Quick Deployment (Recommended: Netlify + GitHub)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production portfolio"
   git branch -M main
   git remote add origin https://github.com/Muhummad-Sami/<your-repo-name>.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify Dashboard](https://app.netlify.com/).
   - Click **"Add new site"** → **"Import an existing project"**.
   - Select **GitHub** and authorize access.
   - Choose your portfolio repository.

3. **Build Settings (Automatically Detected)**:
   The included [`netlify.toml`](./netlify.toml) configures everything automatically:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Plugin**: `@netlify/plugin-nextjs`
   - **Node.js Version**: `20`

4. **Environment Variables (Optional)**:
   In the Netlify dashboard under **Site configuration > Environment variables**, you can set:
   - `NEXT_PUBLIC_SITE_URL`: Your custom domain or Netlify URL (e.g. `https://your-portfolio.netlify.app`)
   - `RESEND_API_KEY`: *(Optional)* If you want to use the Resend email service for the contact form. (If omitted, visitors can use direct Gmail / Mail App links pre-filled with their message, or FormSubmit forwarder).

5. Click **"Deploy site"**!

---

## ⚡ Alternative: Deploy via Netlify CLI

If you prefer deploying from your terminal:

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login to your Netlify account
netlify login

# 3. Build & Deploy
netlify deploy --build --prod
```

---

## 📁 Key Files Configured for Netlify

- [`netlify.toml`](./netlify.toml): Defines build command, publish directory, security headers, caching, and the Next.js runtime plugin.
- [`.nvmrc`](./.nvmrc): Locks Node.js runtime version to `20` LTS.
- [`package.json`](./package.json): Includes `@netlify/plugin-nextjs` (v5).
- [`next.config.ts`](./next.config.ts): Optimized Next.js 15 configuration with remote image patterns.
