import React from 'react'
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from './ui/glowing-stars'
import { BackgroundRippleEffect } from './ui/background-ripple-effect'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <div id='about' className="flex relative h-full py-10 text-black bg-transparent flex-col  items-center justify-center antialiased">
      <BackgroundRippleEffect />
      <section className='flex flex-col gap-6 items-center w-3/4'>
        <SectionTitle title='AFRICA’S CHAOS, GAMIFIED' />
        <p className='text-xl red-log text-center'>
          From dodging danfos to leaping potholes, Japa turns everyday hustle into adrenaline-fueled runs.
          Compete in daily tournaments, rise on the leaderboards, and earn real rewards. This isn’t just a game, it’s a movement.</p>
      </section>
    </div>
  )
}

export default About