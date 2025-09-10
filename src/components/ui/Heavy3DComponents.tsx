import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

// TypeScript interfaces for 3D components
type DemoState = 'intro' | '3d-lab' | 'vr-training' | 'completed';

// Futuristic 3D CSS Animation Component
export const FuturisticModelViewer = () => {
  const [currentModel, setCurrentModel] = useState<keyof typeof models>('hologram');
  const [isRotating, setIsRotating] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const models = {
    hologram: {
      name: "Holographic Interface",
      description: "Interactive 3D holographic display system for immersive learning",
      icon: "🌐",
      color: "from-cyan-400 to-blue-600"
    },
    robot: {
      name: "AI Training Assistant",
      description: "Advanced AI-powered virtual training companion",
      icon: "🤖",
      color: "from-purple-400 to-pink-600"
    },
    brain: {
      name: "Neural Network",
      description: "AI-powered learning analytics and cognitive training visualization",
      icon: "🧠",
      color: "from-green-400 to-emerald-600"
    }
  } as const;

  const currentModelData = models[currentModel];

  return (
    <motion.div
      className="w-full h-80 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-lg overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '30px 30px']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Central 3D Object */}
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          className="relative"
          style={{ perspective: '1000px' }}
        >
          {/* Main 3D Object */}
          <motion.div
            className={`w-32 h-32 bg-gradient-to-br ${currentModelData.color} rounded-lg shadow-2xl relative`}
            style={{
              transformStyle: 'preserve-3d',
            }}
            animate={isRotating ? {
              rotateY: [0, 360],
              rotateX: [0, 15, 0, -15, 0]
            } : {}}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Object Faces */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"
                 style={{ transform: 'translateZ(20px)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg"
                 style={{ transform: 'rotateY(90deg) translateZ(20px)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg"
                 style={{ transform: 'rotateY(180deg) translateZ(20px)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent rounded-lg"
                 style={{ transform: 'rotateY(-90deg) translateZ(20px)' }} />

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-4xl">
              {currentModelData.icon}
            </div>

            {/* Holographic Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-purple-400/30 rounded-full"
                style={{
                  width: `${120 + i * 40}px`,
                  height: `${120 + i * 40}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>

          {/* Orbiting Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                rotate: [0, 360],
                x: Math.cos((i * 60) * Math.PI / 180) * 80,
                y: Math.sin((i * 60) * Math.PI / 180) * 80,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>

        {/* Holographic Frame Effect */}
        <div className="absolute inset-4 border-2 border-purple-400/30 rounded-lg pointer-events-none">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-purple-400" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-400" />
        </div>
      </div>

      {/* Control Panel */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="flex items-center space-x-2 text-white text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>3D System Active</span>
          </div>
        </div>

        <button
          onClick={() => setShowControls(!showControls)}
          className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs hover:bg-black/80 transition-colors"
        >
          ⚙️ Controls
        </button>
      </div>

      {/* Model Selection & Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex flex-col space-y-3">
              {/* Model Selection */}
              <div className="flex space-x-2 overflow-x-auto">
                {Object.entries(models).map(([key, model]) => (
                  <button
                    key={key}
                    onClick={() => setCurrentModel(key as keyof typeof models)}
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-colors flex items-center space-x-1 ${
                      currentModel === key
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    <span>{model.icon}</span>
                    <span>{model.name}</span>
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    isRotating ? 'bg-purple-600 text-white' : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {isRotating ? '⏸️ Stop Rotation' : '▶️ Auto Rotate'}
                </button>

                <div className="text-white text-xs">
                  <span className="text-gray-400">Hover to interact • Click controls to customize</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Model Info */}
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white">
        <h4 className="text-sm font-semibold text-purple-400 flex items-center space-x-2">
          <span>{currentModelData.icon}</span>
          <span>{currentModelData.name}</span>
        </h4>
        <p className="text-xs text-gray-300">{currentModelData.description}</p>
      </div>

      {/* Tech Indicators */}
      <div className="absolute top-4 right-4 flex flex-col space-y-1">
        <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
          3D CSS
        </span>
        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
          Interactive
        </span>
        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
          Futuristic
        </span>
      </div>
    </motion.div>
  );
};

// Interactive 3D/VR Demonstration Component
export const VRTrainingDemo = () => {
  const [demoState, setDemoState] = useState<DemoState>('intro');

  if (demoState === 'intro') {
    return (
      <motion.div
        className="w-full h-80 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg p-6 flex flex-col justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Virtual Reality Training Experience</h3>
          <p className="text-gray-600 mb-4">Explore an immersive virtual laboratory environment with interactive 3D elements and training scenarios.</p>
          <p className="text-sm text-gray-500 mb-6">Click on hotspots to learn about equipment and safety procedures. Use mouse controls to navigate the 3D space.</p>
          <div className="space-y-2">
            <Button variant="primary" onClick={() => setDemoState('3d-lab')}>
              Enter Virtual Lab
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }



  // Simplified VR demo for code splitting
  return (
    <motion.div
      className="w-full h-80 bg-gray-900 rounded-lg overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">VR Training Demo</h3>
          <p className="text-gray-300 mb-4">Interactive virtual reality training experience</p>
          <Button variant="primary" onClick={() => setDemoState('3d-lab')}>
            Start VR Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
