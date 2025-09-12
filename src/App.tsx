import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ui/ScrollToTop";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Sass from "./pages/Sass";
import Ai from "./pages/Ai";
import CaseStudy from "./pages/Case";
import Blogs from "./pages/Blogs";

import CustomCursor from "./components/ui/CustomCursor"; // 👈 Import here

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor /> {/* 👈 Add here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sass" element={<Sass />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/case" element={<CaseStudy />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
