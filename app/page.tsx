import Header from '@/components/Header'
import PriceMarquee from '@/components/PriceMarquee'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import StartupIdeas from '@/components/StartupIdeas'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0118]">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-10">
        <Header />
        <div className="bg-white/5 backdrop-blur-sm">
          <PriceMarquee />
        </div>
        <Hero />
        <Marquee />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StartupIdeas />
        </div>
        <Footer />
      </div>
    </main>
  )
}
