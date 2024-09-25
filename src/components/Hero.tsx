
import React from 'react'
import Particulas from './ui/Particulas';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <Particulas />
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-orange-600 text-bold max-w-80 font-bold' >Robin&apos;s Portfolio</h2>

          <TextGenerateEffect 
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='Transforming concepts into seamless User Experiences'
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white'>
            Hi, I&apos;m Robin, a FullStack Developer.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Hero
