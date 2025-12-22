import React from 'react'
import Pretitle from './Pretitle'
import Image from 'next/image'
import Button from './Button'
import CanvaEmbed from './CanvaEmbed'

const About = () => {
  return (
    <div className='pt-16 xl:pt-32' id='about'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className='flex-1'>
            <div className='max-w-[540px]'>
              {/* pretitle */}
              <Pretitle text="About us" />
              <h2 className="h2 mb-6">Built Right. Managed Well.</h2>
              <p className='mb-11 '>
                We are a Ghana-based construction and facility management company delivering reliable solutions in <span className='italic font-semibold text-primary'>Building Construction, Civil Works, Electrical and Plumbing Works, Materials Supply, Bricks and Blocks Production, and Property Management</span>.
                We serve individuals, businesses, citizens, and clients abroad who value quality, transparency, and professional execution. By combining skilled local expertise with structured project management, we ensure every project meets high standards, from foundation to finish.
                Whether you are building, upgrading, or managing a property, we provide dependable support, clear communication, and results you can trust before, during, and long after completion.
                We build with purpose, manage with care, and deliver spaces meant to last.
              </p>
              <div className='w-max flex flex-col text-right mb-10'>
                <Image 
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt='CEO autograph'
                />
                <p>Company CEO</p>
              </div>
              {/* btn */}
              <Button text="Contact Us" />
            </div>
          </div>
          {/* image */}
          <div className='flex-1 xl:flex xl:justify-center'>
            <div className="xl:w-[444px] xl:h-[493px] md:w-[644px] md:h-auto relative">
              {/* bg */}
              <div className='animate-pulse hidden xl:flex w-[444px] xl:h-[253px] bg-primary absolute -left-4 -z-10'>
              </div>
              <section className="container py-4 object-cover">
                <CanvaEmbed />
              </section>
              {/* <Image 
              src={"/assets/img/about/img.jpg"} 
              width={444}
              height={493}
              alt=''
              className='object-cover' 
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
