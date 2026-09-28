# Vercel Deployment Guide for Vite + React Application

This repository is fully configured for seamless, zero-config deployment to **Vercel**.

---

## 📄 Key Configuration File (`vercel.json`)

The [`vercel.json`](file:///d:/Practice%20Projects/kaizel/vercel.json) file in the root directory ensures single-page client-side routing (`react-router-dom`) works without `404` errors when refreshing inner pages (`/products`, `/solutions`, `/contact`):

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🚀 Option 1: Deploy via Vercel CLI (Recommended & Fastest)

1. Open your terminal in the project root:
   ```bash
   npx vercel
   ```
2. Follow the interactive prompts:
   - **Set up and deploy?** `Y`
   - **Which scope?** (Select your account)
   - **Link to existing project?** `N`
   - **Project Name:** `kaizel-engineers` (or your preferred name)
   - **In which directory is your code located?** `./`
   - **Auto-detected Project Settings:** Press `Enter` to accept defaults.

3. To deploy directly to production:
   ```bash
   npx vercel --prod
   ```

---

## 🌐 Option 2: Deploy via Vercel Web Dashboard (GitHub Integration)

1. Push your codebase to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```
2. Log in to [Vercel Dashboard](https://vercel.com/new).
3. Click **"Import Project"** and select your GitHub repository.
4. Vercel will automatically detect `Vite` framework settings.
5. Click **"Deploy"**.

---

## 📦 Option 3: Manual Drag & Drop Build Deploy

If you prefer uploading pre-built static files:
1. Generate production bundle:
   ```bash
   npm run build
   ```
2. Go to [Vercel New Import](https://vercel.com/new).
3. Drag and drop the generated `dist/` folder.
