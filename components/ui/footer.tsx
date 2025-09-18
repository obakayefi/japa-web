import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-5 flex flex-col gap-20 sm:gap-0 sm:flex-row items-center justify-between mt-20 text-black'>
      <Link href="#header">
        <Image
          alt='footer'
          objectFit='cover'
          src='/logo_black.svg'
          className='bg-transparent'
          width={200}
          height={200}
        />
      </Link>
      <p className='order-3 sm:order-2'>
        ©2025 Japa by Kayefi Studios
      </p>

      <section className='flex order-2 sm:order-3 gap-10'>
        <Image
          alt='footer'
          objectFit='cover'
          src='/twitter_icon.svg'
          className='bg-transparent'
          width={50}
          height={200}
        />
        <Image
          alt='footer'
          objectFit='cover'
          src='/ig_icon.svg'
          className='bg-transparent'
          width={40}
          height={200}
        />
        <Image
          alt='footer'
          objectFit='cover'
          src='/youtube_icon.svg'
          className='bg-transparent'
          width={65}
          height={200}
        />
      </section>
    </div>
  )
}

export default Footer