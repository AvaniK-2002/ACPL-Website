import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";

import bgImage from "../assets/images/bg.jpeg";

function StrategyPlanning() {
  const services = [
    {
      number: "01",
      title: "Cloud-Based Accessibility:",
      description:
        "Always accessible from anywhere, anytime.Always accessible from anywhere, anytime.",
      isActive: true,
    },
    {
      number: "02",
      title: "Cross-Platform Compatibility",
      description: "Works seamlessly across Web, Mobile, and Desktop.",
      isActive: false,
    },
    {
      number: "03",
      title: "Flexible Subscription Models",
      description: "Scalable plans designed to fit every business size.",
      isActive: false,
    },
    {
      number: "04",
      title: "Security & Performance",
      description: "Reliable, secure, and optimized for high performance.",
      isActive: false,
    },
  ];

  const images = [
    {
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Business meeting and strategy planning",
      caption: "Strategic Planning Session",
    },
    {
      src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Team collaboration",
      caption: "Team Collaboration",
    },
    {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Business analysis",
      caption: "Data Analysis",
    },
    {
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Innovation workshop",
      caption: "Innovation Workshop",
    },
    {
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Executive meeting",
      caption: "Executive Meeting",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white py-16"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <div className="mb-6 text-white">
            <Breadcrumb
              items={[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
              ]}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SaSS Products</h1>
          <p className="text-lg md:text-xl opacity-90">
            Scalable SaSS Platforms Built for the Future.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Large Animated Photo Album */}
          <div className="relative h-[500px] w-full">
            {images.map((image, index) => {
              const isActive = index === current;
              const randomRotation = (index % 2 === 0 ? 4 : -4) * (index + 1);

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ zIndex: isActive ? 20 : 10 }}
                  initial={{ opacity: 0, scale: 0.95, rotate: randomRotation }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.98,
                    rotate: isActive ? 0 : randomRotation,
                    y: isActive ? 0 : 30,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center text-sm py-2">
                      {image.caption}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Services */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="flex gap-6 group">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      service.isActive
                        ? "bg-gray-400 group-hover:bg-blue-500"
                        : "bg-gray-400 group-hover:bg-blue-500"
                    }`}
                  >
                    <ArrowDownRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-2xl font-bold transition-colors duration-300 ${
                        service.isActive
                          ? "text-gray-400 group-hover:text-blue-500"
                          : "text-gray-400 group-hover:text-blue-500"
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Start Your Free Trial Today
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default StrategyPlanning;
