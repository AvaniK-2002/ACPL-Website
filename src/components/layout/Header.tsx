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

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../../assets/images/ACPL.webp';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full bg-white ${scrolled ? 'shadow-md' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container flex items-center justify-between py-4 relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="Ajinkya Creatiion Logo" className="w-10 h-10 object-contain" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              Ajinkya Creatiion
            </div>
          </Link>
        </motion.div>

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <motion.ul
            className="flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <motion.li whileHover={{ y: -2 }}>
              <Link
                to="/"
                className={`text-dark hover:text-primary transition-colors ${
                  location.pathname === '/' ? 'text-primary font-medium' : ''
                }`}
              >
                Home
              </Link>
            </motion.li>

            <motion.li whileHover={{ y: -2 }}>
              <Link
                to="/about"
                className={`text-dark hover:text-primary transition-colors ${
                  location.pathname === '/about' ? 'text-primary font-medium' : ''
                }`}
              >
                About Us
              </Link>
            </motion.li>

            {/* Services Dropdown */}
            <motion.li
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
             <Link 
  to="/services" 
  className="flex items-center gap-1 text-dark hover:text-primary transition-colors"
>
  Services 
  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
</Link>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 py-2 z-50"
                  >
                    <li>
                      <Link className="block px-4 py-2 hover:bg-gray-100" to="/Ai">
                        AI Solutions
                      </Link>
                    </li>
                    <li>
                      <Link className="block px-4 py-2 hover:bg-gray-100" to="/Sass">
                       Sass Products
                      </Link>
                    </li>
                    <li>
                      <Link className="block px-4 py-2 hover:bg-gray-100" to="/Case">
                        Case Studies 
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          </motion.ul>
        </nav>

        {/* Contact Button on the Right */}
        <div className="hidden md:flex ml-auto">
  <Link to="/contact">
    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 font-medium">
      Contact Us <ArrowRight size={16} />
    </button>
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="block md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul className="flex flex-col px-4 py-2 space-y-4 bg-white">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact Us', isButton: true },
              ].map((item, index) => (
                <motion.li key={index}>
                  <Link
                    to={item.to}
                    className={`block py-2 ${
                      item.isButton
                        ? 'btn btn-primary'
                        : `text-dark hover:text-primary ${
                            location.pathname === item.to ? 'text-primary font-medium' : ''
                          }`
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

