'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      className="text-center py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-6xl font-bold mb-6 text-glow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-green-400"
        whileHover={{ scale: 1.05 }}
      >
        SOLaunch
      </motion.h1>
      <motion.p 
        className="text-2xl mb-8 text-purple-200"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Launch Your Vision with Solana Community
      </motion.p>
      <motion.button 
        className="bg-gradient-to-r from-purple-500 to-green-500 text-white font-bold py-3 px-8 rounded-full hover:from-purple-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Projects
      </motion.button>
    </motion.section>
  )
}
