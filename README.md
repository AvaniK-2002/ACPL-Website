# ACPL Website - Ajinkya Creatiion Private Limited

A modern, responsive website for Ajinkya Creatiion Private Limited (ACPL), built with React, TypeScript, and Vite. The website showcases ACPL's e-learning solutions, video content creation, and consulting services.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, TailwindCSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Components**: Framer Motion animations and interactive elements
- **SEO Optimized**: React Helmet for meta tags and search engine optimization
- **Form Handling**: Hostinger PHP form processing for contact submissions
- **3D Elements**: Google Model Viewer integration for immersive experiences
- **Performance Optimized**: Lazy loading, optimized images, and efficient bundling

## 🏢 About ACPL

Ajinkya Creatiion Private Limited specializes in:

- **E-Learning Solutions**: Interactive courses and educational content
- **Video Content Creation**: Professional video production for training
- **Corporate Training**: Customized learning and development programs
- **AR/VR Experiences**: Immersive training and educational content
- **SaaS Applications**: Cloud-based learning management systems
- **Greenfield Projects**: New system development from scratch

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: TailwindCSS, Custom CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **SEO**: React Helmet Async
- **3D/AR**: Google Model Viewer, Three.js
- **Form Handling**: PHP (Hostinger)
- **Build Tool**: Vite
- **Linting**: ESLint, TypeScript ESLint

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd acpl-new-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

## 🔧 Configuration

### Form Handling Setup

1. **Configure Hostinger form handler**

   ```bash
   node setup-hostinger.js
   ```

2. **Upload PHP form handler**
   - Upload `public/contact-form-handler.php` to your hosting
   - Set proper file permissions (644 or 755)

3. **Update configuration**
   - Edit `src/config/hostinger.config.ts`
   - Set your email addresses and form handler URL

### Environment Setup

- Ensure ACPL.png is in the public folder for favicon
- Update contact information in components
- Configure Google Maps integration

## 📁 Project Structure

src/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer, Layout
│   ├── ui/             # Buttons, Cards, Animations
│   ├── hero/           # Interactive hero section
│   └── contact/        # Contact form and map
├── pages/              # Main pages
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   └── Contact.tsx     # Contact page
├── assets/             # Images and static assets
├── config/             # Configuration files
└── utils/              # Utility functions

## 🎨 Customization

### Colors & Branding

- Primary: `#3B82F6` (Blue)
- Secondary: `#10B981` (Green)
- Update in `tailwind.config.js`

### Content Updates

- Team member information: `src/pages/About.tsx`
- Service offerings: `src/pages/Services.tsx`
- Company information: `src/components/layout/Footer.tsx`

## 🚀 Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Upload to Hostinger**
   - Upload `dist/` folder contents to public_html
   - Upload `contact-form-handler.php` to public_html
   - Ensure proper file permissions

3. **Configure DNS and SSL**
   - Point domain to hosting
   - Enable SSL certificate

## 📱 Social Media

- **YouTube**: <https://www.youtube.com/@kontentcreate>
- **LinkedIn**: <https://www.linkedin.com/company/ajinkya-creatiion-private-limited/>

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 Ajinkya Creatiion Private Limited. All rights reserved.

## 📞 Support

For technical support or questions:

- Email: <contact@ajinkyacreatiion.com>
- Website: [ajinkyacreatiion.com](https://ajinkyacreatiion.com)

---

Built with ❤️ by the ACPL development team
