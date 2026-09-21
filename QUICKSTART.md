# Magic Planet - Quick Start (5 Minutes)

Get your marketplace running locally in 5 minutes!

---

## ✅ STEP 1: Install Node.js (2 min)

1. Download: https://nodejs.org (LTS version)
2. Install (accept defaults)
3. Open Terminal/CMD and verify:
   ```bash
   node --version
   npm --version
   ```

---

## ✅ STEP 2: Setup Project (1 min)

```bash
# Navigate to project
cd "C:\Users\sumyi\OneDrive\Desktop\Magic-Planet-Website"

# Install dependencies
npm install
```

---

## ✅ STEP 3: Run Locally (1 min)

```bash
# Start development server
npm run dev
```

Expected output:
```
> next dev
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
```

---

## ✅ STEP 4: Open in Browser (1 min)

1. Go to: http://localhost:3000
2. Explore the site!
3. Click "Browse Tools" to see all tools
4. Click a tool for details

---

## ✅ STEP 5: Add Your First Tool (30 sec)

1. Open file: `public/data/tools.json`
2. Add this to the end of the tools array:

```json
,{
  "id": 9,
  "name": "Your First Tool",
  "category": "AI/ML",
  "tagline": "This is my tool",
  "description": "A test tool to verify everything works.",
  "image": "https://via.placeholder.com/300x200",
  "rating": 5,
  "downloads": 1,
  "features": ["Feature 1", "Feature 2"],
  "pricing": "Free",
  "integrations": ["Python"],
  "documentation": "/docs",
  "caseStudy": "It works!",
  "trending": true,
  "status": "Production Ready"
}
```

3. Save the file
4. Refresh browser (http://localhost:3000)
5. See your tool appear! 🎉

---

## 📝 Common Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Fix styling issues
npm run dev
# Then Ctrl+C and restart

# Check for errors
npm run lint
```

---

## 🛠️ Edit Marketplace

### **Add Tools**
- Edit: `public/data/tools.json`
- Save → Refresh browser
- Done! ✅

### **Change Colors**
- Edit: `tailwind.config.js`
- Update `primary`, `secondary` colors
- Save → Restart dev server

### **Update Text**
- Edit: `app/page.jsx` (homepage)
- Edit: `app/layout.jsx` (site title)
- Save → Refresh browser

### **Change Navigation**
- Edit: `components/Navbar.jsx`
- Save → Refresh browser

---

## 🚀 Ready to Deploy?

### **Option 1: Netlify (Recommended)**
```bash
# Build
npm run build

# Upload 'out/' folder to Netlify.com
# Your site is live in 2 minutes!
```

### **Option 2: Vercel**
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial"
git push

# Connect GitHub to Vercel.com
# Auto-deploys on every push!
```

---

## 🆘 Troubleshooting

### **Port 3000 already in use?**
```bash
# Use different port
npm run dev -- -p 3001
# Go to http://localhost:3001
```

### **Dependencies fail?**
```bash
rm node_modules package-lock.json
npm install
npm run dev
```

### **Styles look broken?**
```bash
npm run dev
# Press Ctrl+C
npm run dev
# Restart fixes it
```

### **Changes not showing?**
```bash
# Hard refresh browser
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

---

## 📚 Learn More

- **README.md** - Full documentation
- **ADMIN_GUIDE.md** - Managing tools & content
- **DEPLOYMENT_GUIDE.md** - Deploy to production
- **CLAUDE.md** - AI integration tips

---

## 🎯 Next Steps

1. ✅ Run `npm run dev`
2. ✅ Add 5-10 tools to tools.json
3. ✅ Customize colors in tailwind.config.js
4. ✅ Update contact email
5. ✅ Deploy to Netlify
6. ✅ Share your marketplace!

---

**You're all set!** 🚀

Your marketplace is running and ready to customize.

Add tools daily and watch your user base grow! 📈
