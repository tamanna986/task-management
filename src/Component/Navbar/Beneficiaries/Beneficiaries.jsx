import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const Beneficiaries = () => {
    return (
        <div>
            <div className="w-60 md:w-72 mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-green-900 text-center my-20  border-0 border-l-4 border-orange-700 ">User Beneficiaries</h1></div>

            <div className='mb-20'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                   
                        
                            <h2 className="text-2xl mb-5 font-bold text-white">Business Analysts</h2>
                            <p className='text-sm'>Tailored tools and features to streamline workflow, manage complex tasks, and enhance analytical processes.</p>
                       
                    
                </div></SwiperSlide>
                <SwiperSlide>
                <div>
                   
                        
                   <h2 className="text-2xl mb-5 font-bold text-orange-400">Project Managers</h2>
                   <p className='text-sm'>Intuitive project management tools for coordinating tasks, tracking progress, and overseeing project timelines.</p>
              
           
       </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                   
                        
                   <h2 className="text-2xl mb-5 font-bold text-white">Entrepreneur</h2>
                   <p className='text-sm'>Adaptable platform to manage priorities and boost productivity, catering to individual work styles.</p>
              
           
       </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default Beneficiaries;