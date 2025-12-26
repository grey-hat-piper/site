import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
import SliderBtns from './SliderBtns';


const Slider = () => {
  return (
    <Swiper className="bg-white shadow-2xl w-full max-w-[630px] h-[200px]">
        {/* slide 1 */}
        <SwiperSlide>
            <div className='px-12 md:pl-[60px] flex items-center gap-9 h-full'>
                {/* avatar img */}
                <div className='relative hidden md:flex w-[90px] h-[90px]'>
                    <Image src="/assets/img/testimonials/ave.jpg" 
                    fill className='object-contain'
                    quality={100} alt='' />
                </div>
                {/* text */}
                <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2'>
                    <p>
                        Beautiful work with outstanding brick designs that really stand out.
                    </p>
                    <p className='font-primary font-semibold text-primary'>Terry Jones</p>
                </div>
            </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
            <div className='px-12 md:pl-[60px] flex items-center gap-9 h-full'>
                {/* avatar img */}
                <div className='relative hidden md:flex w-[90px] h-[90px]'>
                    <Image src="/assets/img/testimonials/ave.jpg" 
                    fill className='object-contain'
                    quality={100} alt='' />
                </div>
                {/* text */}
                <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2'>
                    <p>
                        Thoughtful use of space and resources, resulting in a functional, well-executed project we’re very satisfied with.
                    </p>
                    <p className='font-primary font-semibold text-primary'>GLOBACHEM</p>
                </div>
            </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
            <div className='px-12 md:pl-[60px] flex items-center gap-9 h-full'>
                {/* avatar img */}
                <div className='relative hidden md:flex w-[90px] h-[90px]'>
                    <Image src="/assets/img/testimonials/ave.jpg" 
                    fill className='object-contain'
                    quality={100} alt='' />
                </div>
                {/* text */}
                <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2'>
                    <p>
                        Reliable and trustworthy, with results that exceeded my expectations.
                    </p>
                    <p className='font-primary font-semibold text-primary'>Emmanuel Brown</p>
                </div>
            </div>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide>
            <div className='px-12 md:pl-[60px] flex items-center gap-9 h-full'>
                {/* avatar img */}
                <div className='relative hidden md:flex w-[90px] h-[90px]'>
                    <Image src="/assets/img/testimonials/ave.jpg" 
                    fill className='object-contain'
                    quality={100} alt='' />
                </div>
                {/* text */}
                <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2'>
                    <p>
                        Great work that stayed within our budget without compromising quality.
                    </p>
                    <p className='font-primary font-semibold text-primary'>Abigail Hammond</p>
                </div>
            </div>
        </SwiperSlide>
        {/* slide 5 */}
        <SwiperSlide>
            <div className='px-12 md:pl-[60px] flex items-center gap-9 h-full'>
                {/* avatar img */}
                <div className='relative hidden md:flex w-[90px] h-[90px]'>
                    <Image src="/assets/img/testimonials/ave.jpg" 
                    fill className='object-contain'
                    quality={100} alt='' />
                </div>
                {/* text */}
                <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2'>
                    <p>
                        Exceeding expectations. On time, within budget and top quality work. Highly recommended!
                    </p>
                    <p className='font-primary font-semibold text-primary'>Grace</p>
                </div>
            </div>
        </SwiperSlide>
        {/* slider btns */}
        <SliderBtns />
    </Swiper>
  )
}

export default Slider;
