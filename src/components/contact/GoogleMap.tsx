import { useState } from 'react';
import { motion } from 'framer-motion';

interface GoogleMapProps {
  address?: string;
  className?: string;
}

const GoogleMap = ({
  address = "Near SNBP School, Pimple Saudagar, Pune MH - 411017, IN",
  className = ""
}: GoogleMapProps) => {
  const [mapError, setMapError] = useState(false);

  // ACPL's office coordinates (approximate location in Pimple Saudagar, Pune)
  const latitude = 18.6298;
  const longitude = 73.7997;

  // Google Maps embed URL
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547963194!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPimple%20Saudagar%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin`;

  const handleMapError = () => {
    setMapError(true);
  };

  // Fallback component when map fails to load
  const MapFallback = () => (
    <motion.div
      className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center p-8">
        <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-primary"
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
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Visit Our Office</h3>
        <p className="text-gray-600 mb-4">{address}</p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Open in Google Maps
        </a>
      </div>
    </motion.div>
  );

  if (mapError) {
    return <MapFallback />;
  }

  return (
    <div className={`relative w-full h-full rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ACPL Office Location - Pimple Saudagar, Pune"
        onError={handleMapError}
        className="opacity-100"
      />
    </div>
  );
};

export default GoogleMap;
