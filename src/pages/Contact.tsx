import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/animations';
import GoogleMap from '../components/contact/GoogleMap';
import Breadcrumb from '../components/ui/Breadcrumb';
import bgImage from '../assets/images/bg.jpeg'

const Contact = () => {

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  // Form validation state
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  // Form status state
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: '',
  });

  // Form touched state
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    company: false,
    message: false,
  });

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else {
      newErrors.name = '';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }

    // Validate phone (optional)
    if (formData.phone.trim() && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    } else {
      newErrors.phone = '';
    }

    // Validate subject
    if (!formData.company) {
      newErrors.company = 'Please select a subject';
      valid = false;
    } else {
      newErrors.company = '';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    } else {
      newErrors.message = '';
    }

    setFormErrors(newErrors);
    return valid;
  };

  // Handle blur event
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // If field has been touched, validate on change
    if (touched[name as keyof typeof touched]) {
      const newErrors = { ...formErrors };

      // Simple validation on change
      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          newErrors.email = '';
        }
      } else if (name === 'name') {
        newErrors.name = !value.trim() ? 'Name is required' : '';
      } else if (name === 'phone') {
        if (value.trim() && !/^\+?[0-9\s\-()]{8,20}$/.test(value)) {
          newErrors.phone = 'Please enter a valid phone number';
        } else {
          newErrors.phone = '';
        }
      } else if (name === 'subject') {
        newErrors.company = !value ? 'Please select a subject' : '';
      } else if (name === 'message') {
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters';
        } else {
          newErrors.message = '';
        }
      }

      setFormErrors(newErrors);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(touched).reduce((acc, key) => {
      return { ...acc, [key]: true };
    }, {});
    setTouched(allTouched as typeof touched);

    // Validate form
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: '',
    });

    try {
      // Import the form service dynamically to avoid issues
      const { sendContactForm } = await import('../utils/emailService');

      // Submit form using the form service
      const result = await sendContactForm(formData);

      if (result.success) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: result.message,
        });
      } else {
        throw new Error(result.message);
      }

      // Reset form data and states
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      setFormErrors({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      setTouched({
        name: false,
        email: false,
        phone: false,
        company: false,
        message: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);

      // Determine specific error message
      let errorMessage = 'There was an error sending your message. Please try again later.';

      if (error instanceof Error) {
        if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = 'Network error. Please check your internet connection and try again.';
        } else if (error.message.includes('HTTP error! status: 404')) {
          errorMessage = 'Form handler not found. Please contact us directly at contact@ajinkyacreatiion.com';
        } else if (error.message.includes('HTTP error! status: 500')) {
          errorMessage = 'Server error. Please try again later or contact us directly.';
        }
      }

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: errorMessage,
      });
    }
  };

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Ajinkya Creatiion Private Limited",
        "alternateName": "ACPL",
        "url": "https://ajinkyacreatiion.com",
        "logo": "https://ajinkyacreatiion.com/ACPL.png",
        "description": "Leading provider of e-learning solutions, video content creation, corporate training, and AR/VR experiences",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near SNBP School, Pimple Saudagar",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411017",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9130506044",
            "contactType": "customer service",
            "email": "contact@ajinkyacreatiion.com",
            "availableLanguage": "English",
            "areaServed": "IN"
          },
          {
            "@type": "ContactPoint",
            "email": "ajinkya.d@ajinkyacreatiion.com",
            "contactType": "sales",
            "availableLanguage": "English",
            "areaServed": "IN"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/ajinkya-creatiion-private-limited/",
          "https://www.youtube.com/@kontentcreate"
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5204",
          "longitude": "73.8567"
        }
      },
      {
        "@type": "ContactPage",
        "name": "Contact Ajinkya Creatiion",
        "description": "Get in touch with our team for e-learning solutions, corporate training, and educational technology services",
        "mainEntity": {
          "@type": "Organization",
          "name": "Ajinkya Creatiion Private Limited"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Ajinkya Creatiion Private Limited",
        "image": "https://ajinkyacreatiion.com/ACPL.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near SNBP School, Pimple Saudagar",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411017",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5204",
          "longitude": "73.8567"
        },
        "telephone": "+91-9130506044",
        "email": "contact@ajinkyacreatiion.com",
        "url": "https://ajinkyacreatiion.com",
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "$$"
      }
    ]
  };

  return (
    <Layout
      title="Contact Us - Get E-Learning Solutions | Ajinkya Creatiion"
      description="Contact Ajinkya Creatiion for innovative e-learning solutions, video content creation, corporate training, and AR/VR experiences. Located in Pune, Maharashtra. Call +91-9130506044 or email contact@ajinkyacreatiion.com"
      keywords="contact Ajinkya Creatiion, e-learning solutions contact, corporate training inquiry, video content creation contact, AR VR training contact, Pune educational technology, ACPL contact, get quote e-learning"
      canonicalUrl="https://ajinkyacreatiion.com/contact"
      structuredData={contactStructuredData}
    >
      {/* Hero Section */}
      <section
  className="relative min-h-[200px] pt-6 pb-20 text-white bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})`}}
>
  <div className="absolute inset-0 " />
  <div className="relative container">
    <Breadcrumb className="text-white/90" />
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
      <p className="text-xl"></p>
    </div>
  </div>
</section>

      {/* Contact Form Section */}
      <Section>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <FadeIn direction="left">
            <div>
              <SectionTitle
                title="Get In Touch"
                subtitle="Fill out the form and we'll get back to you as soon as possible"
              />

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      touched.name && formErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.name && formErrors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {formErrors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      touched.email && formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.email && formErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {formErrors.email}
                    </motion.p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      touched.phone && formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.phone && formErrors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {formErrors.phone}
                    </motion.p>
                  )}
                </div>

                {/* Subject */}
                <div>
  <label
    htmlFor="company"
    className="block mb-2 text-sm font-medium text-gray-700"
  >
    Company *
  </label>
  <input
    type="text"
    id="company"
    name="company"
    value={formData.company}
    onChange={handleChange}
    onBlur={handleBlur}
    required
    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
      touched.company && formErrors.company ? 'border-red-500' : 'border-gray-300'
    }`}
  />
  {touched.company && formErrors.company && (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1 text-sm text-red-500"
    >
      {formErrors.company}
    </motion.p>
  )}
</div>


                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      touched.message && formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {touched.message && formErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {formErrors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
  <motion.div
    whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
    whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
  >
    <Button
      type="submit"
      fullWidth
      disabled={formStatus.isSubmitting}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
    >
      {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
    </Button>
  </motion.div>
</div>


                {/* Form Status Message */}
                {formStatus.isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-md ${
                      formStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Contact Information */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <SectionTitle
                title="Contact Information"
                subtitle="Here's how you can reach us"
              />

              <StaggerContainer className="space-y-6">
                {/* Address */}
                <StaggerItem>
                  <motion.div
                    className="flex"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Our Office</h3>
                      <p className="mt-1 text-gray-600">
                        Aundh, Pune
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>

                {/* Email */}
                <StaggerItem>
                  <motion.div
                    className="flex"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="mt-1 text-gray-600">
                        <a
                          href="mailto:contact@ajinkyacreatiion.com"
                          className="text-primary hover:underline"
                        >
                          contact@ajinkyacreatiion.com
                        </a>
                        <br />
                        <a
                          href="mailto:ajinkya.d@ajinkyacreatiion.com"
                          className="text-primary hover:underline"
                        >
                          ajinkya.d@ajinkyacreatiion.com
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>

                {/* Phone */}
                <StaggerItem>
                  <motion.div
                    className="flex"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Phone</h3>
                      <p className="mt-1 text-gray-600">
                        <a
                          href="tel:+919960041473"
                          className="text-primary hover:underline"
                        >
                          +91 99600 41473
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>

                {/* Business Hours */}
                <StaggerItem>
                  <motion.div
                    className="flex"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Business Hours</h3>
                      <p className="mt-1 text-gray-600">
                        Monday - Friday: 10:00 AM - 7:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>


              </StaggerContainer>


            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Google Maps Section */}
      <Section bgColor="light">
        <FadeIn>
          <SectionTitle
            title="Visit Our Office"
            subtitle="Find us easily with our interactive map"
            centered
          />
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="h-96 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GoogleMap
              address="Near SNBP School, Pimple Saudagar, Pune MH - 411017, IN"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bgColor="light">
        <FadeIn>
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about contacting us"
            centered
          />
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <StaggerContainer className="space-y-6">
            {/* FAQ Item 1 */}
            <StaggerItem>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="mb-2 text-xl font-semibold">
                  How quickly will you respond to my inquiry?
                </h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24-48 business
                  hours. For urgent matters, please call us directly.
                </p>
              </motion.div>
            </StaggerItem>

            {/* FAQ Item 2 */}
            <StaggerItem>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="mb-2 text-xl font-semibold">
                  Do you offer free consultations?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer free initial consultations to discuss your project
                  requirements and provide preliminary recommendations.
                </p>
              </motion.div>
            </StaggerItem>

            {/* FAQ Item 3 */}
            <StaggerItem>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="mb-2 text-xl font-semibold">
                  Can we meet in person to discuss our project?
                </h3>
                <p className="text-gray-600">
                  Yes, we welcome in-person meetings at our office. Please
                  schedule an appointment in advance so we can ensure the
                  appropriate team members are available.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;

