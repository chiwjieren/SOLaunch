'use client'

import Script from 'next/script'

export default function PriceMarquee() {
  return (
    <>
      <Script src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js" />
      <div className="border-y border-cyan-500/20">
        <gecko-coin-price-marquee-widget 
          locale="en"
          outlined="true"
          coin-ids="solana"
          initial-currency="usd"
          dark-mode="true"
        />
      </div>
    </>
  )
}
