import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const Layout = ({
  children,
  title = 'Ajinkya Creatiion - E-Learning Solutions & Training',
  description = 'Transform your learning with Ajinkya Creatiion\'s innovative e-learning solutions, interactive video content, AR/VR training, and corporate development programs.',
  keywords = 'e-learning solutions, video content creation, SCORM compliant, corporate training, AR VR training, SaaS applications, greenfield projects, interactive courses, learning management system, educational technology, Ajinkya Creatiion, ACPL',
  ogImage = 'https://ajinkyacreatiion.com/ACPL.webp',
  ogType = 'website',
  canonicalUrl,
  structuredData,
}: LayoutProps) => {
  // Safely get current URL for canonical and OG tags with proper domain handling
  const getCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      const baseUrl = canonicalUrl || `https://ajinkyacreatiion.com${window.location.pathname}`;
      // Normalize to preferred domain (non-www)
      return baseUrl.replace(/^https?:\/\/www\./, 'https://');
    }
    const baseUrl = canonicalUrl || 'https://ajinkyacreatiion.com';
    // Normalize to preferred domain (non-www)
    return baseUrl.replace(/^https?:\/\/www\./, 'https://');
  };

  const currentUrl = getCurrentUrl();
  const fullTitle = title.includes('Ajinkya Creatiion') ? title : `${title} | Ajinkya Creatiion`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ajinkya Creatiion Private Limited",
    "alternateName": "ACPL",
    "url": "https://ajinkyacreatiion.com",
    "logo": "https://ajinkyacreatiion.com/ACPL.png",
    "description": "Leading provider of e-learning solutions, video content creation, corporate training, and AR/VR experiences",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near SNBP School, Pimple Saudagar",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411017",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9130506044",
      "contactType": "customer service",
      "email": "contact@ajinkyacreatiion.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ajinkya-creatiion-private-limited/",
      "https://www.youtube.com/@kontentcreate"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Ajinkya Creatiion Private Limited" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ajinkya Creatiion Private Limited - E-Learning Solutions" />
        <meta property="og:site_name" content="Ajinkya Creatiion" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Ajinkya Creatiion Private Limited - E-Learning Solutions" />
        <meta name="twitter:creator" content="@kontentcreate" />
        <meta name="twitter:site" content="@kontentcreate" />

        {/* Comprehensive Favicon Support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />

        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="36x36" href="/android-chrome-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/android-chrome-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/android-chrome-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/android-chrome-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/android-chrome-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/android-chrome-256x256.png" />
        <link rel="icon" type="image/png" sizes="384x384" href="/android-chrome-384x384.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3B82F6" />

        {/* Windows Tiles */}
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/mstile-310x310.png" />
        <meta name="msapplication-config" content="none" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Hrishikesh Mohite" />
        <meta name="google-site-verification" content="KqfQPphIOIR4s0697xFPN9MsfBtnu0BaaUP8I6hbGrg" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-navbutton-color" content="#3B82F6" />

        {/* Fallback favicon (WebP optimized) */}
        <link rel="shortcut icon" href="/ACPL.webp" type="image/webp" />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />

        {/* Business Meta Tags */}
        <meta name="classification" content="Business" />
        <meta name="category" content="Education Technology, E-Learning, Training Solutions" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Prevent PWA Installation - Additional Meta Tags */}
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="apple-touch-fullscreen" content="no" />
        <meta name="application-name" content="ACPL Website" />
        <meta name="apple-mobile-web-app-title" content="ACPL Website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
