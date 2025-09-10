import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit to 1000 kB for specific large chunks
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunking strategy to split large dependencies
        manualChunks: {
          // React ecosystem
          'react-vendor': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],

          // Animation libraries
          'animation': ['framer-motion'],

          // 3D and model viewer libraries
          '3d-libs': ['three', '@google/model-viewer'],

          // SEO and utilities
          'utils': ['react-helmet-async'],
        },
        // Optimize chunk file names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            // Create descriptive names for route-based chunks
            if (facadeModuleId.includes('pages/')) {
              const pageName = facadeModuleId.split('/').pop()?.replace('.tsx', '')
              return `pages/[name]-[hash].js`.replace('[name]', pageName || 'page')
            }
            if (facadeModuleId.includes('components/')) {
              return 'components/[name]-[hash].js'
            }
          }
          return 'chunks/[name]-[hash].js'
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.names?.[0]?.split('.') || []
          const ext = info[info.length - 1]

          // Preserve original names for specific WebP images (no hash)
          const preserveOriginalNames = [
            'ACPL.webp',
            'KontentCreate.webp',
            'VIRA.webp',
            'Venus.webp',
            'Ajinkya-Deshmukh.webp',
            'Hrishikesh-Mohite.webp',
            'Ruturaj-Kale.webp'
          ]

          const fileName = assetInfo.names?.[0] || ''
          if (preserveOriginalNames.includes(fileName)) {
            return `images/[name][extname]`
          }

          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext || '')) {
            return `images/[name]-[hash][extname]`
          }
          if (/css/i.test(ext || '')) {
            return `styles/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    // Enable source maps for better debugging in production
    sourcemap: false,
    // Optimize minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
  },
})
