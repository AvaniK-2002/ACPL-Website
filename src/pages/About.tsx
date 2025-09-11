import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import ajinkyaPhoto from '../assets/images/Ajinkya-Deshmukh.webp';
import hrishikeshPhoto from '../assets/images/Hrishikesh-Mohite.webp';
import ruturajPhoto from '../assets/images/Ruturaj-Kale.webp';
import bgImage from "../assets/images/bg.jpeg";


const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ajinkya D. Deshmukh',
      position: 'Founder, Director & CEO',
      image: ajinkyaPhoto,
      bio: 'Visionary leader with expertise in e-learning and video content creation. Leads the KontentCreate division and oversees strategic direction.',
      social: {
        linkedin: 'https://www.linkedin.com/in/ajinkya-deshmukh-980b305a/',
        instagram: 'https://www.instagram.com/ajinkyawork/'
      }
    },
    {
      id: 2,
      name: 'Hrishikesh D. Mohite',
      position: 'Founder, Director & COO',
      image: hrishikeshPhoto,
      bio: 'Operations expert who ensures seamless delivery of all projects. Manages client relationships and oversees day-to-day operations.',
      social: {
        linkedin: 'https://www.linkedin.com/in/hrishikeshmohite',
        instagram: 'https://www.instagram.com/hrishikesh_mohite_/',
        twitter: 'https://x.com/Hrishikesh0912',
        website: 'https://www.hrishikeshmohite.com'
      }
    },
    {
      id: 3,
      name: 'Ruturaj Y. Kale',
      position: 'Co-Founder, Director & CFO',
      image: ruturajPhoto,
      bio: 'Financial strategist who manages the company\'s finances and ensures sustainable growth. Oversees investment and resource allocation.',
      social: {}
    }
  ];

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Ajinkya Creatiion Private Limited",
        "alternateName": "ACPL",
        "url": "https://ajinkyacreatiion.com",
        "logo": "https://ajinkyacreatiion.com/ACPL.png",
        "description": "Founded in 2023, Ajinkya Creatiion Private Limited bridges the gap between quantity and quality in education and professional training through innovative e-learning solutions",
        "foundingDate": "2023",
        "founder": [
          {
            "@type": "Person",
            "name": "Ajinkya D. Deshmukh",
            "jobTitle": "Founder, Director & CEO",
            "description": "Visionary leader with expertise in e-learning and video content creation"
          },
          {
            "@type": "Person",
            "name": "Hrishikesh D. Mohite",
            "jobTitle": "Founder, Director & COO",
            "description": "Operations expert specializing in technology solutions and business development"
          },
          {
            "@type": "Person",
            "name": "Ruturaj Y. Kale",
            "jobTitle": "Co-Founder, Director & CFO",
            "description": "Financial strategist and business operations specialist"
          }
        ],
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
        "knowsAbout": [
          "E-Learning Solutions",
          "Video Content Creation",
          "Corporate Training",
          "AR/VR Training",
          "Interactive Courses",
          "Educational Technology"
        ]
      },
      {
        "@type": "AboutPage",
        "name": "About Ajinkya Creatiion",
        "description": "Learn about our mission, vision, team, and journey in revolutionizing education and professional training",
        "mainEntity": {
          "@type": "Organization",
          "name": "Ajinkya Creatiion Private Limited"
        }
      }
    ]
  };

  return (
    <Layout
      title="About Us - Ajinkya Creatiion Team & Company Story"
      description="Meet the founders and team behind Ajinkya Creatiion Private Limited. Founded in 2023, we revolutionize education through innovative e-learning solutions, video content creation, and AR/VR training experiences. Learn our story and mission."
      keywords="about Ajinkya Creatiion, company story, founders, team, Ajinkya Deshmukh, Hrishikesh Mohite, Ruturaj Kale, e-learning company, educational technology, corporate training, ACPL history"
      canonicalUrl="https://ajinkyacreatiion.com/about"
      structuredData={aboutStructuredData}
    >
      {/* Hero Section */}
      <section
  className="relative min-h-[200px] pt-6 pb-20 text-white bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>

  <div className="absolute inset-0" />
  <div className="relative container">
    <Breadcrumb className="text-white/90" />
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="mb-6 text-4xl font-bold md:text-5xl">About US</h1>
      <p className="text-xl">Your Partner in AI-Driven Digital Transformation</p>
    </div>
  </div>
</section>

      {/* Our Story Section */}
      <Section>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <SectionTitle
              title="Our Story"
              subtitle="How Ajinkya Creatiion came to be"
            />
            <p className="mb-4 text-gray-600">
              Ajinkya Creatiion Pvt. Ltd. is committed to helping businesses evolve through 
              innovative technology, scalable SaaS products, and intelligent AI-driven platforms.
               We simplify complex processes, empower teams, and drive measurable growth across industries.


            </p>
          </div>
          <div className="space-y-4">
            {/* Journey Timeline with Images */}
            <div className="grid grid-cols-2 gap-4 h-80">
              {/* Foundation Image */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center"
                  alt="Team collaboration and brainstorming session representing the foundation of Ajinkya Creatiion in 2023"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="text-sm font-semibold">2023 - Foundation</h4>
                    <p className="text-xs opacity-90">Vision to Reality</p>
                  </div>
                </div>
              </div>

              {/* Innovation Image */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/6200b0dddcf32d3be937fa84/The-5-Technologies-That-Will-Change-The-Future-Of-The-Human-Race/960x0.jpg?height=399&width=711&fit=bounds"
                  alt="Modern technology and innovation in e-learning development showcasing ACPL's technological advancement"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="text-sm font-semibold">Innovation</h4>
                    <p className="text-xs opacity-90">Technology Integration</p>
                  </div>
                </div>
              </div>

              {/* Growth Image */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D12AQEaTxXUq77Vrg/article-cover_image-shrink_720_1280/B4DZinmUCvH4AI-/0/1755158496321?e=2147483647&v=beta&t=gV0QW0DNH0UDFU9-wvivn2keS-Ru8o2Xn9qbt-UdX_Q"
                  alt="Professional training and corporate learning environment demonstrating ACPL's growth in the industry"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="text-sm font-semibold">Growth</h4>
                    <p className="text-xs opacity-90">Industry Recognition</p>
                  </div>
                </div>
              </div>

              {/* Future Image */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="https://www.shutterstock.com/image-photo/robot-hand-on-virtual-screen-600nw-2411813921.jpg"
                  alt="Artificial intelligence and machine learning technology representing the future of digital education and innovation at ACPL"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="text-sm font-semibold">Future</h4>
                    <p className="text-xs opacity-90">AI & Digital Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision Section */}
      <Section bgColor="light">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mission */}
          <Card className="overflow-hidden">
            {/* Mission Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center"
                alt="Professional video production and e-learning content creation representing ACPL's mission to bridge quality gaps in education"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
            </div>
            <div className="p-8">
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="text-gray-600">
                To deliver technology-first solutions that empower businesses to thrive in 
                the digital era.
              </p>
            </div>
          </Card>

          {/* Vision */}
          <Card className="overflow-hidden">
            {/* Vision Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
                alt="Global digital network and futuristic technology representing ACPL's vision for revolutionizing education worldwide"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
            </div>
            <div className="p-8">
              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted partner for AI, SaaS, and eLearning innovations globally.
Core Values: Innovation, Integrity, Scalability, and Customer Success.

              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        {/* Values Hero Image */}
        <div className="relative h-64 rounded-lg overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop&crop=center"
            alt="Professional team collaboration and core values in action at ACPL workplace environment"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
              <p className="text-lg opacity-90">The principles that guide our work and relationships</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Quality */}
          <div className="p-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
            <p className="text-gray-600">
              We are committed to delivering high-quality learning solutions that exceed
              expectations and create meaningful impact for learners and organizations.
            </p>
          </div>

          {/* Innovation */}
          <div className="p-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
            <p className="text-gray-600">
              We continuously explore new technologies and methodologies to create cutting-edge
              learning experiences that transform traditional education and training.
            </p>
          </div>

          {/* Integrity */}
          <div className="p-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
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
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
            <p className="text-gray-600">
              We uphold the highest ethical standards in all our interactions, ensuring
              transparency, honesty, and accountability in everything we do.
            </p>
          </div>

          {/* Client Focus */}
          <div className="p-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Learner-Centric</h3>
            <p className="text-gray-600">
              We place the learner at the center of everything we do, designing solutions
              that are engaging, accessible, and effective for diverse learning needs.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section bgColor="light">
        <SectionTitle
          title="Meet Our Leadership"
          subtitle="The visionary founders behind Ajinkya Creatiion"
          centered
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.id} hoverable className="overflow-hidden text-center">
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.position} at Ajinkya Creatiion, leading e-learning and training solutions`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="mb-4 text-sm text-primary">{member.position}</p>
                <p className="mb-4 text-gray-600">{member.bio}</p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mt-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  )}

                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Instagram profile`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  )}

                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  )}

                  {member.social.website && (
                    <a
                      href={member.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s personal website`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default About;
