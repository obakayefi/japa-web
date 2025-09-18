import Image from 'next/image'
import React from 'react'
import SectionTitle from './SectionTitle'

// When this shrinks to a mobile, pull out those nice Carousel Cards and also populate them

const HowItWorks = () => {
  return (
    <div id='howToPlay' className='bg-[#FFFCF7] flex items-center flex-col text-black rounded-xl p-4 pb-15'>
      <SectionTitle title='HOW TO PLAY' />

      <div className='flex flex-col sm:gap-20 mt-10 justify-around'>
        {/* FIRST TWO */}
        <section className='flex flex-col sm:flex-row'>
          <section className='bg-transparent p-2 rounded-lg'>
            <Image
              alt='screen'
              objectFit='cover'
              src='/select-state-screen.svg'
              className='bg-transparent'
              width={800}
              height={200}
            />
            <section className='mt-6'>
              <h3 className='text-3xl'>Pick house</h3>
              <p>Enter a house to see a collection of rooms you can join</p>
            </section>
          </section>

          <section className='bg-transparent p-2 rounded-lg'>
            <Image
              alt='screen'
              objectFit='cover'
              src='/select-room-screen.svg'
              className='bg-transparent'
              width={800}
              height={200}
            />
            <section className='mt-6'>
              <h3 className='text-3xl'>Enter room</h3>
              <p>Pay the room’s entrance fee to enter the room and start competing to dominate the leaderboard</p>
            </section>
          </section>
        </section>

        {/* SECOND HALF */}
        <section className='flex flex-col sm:flex-row'>
          <section className='bg-transparent p-2 rounded-lg'>
            <Image
              alt='screen'
              objectFit='cover'
              src='/gameplay.png'
              className='bg-transparent'
              width={800}
              height={400}
            />
            <section className='mt-6'>
              <h3 className='text-3xl'>Compete</h3>
              <p>Enter a house to see a collection of rooms you can join</p>
            </section>
          </section>

          <section className='bg-transparent p-2 rounded-lg'>
            <Image
              alt='screen'
              objectFit='cover'
              src='/leaderboard.svg'
              className='bg-transparent'
              width={800}
              height={200}
            />
            <section className='mt-6'>
              <h3 className='text-3xl'>Get rewards</h3>
              <p>If before the next payout window you are able to finish among the top 10 players rewards would be allotted to you</p>
            </section>
          </section>
        </section>

      </div>
    </div>
  )
}

export default HowItWorks


{/* <section className='bg-black p-2 rounded-lg'>
          <Image
            alt='screen'
            objectFit='cover'
            src='/select-state-screen.svg'
            className='bg-black'
            width={800}
            height={200}
          />
          <h3 className='bg-black text-slate-400 p-2'>Pick your state</h3>
        </section> */}
