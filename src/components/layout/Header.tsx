// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import logoImage from '../../assets/images/ACPL.webp';
// import { ArrowRight, ChevronDown } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMenuOpen(false);
//     setIsServicesOpen(false);
//   }, [location]);

//   return (
//     <motion.header
//       className={`sticky top-0 z-50 w-full bg-white ${scrolled ? 'shadow-md' : ''}`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//     >
//       <div className="container flex items-center justify-between py-4 relative">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link to="/" className="flex items-center space-x-2">
//             <img src={logoImage} alt="Ajinkya Creatiion Logo" className="w-10 h-10 object-contain" />
//             <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
//               Ajinkya Creatiion
//             </div>
//           </Link>
//         </motion.div>

//         {/* Centered Desktop Navigation */}
//         <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
//           <motion.ul
//             className="flex items-center space-x-8"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
//           >
//             <motion.li whileHover={{ y: -2 }}>
//               <Link
//                 to="/"
//                 className={`text-dark hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary font-medium' : ''}`}
//               >
//                 Home
//               </Link>
//             </motion.li>

//             <motion.li whileHover={{ y: -2 }}>
//               <Link
//                 to="/about"
//                 className={`text-dark hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary font-medium' : ''}`}
//               >
//                 About Us
//               </Link>
//             </motion.li>

//             {/* Services Dropdown */}
//             <motion.li
//               className="relative"
//               onMouseEnter={() => setIsServicesOpen(true)}
//               onMouseLeave={() => setIsServicesOpen(false)}
//             >
//               <button className="flex items-center gap-1 text-dark hover:text-primary transition-colors">
//                 Services <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
//               </button>
//               <AnimatePresence>
//                 {isServicesOpen && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 py-2 z-50"
//                   >
//                     <li>
//                       <Link className="block px-4 py-2 hover:bg-gray-100" to="/services/web">
//                         Web Development
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="block px-4 py-2 hover:bg-gray-100" to="/services/mobile">
//                         Mobile App Development
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="block px-4 py-2 hover:bg-gray-100" to="/services/seo">
//                         SEO Services
//                       </Link>
//                     </li>
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </motion.li>

//             <li>
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 font-medium">
//                 Contact Us <ArrowRight size={16} />
//               </button>
//             </li>
//           </motion.ul>
//         </nav>

//         {/* Mobile Menu Button */}
//         <motion.button
//           className="block md:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//           whileTap={{ scale: 0.9 }}
//         >
//           {isMenuOpen ? (
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </motion.button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.nav
//             className="block md:hidden"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.ul className="flex flex-col px-4 py-2 space-y-4 bg-white">
//               {[
//                 { to: '/', label: 'Home' },
//                 { to: '/about', label: 'About Us' },
//                 { to: '/services', label: 'Services' },
//                 { to: '/contact', label: 'Contact Us', isButton: true },
//               ].map((item, index) => (
//                 <motion.li key={index}>
//                   <Link
//                     to={item.to}
//                     className={`block py-2 ${item.isButton ? 'btn btn-primary' : `text-dark hover:text-primary ${location.pathname === item.to ? 'text-primary font-medium' : ''}`}`}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../../assets/images/ACPL.webp";
import { ArrowRight, ChevronDown, Home, Info, Cpu, Box } from "lucide-react";

const navLinks = [
  { label: "Home", link: "/", icon: Home },
  { label: "About Us", link: "/about", icon: Info },
  {
    label: "Services",
    link: "/Services", // Main services page link
    icon: Cpu,
    subLinks: [
      { label: "AI Solutions", link: "/Ai", icon: Cpu },
      { label: "Sass Products", link: "/Sass", icon: Box },
      { label: "Case Studies", link: "/Case", icon: Box },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all backdrop-blur-sm ${
        scrolled ? "bg-white/80 shadow-md" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex items-center justify-between py-4 relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="Logo" className="w-10 h-10 object-contain" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              Ajinkya Creatiion
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center space-x-10 font-medium">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.li
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  whileHover={{ y: -2 }}
                >
                  {link.subLinks ? (
                    <>
                      <div className="flex items-center gap-1">
                        {/* Main Services link */}
                        <Link
                          to={link.link}
                          className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-all font-medium"
                        >
                          <Icon className="h-5 w-5" />
                          {link.label}
                        </Link>

                        {/* Dropdown arrow */}
                        <button
                          className="ml-1 flex items-center"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDropdown(openDropdown === link.label ? null : link.label);
                          }}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              openDropdown === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, staggerChildren: 0.05 }}
                            className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-52 py-2 z-50"
                          >
                            {link.subLinks.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <motion.li
                                  key={sub.label}
                                  className="px-4 py-2 flex items-center gap-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md cursor-pointer"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <SubIcon className="h-4 w-4" />
                                  <Link to={sub.link}>{sub.label}</Link>
                                </motion.li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.link}
                      className={`flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors ${
                        location.pathname === link.link ? "text-blue-600 font-semibold" : ""
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex ml-auto">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full flex items-center gap-2 font-medium shadow-md"
            >
              Contact Us <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="block md:hidden bg-white shadow-md rounded-b-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.subLinks ? (
                    <>
                      {/* Main services link */}
                      <Link
                        to={link.link}
                        className="flex items-center gap-2 py-2 text-gray-800 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <link.icon className="h-4 w-4" /> {link.label}
                      </Link>

                      {/* Dropdown button */}
                      <button
                        className="flex justify-between w-full py-2 text-gray-800 font-medium"
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.ul
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2"
                          >
                            {link.subLinks.map((sub) => (
                              <li
                                key={sub.label}
                                className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
                              >
                                <sub.icon className="h-4 w-4" />
                                <Link
                                  to={sub.link}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.link}
                      className={`flex items-center gap-2 py-2 text-gray-800 hover:text-blue-600 ${
                        location.pathname === link.link ? "text-blue-600 font-semibold" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <link.icon className="h-4 w-4" /> {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="block py-2 text-blue-600 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

