
import { ArrowRight,  Sparkles, Brain, Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-1 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Businesses with {' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
                Future
              </span>{' '}
              -Ready Technology
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              AI-powered solutions, scalable SaaS platforms, and intelligent digital tools designed to accelerate your growth and drive innovation.
            </p>
            
            {/* Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 font-semibold text-lg">
                Get Started
                <ArrowRight size={20} />
              </button>
              
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Circle */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"></div>
                <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <Brain size={80} className="text-blue-600" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Rocket size={24} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                  <Sparkles size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <Star size={18} className="text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg animate-ping"></div>
                <div className="absolute top-1/4 -right-8 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full shadow-lg animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;