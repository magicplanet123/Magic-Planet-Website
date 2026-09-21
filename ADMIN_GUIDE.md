# Magic Planet Admin Guide - Managing Your Marketplace

This guide shows you how to manage tools, update content, and scale your marketplace.

---

## 📝 TOOL MANAGEMENT (Most Important!)

Your tool database is a simple JSON file. This is your dashboard!

### **Where**: `public/data/tools.json`

### **How to Edit**:
1. Open the file in any text editor (VS Code, Notepad++, Sublime)
2. Add/edit/remove tools
3. Save the file
4. Refresh browser (http://localhost:3000)
5. Changes appear instantly!

### **Add Tool in 2 Minutes**:

```json
{
  "id": 9,
  "name": "PDF Generator MCP",
  "category": "Document Processing",
  "tagline": "Convert data to PDF instantly",
  "description": "Generate professional PDFs from templates. Perfect for invoices, reports, and certificates.",
  "image": "https://via.placeholder.com/300x200?text=PDF+Generator",
  "rating": 4.9,
  "downloads": 2300,
  "features": [
    "Template support",
    "Batch processing",
    "Custom branding",
    "Email integration",
    "Watermarking"
  ],
  "pricing": "Free (1000 pages/month)",
  "integrations": ["Node.js", "Python", "API"],
  "documentation": "/docs/pdf-generator",
  "caseStudy": "Generated 50K invoices/month for clients",
  "trending": true,
  "status": "Production Ready"
}
```

### **Tool Status Options**:
- "Production Ready" - Ship it!
- "Beta" - Testing phase
- "Coming Soon" - Hype it up
- "Deprecated" - Old tool (hide it)

### **Categories to Use**:
- Email
- Web Scraping
- AI/ML
- Data Integration
- Document Processing
- Social Media
- Compliance
- CRM
- Automation

### **Pricing Options**:
- "Free"
- "Free (1000 items/month)"
- "Free + Premium"
- "$29/month"
- "Custom pricing"

---

## 🎨 Update Branding

### **Site Title & Description**
File: `app/layout.jsx`

```jsx
export const metadata = {
  title: 'Magic Planet - MCP & AI Tools Marketplace',
  description: 'Your description here',
  keywords: 'MCP, AI, automation',
};
```

### **Colors (Tailwind)**
File: `tailwind.config.js`

```js
colors: {
  primary: '#6366f1',      // Indigo
  secondary: '#ec4899',    // Pink
  dark: '#0f172a',         // Dark slate
  light: '#f8fafc',        // Light slate
}
```

**Color Ideas**:
- Tech Blue + Purple: `#3b82f6`, `#8b5cf6`
- Professional: `#1e40af`, `#dc2626`
- Modern: `#06b6d4`, `#f59e0b`

### **Logo & Favicon**
1. Replace `public/favicon.ico` with your logo
2. Update logo in `components/Navbar.jsx`:
   ```jsx
   <span className="text-2xl">🌟 Magic Planet</span>
   // Change emoji or add image
   ```

---

## 📊 Add Analytics

### **Google Analytics**
1. Go to https://analytics.google.com
2. Create account → Get tracking ID (G-XXXXXXX)
3. Add to `app/layout.jsx`:

```jsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}></script>
<script>{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
`}</script>
```

### **Track Key Events**:
- Tool clicks
- Marketplace views
- Documentation downloads
- Contact form submissions

---

## 💬 Add Contact Info

### **Update Email**
File: `app/contact/page.jsx`

```jsx
<a href="mailto:your@email.com">
  your@email.com
</a>
```

### **Add Phone Number**
```jsx
<a href="tel:+1234567890">
  +1 (234) 567-890
</a>
```

### **Update Address**
```jsx
<p>
  123 Main St<br />
  Your City, Country
</p>
```

---

## 📧 Add Email Newsletter

### **Option 1: Mailchimp (Free)**
1. Sign up at https://mailchimp.com
2. Create form
3. Get embed code
4. Paste in `app/blog/page.jsx` and `app/contact/page.jsx`

### **Option 2: Substack (Free)**
1. Go to https://substack.com
2. Create publication
3. Add email signup to site

---

## 🔗 Update Links

### **Social Media Links**
File: `components/Footer.jsx`

```jsx
<a href="https://twitter.com/yourhandle">Twitter</a>
<a href="https://linkedin.com/company/yourcompany">LinkedIn</a>
<a href="https://github.com/yourprofile">GitHub</a>
```

### **External Links**
File: `app/tools/[id]/page.jsx`

```jsx
<a href={`https://mcpmarket.com/tools/${tool.id}`}>
  View on MCPMarket
</a>
```

---

## 📱 Mobile Testing

### **Test on Mobile**:
1. Open http://localhost:3000 in browser
2. Press F12 (DevTools)
3. Click responsive design icon (top-left)
4. Select "iPhone" or "Android"
5. Test all pages

### **Check Your Site**:
- All text readable?
- Buttons clickable?
- Images load fast?
- No horizontal scroll?

---

## 🚀 Deploy Updates

### **After Editing**:
```bash
# Rebuild
npm run build

# If Netlify:
# Drag-drop 'out/' folder to Netlify

# If Vercel:
git add .
git commit -m "Update tools"
git push origin main
# Auto-deploys!
```

---

## 📈 Scaling Your Marketplace

### **Week 1-2: Launch**
- ✅ Deploy site
- ✅ Add 5-8 tools
- ✅ Share on social
- ✅ Monitor analytics

### **Week 3-4: Growth**
- ✅ Add 3-5 new tools
- ✅ Create blog posts
- ✅ Share on Product Hunt
- ✅ Email friends

### **Month 2: Scale**
- ✅ 20+ tools
- ✅ Weekly blog
- ✅ Guest posts
- ✅ Affiliates program

### **Month 3+: Monetize**
- ✅ Premium tools
- ✅ API access
- ✅ Enterprise plan
- ✅ Partnerships

---

## 💡 Best Practices

### **For Tools**:
- ✅ Update tools.json daily (keep fresh)
- ✅ Show trending tools (builds FOMO)
- ✅ Use real download numbers
- ✅ Include honest reviews
- ✅ Case studies with numbers

### **For Content**:
- ✅ Blog post weekly
- ✅ Share on social
- ✅ Respond to comments
- ✅ User testimonials
- ✅ Video tutorials

### **For SEO**:
- ✅ Keyword in titles
- ✅ Meta descriptions
- ✅ Internal links
- ✅ Mobile optimized
- ✅ Fast loading

---

## 🆘 Quick Fixes

### **Tools not showing?**
```bash
# Check JSON syntax
# Use JSONLint: https://jsonlint.com/
# Paste tools.json content
```

### **Styles broken?**
```bash
npm run build
# Redeploy
```

### **Site slow?**
- Check image sizes
- Clear Netlify cache
- Minimize JavaScript

---

## 📞 Common Questions

**Q: How often should I add tools?**
A: Daily is ideal (1-2 new tools). Keeps visitors coming back.

**Q: Can I bulk import tools?**
A: Not yet. Add them manually or write a script to generate JSON.

**Q: How do I backup tools.json?**
A: Use Git or manually save copies. Version control is your friend!

**Q: Can I customize tool pages?**
A: Yes! Edit `app/tools/[id]/page.jsx` to change layout.

---

## 🎯 Next Level Features

### **To Add Later**:
- [ ] User accounts & favorites
- [ ] Reviews/ratings system
- [ ] Advanced search
- [ ] Comparison tool
- [ ] API documentation
- [ ] SDKs/libraries
- [ ] Affiliate program
- [ ] Pricing calculator
- [ ] Video demos
- [ ] Community forum

---

**Your marketplace is ready to scale!** 🚀

Start by adding tools daily and watching your traffic grow.
