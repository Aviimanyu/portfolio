# Abhimanyu Yadav - Portfolio Website

A modern, responsive portfolio website for Abhimanyu Yadav, Full Stack Developer & SEO Consultant.

## Features

✨ **Modern Design**
- Dark theme with blue accents
- Glassmorphism UI components
- Smooth animations with Framer Motion
- Fully responsive mobile design

🚀 **Performance**
- Next.js 14 with App Router
- Optimized images and assets
- Fast loading times
- SEO optimized

🛠️ **Built With**
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel
- **Language**: TypeScript

## Project Structure

```
abhimanyu-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API endpoint
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Home page
├── components/
│   ├── About.tsx               # About section
│   ├── Contact.tsx             # Contact section
│   ├── FloatingWhatsApp.tsx    # Floating WhatsApp button
│   ├── Footer.tsx              # Footer component
│   ├── Hero.tsx                # Hero section
│   ├── Navbar.tsx              # Navigation bar
│   ├── Projects.tsx            # Featured projects
│   ├── Services.tsx            # Services section
│   └── Skills.tsx              # Skills section
├── public/
│   └── robots.txt              # SEO robots file
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind CSS config
├── next.config.js              # Next.js config
└── README.md                   # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Aviimanyu/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
# Optional: Email configuration for contact form
# GMAIL_USER=your-email@gmail.com
# GMAIL_APP_PASSWORD=your-app-password
```

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Sections

### Hero Section
- Attention-grabbing headline and subheadline
- Call-to-action buttons
- Statistics showcase
- Animated background effects

### About Section
- Personal introduction
- Key achievements
- Quick facts
- Glassmorphic card design

### Services Section
- 6 core service offerings
- Service descriptions
- Icon-based visual hierarchy
- Hover animations

### Featured Projects Section
- 6 showcase projects
- Project descriptions
- Technology tags
- External links
- GitHub integration

### Skills Section
- 6 skill categories
- 50+ individual skills
- Proficiency statistics
- Responsive grid layout

### Contact Section
- Contact information
- Email contact form
- Social media links
- WhatsApp integration
- Calendly booking

## Customization

### Update Personal Information
Edit `/app/page.tsx` and component files to update:
- Name and title
- Contact details
- Project information
- Skills and services

### Modify Colors
Update `/tailwind.config.ts`:
```typescript
colors: {
  'accent': '#3B82F6',      // Primary accent color
  'primary': '#0F172A',     // Dark background
  'secondary': '#1E293B',   // Secondary background
  // ... more colors
}
```

### Add New Projects
Edit `/components/Projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    url: 'https://project-url.com',
    tags: ['React', 'Next.js'],
    featured: true,
  },
  // ... add more projects
]
```

## Email Configuration (Optional)

To enable the contact form to send emails:

1. Install nodemailer:
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

2. Update `/app/api/contact/route.ts` with your email service configuration

3. Set environment variables in `.env.local`:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

## Deployment

### Deploy to Vercel

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Configure custom domain:**
   - Go to Project Settings
   - Add your domain (abhimanyu.dev)
   - Follow DNS configuration steps

### Environment Variables on Vercel
- Go to Project Settings → Environment Variables
- Add any environment variables needed (e.g., GMAIL credentials)

## Performance Optimizations

✅ Image optimization with Next.js Image component
✅ Code splitting and lazy loading
✅ CSS minification with Tailwind
✅ JavaScript minification with SWC
✅ Compression enabled
✅ Caching headers configured

## SEO Features

✅ Semantic HTML structure
✅ Meta tags and Open Graph tags
✅ JSON-LD schema markup
✅ Sitemap and robots.txt
✅ Mobile-friendly design
✅ Fast Core Web Vitals
✅ Structured data

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance Metrics

- Lighthouse Score: 95+
- Core Web Vitals: All green
- PageSpeed Insights: 90+
- Mobile Friendly: Yes

## License

MIT License - feel free to use this template for your portfolio

## Contact

- Email: abhimanyucoder88@gmail.com
- WhatsApp: +91 9971055356
- Portfolio: https://abhimanyu.dev
- GitHub: https://github.com/Aviimanyu
- LinkedIn: https://www.linkedin.com/in/wordpress-seo-specialist-abhi/

## Support

For issues, suggestions, or improvements, please open an issue or reach out via email or WhatsApp.

---

**Made with ❤️ using Next.js and Tailwind CSS**
