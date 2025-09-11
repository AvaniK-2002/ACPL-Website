import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Breadcrumb from '../components/ui/Breadcrumb';
import FAQStructuredData from '../components/seo/FAQStructuredData';
import { FadeIn } from '../components/ui/animations';
import bgImage from "../assets/images/bg.jpeg";



// Direct imports for immediate loading (no lazy loading)
import { FuturisticModelViewer, VRTrainingDemo } from '../components/ui/Heavy3DComponents';

// TypeScript interfaces for Services page
interface GameItem {
  id: number;
  term: string;
  definition: string;
  category: string;
}

type GameState = 'instructions' | 'playing' | 'completed';



// Interactive E-Learning Puzzle Game Component
const ELearningPuzzleGame = () => {
  const [gameState, setGameState] = useState<GameState>('instructions');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [matches, setMatches] = useState<number[]>([]);
  const [draggedItem, setDraggedItem] = useState<GameItem | null>(null);
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);

  // Educational content for the matching game
  const gameData = {
    title: "E-Learning Technology Matching",
    objective: "Match each e-learning technology with its primary benefit",
    items: [
      { id: 1, term: "SCORM Compliance", definition: "Ensures course compatibility across different Learning Management Systems", category: "standards" },
      { id: 2, term: "Interactive Quizzes", definition: "Provides immediate feedback and knowledge assessment", category: "assessment" },
      { id: 3, term: "Progress Tracking", definition: "Monitors learner advancement and completion rates", category: "analytics" },
      { id: 4, term: "Multimedia Content", definition: "Engages learners through videos, animations, and interactive elements", category: "engagement" },
      { id: 5, term: "Mobile Learning", definition: "Enables learning on-the-go across all devices", category: "accessibility" },
      { id: 6, term: "Gamification", definition: "Increases motivation through points, badges, and achievements", category: "motivation" }
    ]
  };

  const resetGame = () => {
    setGameState('playing');
    setScore(0);
    setAttempts(0);
    setMatches([]);
    setDraggedItem(null);
    setFeedback('');
    setShowHint(false);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: GameItem) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement> | { preventDefault: () => void }, targetItem: GameItem) => {
    e.preventDefault();
    if (!draggedItem) return;

    setAttempts(prev => prev + 1);

    if (draggedItem.id === targetItem.id) {
      // Correct match
      setMatches(prev => [...prev, draggedItem.id]);
      setScore(prev => prev + 10);
      setFeedback(`Correct! ${draggedItem.term} matches perfectly.`);

      // Check if game is completed
      if (matches.length + 1 === gameData.items.length) {
        setTimeout(() => setGameState('completed'), 1000);
      }
    } else {
      // Incorrect match
      setFeedback(`Not quite right. Try again!`);
    }

    setDraggedItem(null);
    setTimeout(() => setFeedback(''), 3000);
  };

  const getScoreColor = () => {
    const accuracy = attempts > 0 ? (score / (attempts * 10)) * 100 : 0;
    if (accuracy >= 80) return 'text-green-600';
    if (accuracy >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const unmatched = gameData.items.filter(item => !matches.includes(item.id));

  if (gameState === 'instructions') {
    return (
      <motion.div
        className="w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">{gameData.title}</h3>
          <p className="text-gray-600 mb-4">{gameData.objective}</p>
          <p className="text-sm text-gray-500 mb-6">Drag terms from the left to match with their definitions on the right. Score points for correct matches!</p>
          <Button variant="primary" onClick={resetGame}>
            Start Interactive Demo
          </Button>
        </div>
      </motion.div>
    );
  }

  if (gameState === 'completed') {
    const accuracy = attempts > 0 ? Math.round((score / (attempts * 10)) * 100) : 0;
    return (
      <motion.div
        className="w-full h-80 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6 flex flex-col justify-center items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Congratulations! 🎉</h3>
          <p className="text-gray-600 mb-4">You've completed the e-learning demo!</p>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Final Score:</span>
                <div className={`font-bold ${getScoreColor()}`}>{score} points</div>
              </div>
              <div>
                <span className="text-gray-500">Accuracy:</span>
                <div className={`font-bold ${getScoreColor()}`}>{accuracy}%</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Button variant="secondary" onClick={resetGame} className="mr-2">
              Play Again
            </Button>
            <Link to="/contact">
              <Button variant="primary">
                Create Custom Games
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="w-full h-80 bg-white rounded-lg border-2 border-gray-200 p-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Game Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            <span className="text-gray-500">Score: </span>
            <span className={`font-bold ${getScoreColor()}`}>{score}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Progress: </span>
            <span className="font-bold text-primary">{matches.length}/{gameData.items.length}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition-colors"
          >
            {showHint ? 'Hide' : 'Show'} Hint
          </button>
          <button
            onClick={resetGame}
            className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            💡 Tip: Read each definition carefully and think about which technology would provide that specific benefit.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Area */}
      <div className="grid grid-cols-2 gap-4 h-48">
        {/* Terms (Left Side) */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technology & AI Solutions: </h4>
          <div className="space-y-1 overflow-y-auto h-40">
            {unmatched.map((item) => (
              <div
                key={item.id}
                className="p-2 bg-primary/10 border border-primary/20 rounded cursor-move text-sm hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 hover:scale-105 transform duration-200"
                draggable
                tabIndex={0}
                role="button"
                aria-label={`Drag ${item.term} to match with its definition`}
                onDragStart={(e) => handleDragStart(e, item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setDraggedItem(item);
                  }
                }}
              >
                {item.term}
              </div>
            ))}
          </div>
        </div>

        {/* Definitions (Right Side) */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits & Features</h4>
          <div className="space-y-1 overflow-y-auto h-40">
            {gameData.items.map((item) => (
              <motion.div
                key={`def-${item.id}`}
                className={`p-2 border-2 border-dashed rounded text-sm min-h-[2.5rem] flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
                  matches.includes(item.id)
                    ? 'bg-green-50 border-green-300 text-green-800'
                    : 'border-gray-300 hover:border-secondary/50 hover:bg-secondary/5'
                }`}
                tabIndex={!matches.includes(item.id) ? 0 : -1}
                role="button"
                aria-label={`Drop zone for ${item.definition}`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, item)}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && draggedItem) {
                    e.preventDefault();
                    handleDrop({ preventDefault: () => {} }, item);
                  }
                }}
              >
                {matches.includes(item.id) ? (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">{item.term}</span>
                  </div>
                ) : (
                  <span className="text-gray-600">{item.definition}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Service thumbnail component
interface ServiceThumbnailProps {
  service: {
    id: number;
    title: string;
    division: string;
    icon?: React.ReactNode;
  };
}

const ServiceThumbnail = ({ service }: ServiceThumbnailProps) => {
  const getThumbnailContent = (serviceId: number) => {
    const thumbnailData: Record<number, {
      title: string;
      description: string;
      thumbnail: string;
      alt: string;
    }> = {
      1: {
        title: "Technology & AI Solutions",
        description: "Leverage artificial intelligence, machine learning, and data analytics to optimize operations, enhance decision-making, and unlock new opportunities.",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop&crop=center",
        alt: "Professional video production setup with cameras and lighting equipment for e-learning content creation"
      },
      2: {
        title: "SaaS Product Development",
        description: "Cloud-native, secure, and scalable platforms tailored to your business requirements.",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop&crop=center",
        alt: "Students collaborating on interactive e-learning platform with digital devices and educational content"
      },
      3: {
        title: "eLearning Solutions",
        description: "Interactive and personalized learning platforms designed for modern learners.",
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop&crop=center",
        alt: "Professional corporate training session with business people in modern conference room"
      },
      4: {
        title: "360° AR/VR Training Experience",
        description: "Immersive virtual reality training simulations and augmented reality learning environments.",
        thumbnail: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=450&fit=crop&crop=center",
        alt: "Person wearing VR headset experiencing immersive virtual reality training simulation"
      },
      5: {
        title: "Creative & Digital Services",
        description: "High-impact design, branding, and multimedia that align with your business objectives.",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=center",
        alt: "Web developer working on responsive website design with multiple screens showing code and layouts"
      },
      6: {
        title: "Process Automation",
        description: "Reduce errors, save time, and enhance productivity with intelligent automation.",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&crop=center",
        alt: "Software development workspace with multiple monitors showing code, mobile app interfaces, and development tools"
      }
    };
    return thumbnailData[serviceId] || thumbnailData[1];
  };

  const thumbnailContent = getThumbnailContent(service.id);

  return (
    <motion.div
      className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Service Thumbnail Image */}
      <img
        src={thumbnailContent.thumbnail}
        alt={thumbnailContent.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

      {/* Service Icon */}
      <div className="absolute top-4 right-4">
        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
          {service.icon && (
            <div className="text-primary scale-75">
              {service.icon}
            </div>
          )}
        </div>
      </div>

      {/* Content Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h4 className="text-white font-semibold mb-1">{thumbnailContent.title}</h4>
        <p className="text-gray-300 text-sm mb-2 line-clamp-2">{thumbnailContent.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{service.division}</span>
        
        </div>
      </div>
    </motion.div>
  );
};



// 360° VR Training Thumbnail Component
const VR360Thumbnail = () => {
  return (
    <motion.div
      className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden relative group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* 360° VR Training Thumbnail Image */}
      <img
        src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=450&fit=crop&crop=center"
        alt="360-degree VR training environment with immersive laboratory simulation and interactive learning by ACPL VIRA division"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

      {/* VR Icon */}
      <div className="absolute top-4 right-4">
        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Feature Badges */}
      <div className="absolute top-4 left-4 flex flex-col space-y-2">
        <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
          360° View
        </span>
        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
          VR Ready
        </span>
        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
          Interactive
        </span>
      </div>

      {/* Content Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h4 className="text-white font-semibold mb-1">360° VR Training Experience</h4>
        <p className="text-gray-300 text-sm mb-2 line-clamp-2">
          Immersive VR training environments with 360° interactive experiences. VR headset compatible with mobile & desktop support.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">VIRA Division</span>
          <span className="text-xs text-purple-400 bg-white/20 px-2 py-1 rounded">
            VR Experience
          </span>
        </div>
      </div>


    </motion.div>
  );
};

// VR Demo Tabs Component
const VRDemoTabs = () => {
  const [activeTab, setActiveTab] = useState('vr-demo');

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-4 overflow-x-auto">
        <button
          onClick={() => setActiveTab('vr-demo')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'vr-demo'
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          🥽 3D VR Training
        </button>
        <button
          onClick={() => setActiveTab('360-thumbnail')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            activeTab === '360-thumbnail'
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          📹 360° Experience
        </button>
        <button
          onClick={() => setActiveTab('3d-model')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            activeTab === '3d-model'
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          🚀 Futuristic 3D
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[320px]">
        {activeTab === 'vr-demo' ? (
          <VRTrainingDemo />
        ) : activeTab === '360-thumbnail' ? (
          <VR360Thumbnail />
        ) : (
          <FuturisticModelViewer />
        )}
      </div>

      {/* Tab Description */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        {activeTab === 'vr-demo' ? (
          <p className="text-sm text-gray-600">
            <strong>Interactive VR Training Demo:</strong> Experience immersive virtual reality training
            in a safe laboratory environment. Click on interactive hotspots to learn about equipment,
            safety procedures, and best practices through hands-on exploration.
          </p>
        ) : activeTab === '360-thumbnail' ? (
          <p className="text-sm text-gray-600">
            <strong>360° VR Experience:</strong> Our 360-degree virtual reality training environments
            provide immersive learning experiences that place learners directly into realistic scenarios.
            This technology enhances engagement and knowledge retention through hands-on virtual practice.
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            <strong>Futuristic 3D Models:</strong> Explore cutting-edge 3D visualization technology with
            interactive holographic interfaces, AI training assistants, and immersive spacecraft simulations.
            This showcases the future of virtual reality training with advanced WebGL rendering and real-time 3D interaction.
          </p>
        )}
      </div>
    </div>
  );
};

// Interactive Demo Tabs Component
interface InteractiveDemoTabsProps {
  service: {
    id: number;
    title: string;
    division: string;
    icon?: React.ReactNode;
  };
}

const InteractiveDemoTabs = ({ service }: InteractiveDemoTabsProps) => {
  const [activeTab, setActiveTab] = useState('game');

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-4">
        <button
          onClick={() => setActiveTab('game')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'game'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          🎮 Interactive Game
        </button>
        <button
          onClick={() => setActiveTab('thumbnail')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'thumbnail'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          📚 Course Preview
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[320px]">
        {activeTab === 'game' ? (
          <ELearningPuzzleGame />
        ) : (
          <ServiceThumbnail service={service} />
        )}
      </div>

      {/* Tab Description */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        {activeTab === 'game' ? (
          <p className="text-sm text-gray-600">
            <strong>Interactive Gamification Demo:</strong> Experience how we transform learning through
            engaging games, immediate feedback, and progress tracking. This drag-and-drop matching game
            demonstrates key e-learning technologies and their benefits.
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            <strong>E-Learning Course Preview:</strong> Our SCORM-compliant interactive courses
            feature embedded quizzes, progress tracking, and seamless LMS integration.
            We create engaging educational content from concept to deployment.
          </p>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  // FAQ data for structured markup
  const faqData = [
    {
      question: "How long does it take to develop e-learning content?",
      answer: "The timeline for e-learning content development varies depending on the complexity and scope of the project. Simple video courses can be completed in 2-4 weeks, while more complex interactive courses or AR/VR experiences may take 8-12 weeks or more."
    },
    {
      question: "What is your pricing structure for e-learning solutions?",
      answer: "Our pricing varies by division and service type. KontentCreate and VIRA services are typically work-order based, while our VENUS applications follow a subscription model. Consulting services are priced based on project scope and duration. We provide detailed quotes after understanding your specific learning needs."
    },
    {
      question: "Do you provide SCORM-compliant e-learning content?",
      answer: "Yes, we specialize in creating SCORM-compliant interactive e-learning content that can be seamlessly integrated with your existing Learning Management System (LMS). Our content adheres to industry standards, ensuring compatibility and proper tracking of learner progress and assessment results."
    },
    {
      question: "Can you create AR/VR content for training purposes?",
      answer: "Yes, our VIRA division specializes in creating Augmented Reality (AR), Virtual Reality (VR), and 360° content specifically designed for training purposes. These immersive experiences are ideal for shop floor training, simulated environments, virtual labs, and real-life scenario simulations, providing learners with hands-on experience in a safe, controlled environment."
    },
    {
      question: "Do you provide SaaS applications and greenfield project development?",
      answer: "Yes, our ACPL division offers comprehensive SaaS application development and greenfield project solutions alongside our consulting services. We create cloud-native SaaS platforms, subscription-based systems, and build new applications from scratch including startup MVPs, enterprise solutions, and innovative technology implementations. Our solutions are tailored to meet your specific business requirements and technical needs."
    }
  ];

  // Service categories
  const services = [
    {
      id: 1,
      title: 'Technology & AI Solutions',
      description:
        'Leverage artificial intelligence, machine learning, and data analytics to optimize operations, enhance decision-making, and unlock new opportunities.',
      icon: (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-12 h-12"
  viewBox="0 0 24 24"
  fill="none"
>
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#2563eb" />  {/* blue-600 */}
      <stop offset="100%" stopColor="#9333ea" /> {/* purple-600 */}
    </linearGradient>
  </defs>
  <path
    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    stroke="url(#grad2)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

      ),
      features: [
        'High-quality training video courses',
        'Online and downloadable formats',
        'Seamless learning on various devices',
        'Corporate training solutions',
        'Educational institution content',
        'Technology and compliance training',
      ],
      division: 'KontentCreate',
      type: <span className=" text-gray-600">
  WO-Contract based / Stock Sale
</span>
    },
    {
      id: 2,
      title: 'SaaS Product Development',
      description:
        'Cloud-native, secure, and scalable platforms tailored to your business requirements.',
      icon: (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-12 h-12"
  viewBox="0 0 24 24"
  fill="none"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#2563eb" />  {/* blue-600 */}
      <stop offset="100%" stopColor="#9333ea" /> {/* purple-600 */}
    </linearGradient>
  </defs>
  <path
    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    stroke="url(#grad1)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

      ),
      features: [
        'SCORM compliant courses',
        'Interactive stories and elements',
        'Quizzes and assessments',
        '360° footage of real environments',
        'Seamless LMS integration',
        'Enhanced learning experiences',
      ],
      division: 'KontentCreate',
      type: <span className=" text-gray-600">WO-Contract based</span>
    },
    {
      id: 3,
      title: 'eLearning Solutions',
      description:
        'Interactive and personalized learning platforms designed for modern learners.',
      icon: (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-12 h-12"
  viewBox="0 0 24 24"
  fill="none"
>
  <defs>
    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#2563eb" />  {/* blue-600 */}
      <stop offset="100%" stopColor="#9333ea" /> {/* purple-600 */}
    </linearGradient>
  </defs>
  <path
    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    stroke="url(#grad3)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

      ),
      features: [
        'Needs assessment',
        'Customized training design',
        'Planning and programme design',
        'Implementation and facilitation',
        'Improvement monitoring systems',
        'Learning culture development',
      ],
      division: 'ACPL',
      type: <span className=" text-gray-600">Consulting based</span>
    },
    {
      id: 4,
      title: '360° AR/VR Content',
      description:
        'Immersive learning experiences with Augmented Reality, Virtual Reality, and 360° content for simulated training.',
      icon: (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-12 h-12"
  viewBox="0 0 24 24"
  fill="none"
>
  <defs>
    <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#2563eb" />  {/* blue-600 */}
      <stop offset="100%" stopColor="#9333ea" /> {/* purple-600 */}
    </linearGradient>
  </defs>
  <path
    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    stroke="url(#grad4)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

      ),
      features: [
        'Augmented Reality (AR) content',
        'Virtual Reality (VR) experiences',
        '360° reality environments',
        'Shop floor training simulations',
        'Virtual machines and labs',
        'Real-life scenario simulations',
      ],
      division: 'VIRA',
      type: <span className=" text-gray-600">WO basis AR/VR/Real-Blend</span>
    },
    {
      id: 5,
      title: 'Creative & Digital Servicess',
      description:
        'High-impact design, branding, and multimedia that align with your business objectives.',
      icon: (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-12 h-12"
  fill="none"
  viewBox="0 0 24 24"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#2563EB" />  {/* blue-600 */}
      <stop offset="100%" stopColor="#8B5CF6" /> {/* purple-600 */}
    </linearGradient>
  </defs>
  <path
    stroke="url(#grad1)"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  />
</svg>

      ),
      features: [
        'Cloud-native SaaS platforms',
        'Multi-tenant architecture design',
        'Subscription management systems',
        'API-first development approach',
        'Scalable microservices architecture',
        'Real-time data synchronization',
        'User management and authentication',
        'Analytics and reporting dashboards',
      ],
      division: 'ACPL',
      type: <span className=" text-gray-600">Technology Services</span>
    },
    {
      id: 6,
      title: 'Process Automation',
      description:
        'Reduce errors, save time, and enhance productivity with intelligent automation.',
      icon: (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-12 h-12"
  fill="none"
  viewBox="0 0 24 24"
>
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#2563EB" />  {/* blue-600 */}
      <stop offset="100%" stopColor="#8B5CF6" /> {/* purple-600 */}
    </linearGradient>
  </defs>
  <path
    stroke="url(#grad2)"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  />
</svg>

      ),
      features: [
        'New system architecture from scratch',
        'Startup MVP development',
        'Greenfield enterprise applications',
        'Technology stack selection and setup',
        'Fresh database design and implementation',
        'Modern development practices adoption',
        'Scalable foundation architecture',
        'Innovation-focused development approach',
      ],
      division: 'ACPL',
      type: <span className=" text-gray-600">Technology Services</span>
    },
  ];

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Ajinkya Creatiion Private Limited",
        "alternateName": "ACPL",
        "url": "https://ajinkyacreatiion.com",
        "logo": "https://ajinkyacreatiion.com/ACPL.png",
        "description": "Leading provider of comprehensive e-learning solutions, video content creation, corporate training, and AR/VR experiences",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "E-Learning and Training Services",
          "itemListElement": services.map((service) => ({
            "@type": "Offer",
            "name": service.title,
            "description": service.description,
            "category": service.division,
            "businessFunction": "http://purl.org/goodrelations/v1#Sell",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "Organization",
                "name": "Ajinkya Creatiion Private Limited"
              },
              "serviceType": service.division === "KontentCreate" ? "Video Content Creation" :
                           service.division === "VIRA" ? "AR/VR Training" :
                           service.division === "VENUS" ? "Learning Applications" : "Technology Consulting"
            }
          }))
        }
      },
      {
        "@type": "Service",
        "name": "E-Learning Video Content",
        "provider": {
          "@type": "Organization",
          "name": "Ajinkya Creatiion Private Limited"
        },
        "serviceType": "Educational Technology",
        "description": "High-quality video content for corporate training, educational institutions, and technology education",
        "offers": {
          "@type": "Offer",
          "availability": "http://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Sell"
        }
      },
      {
        "@type": "Service",
        "name": "Interactive E-Learning",
        "provider": {
          "@type": "Organization",
          "name": "Ajinkya Creatiion Private Limited"
        },
        "serviceType": "Educational Technology",
        "description": "SCORM compliant courses with interactive elements that seamlessly integrate with learning management systems",
        "offers": {
          "@type": "Offer",
          "availability": "http://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Sell"
        }
      },
      {
        "@type": "Service",
        "name": "Corporate Training Solutions",
        "provider": {
          "@type": "Organization",
          "name": "Ajinkya Creatiion Private Limited"
        },
        "serviceType": "Business Consulting",
        "description": "Comprehensive consulting services for learning and development, including needs assessment and implementation support",
        "offers": {
          "@type": "Offer",
          "availability": "http://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Sell"
        }
      },
      {
        "@type": "Service",
        "name": "AR/VR Training Content",
        "provider": {
          "@type": "Organization",
          "name": "Ajinkya Creatiion Private Limited"
        },
        "serviceType": "Virtual Reality Training",
        "description": "Immersive learning experiences with Augmented Reality, Virtual Reality, and 360° content for simulated training",
        "offers": {
          "@type": "Offer",
          "availability": "http://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Sell"
        }
      }
    ]
  };

  return (
    <Layout
      title="Services - E-Learning Solutions & Corporate Training | Ajinkya Creatiion"
      description="Comprehensive e-learning services: interactive video content, SCORM-compliant courses, corporate training, AR/VR experiences, SaaS applications, and greenfield project development. Transform your training with innovative educational technology solutions."
      keywords="e-learning services, video content creation, interactive courses, SCORM compliant, corporate training, AR VR training, SaaS applications, greenfield projects, learning management system, educational technology services, Ajinkya Creatiion services"
      canonicalUrl="https://ajinkyacreatiion.com/services"
      structuredData={servicesStructuredData}
    >
      {/* Hero Section */}
<section
  className="relative min-h-[200px] pt-6 pb-20 text-white bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="absolute inset-0 " />
  <div className="relative container">
    <Breadcrumb className="text-white/90" />
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h1>
      <p className="text-xl">Comprehensive Solutions to Fuel Your Growth</p>
    </div>
  </div>
</section>


      {/* Services Overview */}
      <Section>
        <SectionTitle
          title="What We Offer"
          subtitle="Innovative learning solutions to transform education and training"
          centered
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} hoverable className="p-6 text-center">
              <div className="flex items-center justify-center mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-white bg-primary rounded-full">
                  {service.division}
                </span>
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-secondary rounded-full">
                  {service.type}
                </span>
              </div>
              <a
  href={`#service-${service.id}`}
  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:underline"
>
  Learn More →
</a>

            </Card>
          ))}
        </div>
      </Section>

      {/* Detailed Service Sections */}
      {services.map((service) => (
        <Section
          key={service.id}
          id={`service-${service.id}`}
          bgColor={service.id % 2 === 0 ? 'light' : 'white'}
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <SectionTitle title={service.title} />
              <p className="mb-6 text-gray-600">{service.description}</p>
              <ul className="mb-8 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 font-medium">Request a Quote</button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              {service.id === 2 ? (
                <InteractiveDemoTabs service={service} />
              ) : service.id === 4 ? (
                <VRDemoTabs />
              ) : (
                <ServiceThumbnail service={service} />
              )}
            </div>
          </div>
        </Section>
      ))}

      {/* Process Section */}
      <Section bgColor="primary">
        <SectionTitle
          title="Our Learning Approach"
          subtitle="How we create effective learning experiences"
          centered
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="relative p-6 bg-white rounded-lg shadow-md">
            
            <h3 className="mb-4 text-xl font-semibold">Needs Assessment</h3>
            <p className="text-gray-600">
              We begin by understanding your specific learning needs, audience, and objectives
              through detailed consultations and research.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-6 bg-white rounded-lg shadow-md">
            
            <h3 className="mb-4 text-xl font-semibold">Content Development</h3>
            <p className="text-gray-600">
              Our expert team creates engaging, interactive content tailored to your specific
              requirements, incorporating the latest learning methodologies.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-6 bg-white rounded-lg shadow-md">
            
            <h3 className="mb-4 text-xl font-semibold">Technology Integration</h3>
            <p className="text-gray-600">
              We integrate your content with appropriate technologies, whether it's SCORM-compliant
              LMS systems, AR/VR platforms, or custom learning applications.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative p-6 bg-white rounded-lg shadow-md">
            
            <h3 className="mb-4 text-xl font-semibold">Implementation & Support</h3>
            <p className="text-gray-600">
              We deliver the final solution and provide ongoing support to ensure successful
              implementation and adoption across your organization.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <FAQStructuredData
          faqs={faqData}
          pageTitle="Frequently Asked Questions - Ajinkya Creatiion Services"
        />
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about our services"
          centered
        />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                How long does it take to develop e-learning content?
              </h3>
              <p className="text-gray-600">
                The timeline for e-learning content development varies depending on the
                complexity and scope of the project. Simple video courses can be completed
                in 2-4 weeks, while more complex interactive courses or AR/VR experiences
                may take 8-12 weeks or more.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                What is your pricing structure for e-learning solutions?
              </h3>
              <p className="text-gray-600">
                Our pricing varies by division and service type. KontentCreate and VIRA services
                are typically work-order based, while our VENUS applications follow a subscription model.
                Consulting services are priced based on project scope and duration. We provide detailed
                quotes after understanding your specific learning needs.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                Do you provide SCORM-compliant e-learning content?
              </h3>
              <p className="text-gray-600">
                Yes, we specialize in creating SCORM-compliant interactive e-learning content
                that can be seamlessly integrated with your existing Learning Management System (LMS).
                Our content adheres to industry standards, ensuring compatibility and proper tracking
                of learner progress and assessment results.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                Can you create AR/VR content for training purposes?
              </h3>
              <p className="text-gray-600">
                Yes, our VIRA division specializes in creating Augmented Reality (AR),
                Virtual Reality (VR), and 360° content specifically designed for training purposes.
                These immersive experiences are ideal for shop floor training, simulated environments,
                virtual labs, and real-life scenario simulations, providing learners with hands-on
                experience in a safe, controlled environment.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                Do you provide SaaS applications and greenfield project development?
              </h3>
              <p className="text-gray-600">
                Yes, our ACPL division offers comprehensive SaaS application development and greenfield project
                solutions alongside our consulting services. We create cloud-native SaaS platforms, subscription-based systems,
                and build new applications from scratch including startup MVPs, enterprise solutions, and innovative technology implementations.
                Our solutions are tailored to meet your specific business requirements and technical needs.
              </p>
            </div>
          </div>
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
              Contact us today to discuss your training, development, and technology needs.
              Discover how our comprehensive solutions can help your organization thrive.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to="/contact">
  <Button
    variant="secondary"
    size="lg"
    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
  >
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

export default Services;
