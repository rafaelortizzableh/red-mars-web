# Red Mars - Transformación Digital

Modern, responsive landing page with dark mode and parallax effects for Red Mars.

## 🚀 Features

- **Dark Mode by Default** - Space-themed design with starfield effects
- **Parallax Hero Section** - Smooth scrolling animations
- **Interactive Footer** - Cursor-reactive glow effect and star field
- **Gradient Navigation** - Black to transparent gradient inspired by modern space companies
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Micro-interactions** - Button hover effects, playful copyright, and smooth transitions
- **Bilingual Support** - Spanish (primary) and English versions
- **SEO Optimized** - Complete meta tags, structured data, and hreflang implementation
- **Fast & Lightweight** - Pure HTML, CSS, and vanilla JavaScript (no frameworks)

## 📁 Project Structure

```
web/
├── index.html              # Spanish landing page (main)
├── index-en.html          # English landing page
├── manifest.json          # Web manifest for Spanish (not installable)
├── manifest-en.json       # Web manifest for English (not installable)
├── styles.css             # All styles with dark theme
├── script.js              # Parallax and animations
├── media/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── rm-logo.png
├── rm_content/
│   └── uploads/
│       └── 2020/
│           └── 01/
│               └── RM-Favicon.png  # Logo (maintains legacy URL)
└── README.md
```

## 🎨 Design Details

### Branding
- **Brand Name**: Always "Red Mars" (uppercase)
- **RED**: Always in red color (`#d63232`)
- **MARS**: White (`#fafafa`) on dark backgrounds, dark (`#1a1a1a`) on light backgrounds

### Typography
- **Titles**: Roboto (900, 700, 400, 300)
- **Body**: Open Sans (700, 600, 400, 300)

### Colors
- **Primary Red**: `#d63232`
- **Salmon**: `#ff5656`
- **Dark Background**: `#0a0a0a`
- **Dark Charcoal**: `#1a1a1a`
- **Black**: `#000000`
- **Text Light**: `#cccccc`
- **Text Dim**: `#888888`
- **Warm White**: `#fafafa`

### Services Offered
1. **Tailor-Made Software Development** - Mobile and web apps
2. **Digital Strategy & Consulting**
3. **Market Intelligence**
4. **Websites & E-commerce**

## 🌐 SEO Configuration

### Language Support
- **Spanish** (main): `https://redmars.es/` or `https://redmars.es/index.html`
- **English**: `https://redmars.es/index-en.html`

Both pages include:
- Proper `hreflang` tags
- Canonical URLs
- Open Graph meta tags
- Twitter Card meta tags
- JSON-LD structured data

## 📧 Contact Integration & Interactive Footer

Both pages include an enhanced, interactive footer with:
- **Interactive glow effect** that follows the cursor
- **Dynamic star field** that appears near cursor movement
- **Large, appealing CTA headline** asking to discuss the project
- **Engaging copy** describing the value proposition
- **Prominent mailto button** that opens the user's email client with:
  - **To**: hola@redmars.es
  - **Subject**: Pre-filled based on language
  - **Body**: Template expressing interest in services
- **Playful copyright message** with animated rocket emoji
- **Clickable "RED" text** that shows fun, random messages in the respective language

## 🚢 Deployment

### Option 1: Static Hosting (Recommended)
Upload all files to any static hosting service maintaining the folder structure:
- **Netlify**: Drag and drop the `web` folder
- **Vercel**: Deploy via Git or CLI
- **GitHub Pages**: Push to repository and enable Pages
- **AWS S3 + CloudFront**
- **Firebase Hosting**

### Option 2: Traditional Web Server
Upload files via FTP/SFTP to your web server's public directory:
```bash
# Ensure the following structure on your server:
/public_html/
├── index.html
├── index-en.html
├── styles.css
├── script.js
└── rm_content/
    └── uploads/
        └── 2020/
            └── 01/
                └── RM-Favicon.png
```

### Important: Logo URLs
Two logo files are used:

**Dark Version** (main logo for dark backgrounds):
```
https://redmars.es/media/rm-logo.png
```

These URLs must remain accessible for:
- Navigation logo
- Favicon
- Open Graph images
- Marketing materials
- External websites (SEO purposes)

## 🧪 Testing Locally

You can test the site locally using any of these methods:

### Method 1: Python Server
```bash
cd web
python3 -m http.server 8000
# Open http://localhost:8000
```

### Method 2: Node.js http-server
```bash
npm install -g http-server
cd web
http-server
# Open http://localhost:8080
```

### Method 3: VS Code Live Server
Install the "Live Server" extension and right-click on `index.html` → "Open with Live Server"

### Method 4: Just open the index.html file in your browser
```bash
cd web
open index.html
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- No external dependencies (except Google Fonts)
- Minimal JavaScript (~100 lines)
- Optimized CSS with responsive breakpoints
- Lazy-loading ready for future images

## 🎨 Interactive Features

### Navigation
- Gradient background from black to transparent
- Smooth blur effect on scroll
- Transitions to more opaque gradient when scrolled

### Footer
- **Cursor-reactive glow**: Red gradient glow follows mouse movement
- **Interactive stars**: Stars appear and fade based on cursor proximity (200px radius)
- **Floating rocket emoji**: Subtle animation in copyright message
- **Playful Easter egg**: Click on "RED" in copyright to see random space-themed messages
- **Hover effects**: CTA headline changes color on hover

### Hero Section
- Parallax scrolling on background stars
- Content fades and moves with scroll position
- Mouse-following parallax effect

## 🎯 Future Enhancements

Consider adding:
- [ ] Google Analytics or privacy-friendly alternative
- [ ] Cookie consent banner (if needed for EU compliance)
- [ ] Additional case studies or portfolio section
- [ ] Blog section for content marketing
- [ ] Contact form with backend integration
- [ ] Prefers-reduced-motion media query for accessibility
- [ ] More interactive elements (particle effects, 3D transforms)

## 📄 License

© 2025 Red Mars. All rights reserved.

---

**Built with ❤️ for Red Mars - Transformación Digital**

