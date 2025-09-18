import React from 'react'

type Props = {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className='font-barlow-condensed text-2xl sm:text-4xl text-center'><span className='text-6xl sm:text-8xl'>{title.charAt(0)}</span>{title.slice(1)}</h2>
  )
}

export default SectionTitle