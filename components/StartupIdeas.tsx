'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AddProject from './AddProject'

interface Startup {
  name: string
  description: string
  goal: number
  raised: number
}

const initialStartups: Startup[] = [
  {
    name: "DeFi Pulse",
    description: "Real-time analytics and rankings of DeFi protocols on Solana",
    goal: 100000,
    raised: 75000,
  },
  {
    name: "SolGaming",
    description: "Decentralized gaming platform built on Solana",
    goal: 200000,
    raised: 150000,
  },
  {
    name: "EcoChain",
    description: "Sustainable blockchain solutions leveraging Solana's efficiency",
    goal: 150000,
    raised: 100000,
  },
]

export default function StartupIdeas() {
  const [startups, setStartups] = useState<Startup[]>(initialStartups)

  const handleAddProject = (newProject: Omit<Startup, 'raised'>) => {
    setStartups([...startups, { ...newProject, raised: 0 }])
  }

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-glow">Featured Projects</h2>
      <div className="max-w-6xl mx-auto px-4">
        <AddProject onAddProject={handleAddProject} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <motion.div 
              key={startup.name}
              className="bg-purple-900/30 backdrop-blur-md rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-purple-500/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-glow">{startup.name}</h3>
              <p className="text-purple-200 mb-4">{startup.description}</p>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Progress</span>
                  <span>{Math.round((startup.raised / startup.goal) * 100)}%</span>
                </div>
                <div className="w-full bg-purple-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-green-500 h-2 rounded-full" 
                    style={{ width: `${(startup.raised / startup.goal) * 100}%` }}
                  ></div>
                </div>
              </div>
              <p className="mb-4">
                <span className="font-semibold text-glow">{startup.raised.toLocaleString()} SOL</span> raised of {startup.goal.toLocaleString()} SOL goal
              </p>
              <motion.button 
                className="w-full bg-gradient-to-r from-purple-500 to-green-500 text-white font-bold py-2 px-4 rounded-full hover:from-purple-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Invest Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
