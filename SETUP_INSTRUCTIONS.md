# Himalaya Apex Academy - Setup Instructions

## Installation Steps

```bash
# Create React App (if starting fresh)
npx create-react-app school-mockup
cd school-mockup

# Install React Router DOM (only external dependency)
npm install react-router-dom

# Copy all provided files into the src/ directory:
# - App.js
# - index.js
# - App.css
# - components/Header.jsx
# - components/Home.jsx
# - components/Admissions.jsx
# - components/Gallery.jsx
# - components/Footer.jsx
# - components/LoadingSpinner.jsx
# - utils/translations.js

# Start development server
npm start
```

## Browser Support
- Optimized for Chrome, Firefox, Safari, Edge
- Mobile-first responsive design
- Works offline after initial load (PWA-ready)
- 2G-friendly: no external images, lightweight CSS

## Features
✅ Dark theme with neon green accents  
✅ Bilingual (English/Nepali) with localStorage persistence  
✅ React Router DOM navigation  
✅ Accessible (ARIA labels, semantic HTML)  
✅ AI-optimized loading animations  
✅ Works on budget Android devices  

## Project Structure
```
src/
├── App.js                    # Main router & language context
├── index.js                  # Entry point
├── App.css                   # Global styles, animations, dark theme
├── components/
│   ├── Header.jsx           # Navigation with language toggle
│   ├── Home.jsx             # Hero, welcome, events
│   ├── Admissions.jsx       # Application form
│   ├── Gallery.jsx          # Event gallery with lightbox
│   ├── Footer.jsx           # Contact info, copyright
│   └── LoadingSpinner.jsx   # Neural network animation
└── utils/
    └── translations.js      # Bilingual text objects
```

## Color Palette
- Background: #0a0e1a (navy blue)
- Text: #f0f4f8 (off-white)
- Accent: #00ff88 (neon green)
- Secondary: #1a2332 (card backgrounds)
