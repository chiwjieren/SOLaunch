'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { name: 'SOLForge', image: '/example1.png' },
  { name: 'NextSOL', image: '/example2.png' },
  { name: 'SOLutions', image: '/example3.png' },
  { name: 'MetaSOL', image: '/example4.png' },
]

export default function Marquee() {
  return (
    <div className="py-20 overflow-hidden bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-purple-900/20 backdrop-blur-xl">
      <h2 className="text-center text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
        Successful startups with SOLaunch
      </h2>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center space-x-16 py-8">
          {[...projects, ...projects].map((project, idx) => (
            <motion.div
              key={`${project.name}-${idx}`}
              className="flex flex-col items-center space-y-4 min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-cyan-300">{project.name}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 flex items-center space-x-16 py-8">
          {[...projects, ...projects].map((project, idx) => (
            <motion.div
              key={`${project.name}-${idx}-clone`}
              className="flex flex-col items-center space-y-4 min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-cyan-300">{project.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
