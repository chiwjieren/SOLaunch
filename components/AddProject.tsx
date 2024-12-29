'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ProjectFormData {
  name: string
  description: string
  goal: number
}

interface AddProjectProps {
  onAddProject: (project: ProjectFormData) => void
}

export default function AddProject({ onAddProject }: AddProjectProps) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [formData, setFormData] = useState<ProjectFormData>({
    name: '',
    description: '',
    goal: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: name === 'goal' ? parseFloat(value) : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddProject(formData)
    setFormData({ name: '', description: '', goal: 0 })
    setIsFormVisible(false)
  }

  return (
    <div className="mb-10">
      <motion.button
        className="bg-gradient-to-r from-purple-500 to-green-500 text-white font-bold py-3 px-6 rounded-full hover:from-purple-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        onClick={() => setIsFormVisible(!isFormVisible)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isFormVisible ? 'Cancel' : 'Add New Project'}
      </motion.button>

      {isFormVisible && (
        <motion.form
          className="mt-6 bg-purple-900/30 backdrop-blur-md p-6 rounded-lg border border-purple-500/50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-purple-200">
              Project Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-purple-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium mb-1 text-purple-200">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-purple-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="goal" className="block text-sm font-medium mb-1 text-purple-200">
              Funding Goal (SOL)
            </label>
            <input
              type="number"
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-purple-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              required
              min="0"
              step="0.01"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-green-500 text-white font-bold py-2 px-4 rounded-full hover:from-purple-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Project
          </motion.button>
        </motion.form>
      )}
    </div>
  )
}
