import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/animations';
import InteractiveHero from '../components/hero/InteractiveHero';
import kontentCreateLogo from '../assets/images/KontentCreate.webp';
import acplLogo from '../assets/images/ACPL.webp';
import venusLogo from '../assets/images/Venus.webp';
import viraLogo from '../assets/images/VIRA.webp';

// Counter component for animated statistics
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Home = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Ajinkya Creatiion Private Limited",
        "alternateName": "ACPL",
        "url": "https://ajinkyacreatiion.com",
        "logo": "https://ajinkyacreatiion.com/ACPL.webp",
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
        ]
      },
      {
        "@type": "WebSite",
        "name": "Ajinkya Creatiion",
        "url": "https://ajinkyacreatiion.com",
        "description": "Transform your learning experience with innovative e-learning solutions, interactive video content, and immersive AR/VR training",
        "publisher": {
          "@type": "Organization",
          "name": "Ajinkya Creatiion Private Limited"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ajinkyacreatiion.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "name": "E-Learning Solutions",
        "provider": {
          "@type": "Organization",
          "name": "Ajinkya Creatiion Private Limited"
        },
        "serviceType": "Educational Technology",
        "description": "Comprehensive e-learning solutions including interactive courses, video content creation, and corporate training programs"
      }
    ]
  };

  return (
    <Layout
      title="Ajinkya Creatiion - E-Learning Solutions & Corporate Training"
      description="Transform your learning experience with Ajinkya Creatiion's innovative e-learning solutions, interactive video content, AR/VR training, and corporate development programs. Founded in 2023, we bridge the gap between quality and quantity in education."
      keywords="e-learning solutions, corporate training, video content creation, interactive courses, AR VR training, SCORM compliant, learning management system, educational technology, Ajinkya Creatiion, ACPL, KontentCreate, VENUS, VIRA"
      canonicalUrl="https://ajinkyacreatiion.com/"
      structuredData={homeStructuredData}
    >
      {/* Interactive Hero Section */}
      <InteractiveHero />

     {/* Services Section */}
<Section bgColor="light">
  <FadeIn>
    <SectionTitle
      title="Our Services"
      subtitle="We offer comprehensive e-learning solutions, video content, website development, and custom software solutions to enhance your training and business operations"
      centered
    />
  </FadeIn>

  <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
    {/* Website Development */}
    <StaggerItem>
      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card hoverable className="p-6 h-full flex flex-col justify-between">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold">Technology & AI Solutions</h3>
          <p className="mb-4 text-gray-600">
            Automate, optimize, and innovate with artificial intelligence and next-generation technology.
          </p>
        </Card>
      </motion.div>
    </StaggerItem>

    {/* Software Development */}
    <StaggerItem>
      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card hoverable className="p-6 h-full flex flex-col justify-between">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold">eLearning Development</h3>
          <p className="mb-4 text-gray-600">
            Deliver engaging, scalable, and interactive learning experiences.
          </p>
        </Card>
      </motion.div>
    </StaggerItem>

    {/* Graphic Design */}
    <StaggerItem>
      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card hoverable className="p-6 h-full flex flex-col justify-between">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold">Creative & Design Services</h3>
          <p className="mb-4 text-gray-600">
            Visual storytelling that enhances brand impact.
          </p>
        </Card>
      </motion.div>
    </StaggerItem>

    {/* Video Editing */}
    <StaggerItem>
      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card hoverable className="p-6 h-full flex flex-col justify-between">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold">Digital Transformation</h3>
          <p className="mb-4 text-gray-600">
            Seamless integration and migration for modern enterprises.
          </p>
        </Card>
      </motion.div>
    </StaggerItem>
  </StaggerContainer>
</Section>


      {/* About Section */}
      <Section>
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 items-center min-h-[500px]">
          <FadeIn direction="left">
            <div className="flex flex-col justify-center h-full">
              <SectionTitle
                title="About Ajinkya Creatiion"
                subtitle="We bridge the gap between quantity and quality in education and professional training."
              />
              <p className="mb-6 text-gray-600 leading-relaxed">
                Founded in 2023, Ajinkya Creatiion Private Limited is dedicated to revolutionizing
                education and training by creating interactive courses that empower schools, colleges,
                businesses, and industries with high-quality, engaging learning experiences.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Our mission is to leverage current technologies and deliver innovative services
                in the form of tailor-made interactive video courses that make learning accessible
                and effective for everyone.
              </p>
              <p className="mb-8 text-gray-600 leading-relaxed">
                With our specialized divisions - KontentCreate, ACPL, VENUS, and VIRA - we provide
                comprehensive solutions spanning e-learning, corporate training, consulting services,
                AR/VR experiences, and cutting-edge technology development including website and software solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link to="/about">
                  <Button variant="primary">Learn More About Us</Button>
                </Link>
              </motion.div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.3}>
            <div className="flex items-center justify-center h-full">
              <motion.div
                className="w-full min-h-[400px] md:min-h-[450px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden p-6 md:p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-full flex flex-col justify-between">
                  {/* Header Section */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Company at a Glance</h3>
                    <p className="text-gray-600 text-sm">Driving innovation in education and technology</p>
                  </motion.div>

                  {/* Company Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
                    {/* Founded Year */}
                    <motion.div
                      className="text-center p-3 bg-white/50 rounded-lg backdrop-blur-sm"
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-primary">
                        <AnimatedCounter end={2023} duration={1.5} />
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Founded</p>
                    </motion.div>

                    {/* Divisions Count */}
                    <motion.div
                      className="text-center p-3 bg-white/50 rounded-lg backdrop-blur-sm"
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 bg-secondary/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-secondary">
                        <AnimatedCounter end={4} duration={1} />
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Divisions</p>
                    </motion.div>

                    {/* Services Count */}
                    <motion.div
                      className="text-center p-3 bg-white/50 rounded-lg backdrop-blur-sm"
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 01 3.138-3.138z" />
                        </svg>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-primary">
                        <AnimatedCounter end={6} duration={1} suffix="+" />
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Services</p>
                    </motion.div>

                    {/* Innovation Focus */}
                    <motion.div
                      className="text-center p-3 bg-white/50 rounded-lg backdrop-blur-sm"
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 bg-secondary/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-secondary">
                        <AnimatedCounter end={100} duration={2} suffix="%" />
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Innovation</p>
                    </motion.div>
                  </div>

                  {/* Company Mission */}
                  <motion.div
                    className="text-center p-4 bg-white/30 rounded-lg backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Bridging Quality & Innovation</h3>
                    <p className="text-gray-600 text-sm md:text-base">Transforming education through technology and creative learning solutions</p>

                    {/* Key Values */}
                    <div className="flex justify-center items-center mt-3 space-x-4 text-xs md:text-sm">
                      <span className="px-2 py-1 bg-primary/20 text-primary rounded-full font-medium">Excellence</span>
                      <span className="px-2 py-1 bg-secondary/20 text-secondary rounded-full font-medium">Innovation</span>
                      <span className="px-2 py-1 bg-primary/20 text-primary rounded-full font-medium">Quality</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section bgColor="light">
        <FadeIn>
          <SectionTitle
            title="Our Divisions"
            subtitle="Specialized teams delivering excellence in different areas"
            centered
          />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Division 1 - KontentCreate */}
          <StaggerItem>
            <Card className="overflow-hidden">
              {/* Division Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={kontentCreateLogo}
                  alt="KontentCreate division logo representing ACPL's video content creation and interactive e-learning solutions for corporate training"
                  className="w-full h-full object-contain bg-gradient-to-br from-primary/10 to-primary/5 p-4"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold">KontentCreate</h4>
                  <p className="text-sm text-gray-500">Video Content Creation</p>
                </div>
                <p className="text-gray-600">
                  Specializing in high-quality video content creation services, including interactive
                  e-learning videos, microlearnings, compliance training, and SCORM-compliant courses.
                  Our team ensures quick project delivery with exceptional quality.
                </p>
              </div>
            </Card>
          </StaggerItem>

          {/* Division 2 - ACPL */}
          <StaggerItem>
            <Card className="overflow-hidden">
              {/* Division Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={acplLogo}
                  alt="ACPL main division logo representing Ajinkya Creatiion's consulting and technology services for learning and development solutions"
                  className="w-full h-full object-contain bg-gradient-to-br from-secondary/10 to-secondary/5 p-4"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold">ACPL</h4>
                  <p className="text-sm text-gray-500">Consulting & Technology Services</p>
                </div>
                <p className="text-gray-600">
                  Our core division provides comprehensive learning and development consulting alongside
                  cutting-edge technology services. From training design and implementation to website
                  development and custom software solutions, ACPL delivers end-to-end business solutions.
                </p>
              </div>
            </Card>
          </StaggerItem>

          {/* Division 3 - VENUS */}
          <StaggerItem>
            <Card className="overflow-hidden">
              {/* Division Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={venusLogo}
                  alt="VENUS division logo representing ACPL's learning applications and SCORM authoring tools with AI support for e-learning platforms"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold">VENUS</h4>
                  <p className="text-sm text-gray-500">Learning Applications</p>
                </div>
                <p className="text-gray-600">
                  Our technology division develops subscription-based learning applications,
                  including SCORM authoring tools with AI support, blended conferencing systems,
                  and specialized training platforms. We make content creation and delivery simple.
                </p>
              </div>
            </Card>
          </StaggerItem>

          {/* Division 4 - VIRA */}
          <StaggerItem>
            <Card className="overflow-hidden">
              {/* Division Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={viraLogo}
                  alt="VIRA division logo representing ACPL's Augmented Reality, Virtual Reality and immersive content creation for training simulations"
                  className="w-full h-full object-contain bg-gradient-to-br from-secondary/10 to-secondary/5 p-4"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold">VIRA</h4>
                  <p className="text-sm text-gray-500">AR/VR & Immersive Content</p>
                </div>
                <p className="text-gray-600">
                  Our immersive technology division specializes in Augmented Reality (AR), Virtual Reality (VR),
                  and 360° content creation. VIRA delivers cutting-edge training simulations, virtual labs,
                  and real-life scenario experiences for enhanced learning outcomes.
                </p>
              </div>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Featured Work Section */}
      <Section>
        <FadeIn>
          <SectionTitle
            title="Our Approach"
            subtitle="How we deliver exceptional learning experiences"
            centered
          />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Approach Step 1 */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center"
                    alt="ACPL team conducting professional business consultation for learning needs assessment and e-learning project requirements"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      1
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Needs Assessment</h3>
                  <p className="mb-4 text-gray-600">
                    We begin by understanding your specific learning needs, audience, and objectives
                    through detailed consultations and research.
                  </p>
                  <Link to="/services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </StaggerItem>

          {/* Approach Step 2 */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center"
                    alt="Creative content development process showing video production, design work, and interactive e-learning content creation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      2
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Content Development</h3>
                  <p className="mb-4 text-gray-600">
                    Our expert team creates engaging, interactive content tailored to your specific
                    requirements, incorporating the latest learning methodologies.
                  </p>
                  <Link to="/services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </StaggerItem>

          {/* Approach Step 3 */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
                    alt="ACPL training implementation and ongoing support with professional team delivering learning solutions"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      3
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Implementation & Support</h3>
                  <p className="mb-4 text-gray-600">
                    We deliver the final solution and provide ongoing support to ensure successful
                    implementation and adoption across your organization.
                  </p>
                  <Link to="/services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button variant="primary">Explore Our Services</Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="primary">
        <FadeIn>
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contact us today to discuss your training needs and discover how our innovative
              solutions can help your organization thrive.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Contact Us Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </Section>
    </Layout>
  );
};

export default Home;

