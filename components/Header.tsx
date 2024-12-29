'use client'

import { useState, useEffect } from 'react'
import { Connection, PublicKey } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const { publicKey, connected } = useWallet()
  const [balance, setBalance] = useState<number | null>(null)

  useEffect(() => {
    if (publicKey) {
      const connection = new Connection('https://api.mainnet-beta.solana.com')
      connection.getBalance(publicKey).then((bal) => {
        setBalance(bal / 1000000000)
      })
    }
  }, [publicKey])

  return (
    <motion.header 
      className="flex justify-between items-center p-6 bg-opacity-50 backdrop-blur-md bg-purple-900/30 rounded-b-none"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center space-x-3"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/SOLaunch.png"
          alt="SOLaunch Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          SOLaunch
        </span>
      </motion.div>
      <div className="flex items-center space-x-4">
        {connected && balance !== null && (
          <motion.div 
            className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 px-6 py-3 rounded-full border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-cyan-300">{balance.toFixed(2)} SOL</span>
          </motion.div>
        )}
        <WalletMultiButton className="!bg-gradient-to-r from-cyan-500 to-purple-500 !hover:from-cyan-600 !hover:to-purple-600 transition-all duration-300 !rounded-full !px-6 !py-3 !font-bold !text-white shadow-lg hover:shadow-xl border border-cyan-500/30" />
      </div>
    </motion.header>
  )
}
