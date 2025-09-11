import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ui/ScrollToTop';
import './App.css';

// Direct imports for immediate loading (no lazy loading)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Sass from './pages/Sass';
import Ai from './pages/Ai';
import CaseStudy from './pages/Case';
import Blogs from './pages/Blogs';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Sass" element={<Sass />} />
          <Route path="/Ai" element={<Ai/>} />
          <Route path="/Case" element={<CaseStudy/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          
          
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
