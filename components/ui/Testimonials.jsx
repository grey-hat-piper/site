import React from 'react'
import Button from './Button'
import Image from 'next/image';
import Slider from './Slider';
import Pretitle from './Pretitle';

const Testimonials = () => {
  return (
    <section className='pt-16 xl:pt-32'>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <div className="flex-1 max-w-[484px] xl:pt[54px] mb-12 xl:mb-0">
            <Pretitle text="Testimonials" />
            <h2 className="h2 mb-6">Built On Trust, Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commercial spaces, our clients share how our craftsmanship and professionalism brought their projects to life.
            </p>
            <Button text="Work with us" />
          </div>
          {/* Img & slider */}
          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end">
            <div className='relative hidden xl:flex xl:w-[570px] xl:h-[580px]'>
              <Image
              src="/assets/img/testimonials/img.gif"
              fill
              className='object-cover'
              quality={100}
              alt='' />
            </div>
            <div className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max">
              {/* quote icon img */}
              <Image 
              src="/assets/img/testimonials/quote.svg"
              width={54}
              height={36}
              alt=''
              className='absolute z-20 -top-4 left-[60px]' />
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
