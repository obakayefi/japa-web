import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute items-center top-0 left-0 w-full p-5 flex justify-between  z-50'>
        <Image 
            src={'/logo_white.svg'}
            alt='logo'
            width={75}
            height={100}
        />

        <section className='flex hidden md:flex gap-10'>
            <Link href="#about">About</Link>
            <Link href="#howToPlay">How to Play</Link>
            <Link href="#futureRoadmap">Future Roadmap</Link>
        </section>
    </div>
  )
}

export default Navbar