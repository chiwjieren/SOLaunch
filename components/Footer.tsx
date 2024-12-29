'use client'

import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Twitter, Linkedin, Youtube, DiscIcon as Discord } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0118] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Social Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              SOLaunch
            </motion.div>
            <p className="text-sm text-gray-400 mb-6">The web3 development platform for launching your next big idea on Solana</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Discord className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Launchpad</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Token Creator</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">NFT Platform</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">DAO Tools</Link></li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Developers</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Status</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Supercharge your inbox</h3>
            <p className="text-sm text-gray-400 mb-4">Sign up for our developer newsletter.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-purple-900/30 border-purple-500/50 text-white placeholder:text-gray-500"
              />
              <Button 
                className="bg-gradient-to-r from-purple-500 to-green-500 text-white hover:from-purple-600 hover:to-green-600"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-purple-900/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 SOLaunch, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
