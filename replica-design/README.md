# Scale AI Landing Page Replica

This is a pixel-perfect replica of the Scale AI landing page with all sections from the provided screenshots.

## 📁 Files
- `index.html` - Main HTML structure
- `style.css` - All styling with pixel-based positioning
- `script.js` - Interactive animations and effects

## 🎨 Sections Included

### 1. **Top Banner** (Position: top: 0px)
- Open-source announcement banner

### 2. **Navigation Bar** (Position: top: 50px)
- Logo, menu links, and CTA buttons

### 3. **Hero Section** (Position: top: 200px)
- Main headline with gradient geometric shape
- Gradient colors: `#e8c5ff → #b8e8ff → #c5f0ff`

### 4. **Partners Section** (Position: top: 850px)
- Company logos: Meta, Cohere, Adept, Character.ai

### 5. **Enterprise Section** (Position: top: 1100px)
- Full-Stack AI Solutions

### 6. **Providers Section** (Position: top: 1500px)
- Partner cards: Adept, Meta, Cohere, Anthropic

### 7. **Agentic Solutions** (Position: top: 1800px)
- Defense and Enterprise solution cards

### 8. **Features Section** (Position: top: 2600px)
- Fine-Tuning, Foundation Models, Enterprise Data

### 9. **Research Section** (Position: top: 3100px)
- SEAL Leaderboards
- FORTRESS Risk Assessment
- Adaptive Guidance cards

### 10. **Build AI Section** (Position: top: 3500px)
- AI Text Generator demo window
- Generative AI information
- Interactive feedback ranking system

### 11. **Customers Section** (Position: top: 4300px)
- Video testimonial placeholder
- Mark Zuckerberg quote

## 🎯 Key Features

### Pixel-Based Positioning
All sections use absolute positioning with pixel values for easy adjustments:
```css
.hero-section {
    position: absolute;
    top: 200px;
    left: 0px;
    /* Adjust these values to move sections */
}
```

### Gradient Colors
The geometric shape uses the proper gradient:
```css
background: linear-gradient(135deg, #e8c5ff 0%, #b8e8ff 50%, #c5f0ff 100%);
```

### Interactive Elements
- ✅ Hover effects on all cards
- ✅ Typing animation in demo window
- ✅ Clickable feedback options
- ✅ Pulsing play button
- ✅ Smooth scroll animations

## 🔧 How to Adjust Positions

### Moving Sections Vertically
Edit the `top` value in `style.css`:
```css
.research-section {
    top: 3100px; /* Change this number */
}
```

### Moving Elements Horizontally
Edit the `left` or `right` values:
```css
.hero-visual {
    right: 150px; /* Change this number */
}
```

### Adjusting Spacing
Edit padding values:
```css
.build-ai-section {
    padding: 100px 100px; /* top/bottom left/right */
}
```

## 🎨 Color Customization

### Main Colors
- Background: `#000000` (black)
- Cards: `#1a1a1a` (dark gray)
- Text Primary: `#ffffff` (white)
- Text Secondary: `#cccccc` (light gray)
- Accent: `#888888` (medium gray)

### Gradient
- Pink to Blue: `#e8c5ff → #b8e8ff → #c5f0ff`

## 🚀 Usage

1. Open `index.html` in any modern browser
2. All animations will trigger on scroll
3. Interactive elements respond to clicks and hovers

## 📝 Notes

- All positioning is in pixels for maximum control
- Sections are absolutely positioned for easy rearrangement
- Animations use Intersection Observer for performance
- Responsive design can be added with media queries

## 🎬 Animations

- **Fade-in on scroll** - Cards and sections
- **Typing effect** - Demo window query
- **Pulse animation** - Play button
- **Hover effects** - All interactive elements
- **Parallax** - Hero visual and logos
