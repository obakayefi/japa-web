"use client"
import React from 'react'
import Navbar from './Navbar'
import Wishlist from './Wishlist'

const Header = () => {

  return (
    <div id='header' className='h-[80vh] relative flex flex-col px-10 gap-4 justify-center items-center red-log header-bg'>
      <Navbar />
      <h1 className='text-5xl font-bold text-center text-white'>Run. Win. Repeat.</h1>
      <p className='text-center text-white text-lg sm:w-2/3'>
        The 3D African-inspired endless runner
        where Lagos traffic meets survival mode.
        Built by <strong>Kayefi Studios</strong>, merging culture,
        chaos, and cash rewards.
      </p>
      <Wishlist />
    </div>
  )
}

export default Header
