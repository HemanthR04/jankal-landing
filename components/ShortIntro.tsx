'use client'
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'


const ShortIntro = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [0.7, 1]);
  return (
    
       <motion.section
       style={{}}
       ref={targetRef}
       className='relative'>
       <motion.div style={{ scale, }} className='video-container  mx-auto '>
       <div className='bg-secondary w-full h-screen flex relative rounded-t-[34.2px]'>
        
        <div className='w-1/2 h-screen z-20 '>
          <h1 className='text-3xl text-primary font-Satoshi font-bold p-8 m-8'>[ A SHORT INTRODUCTION ]</h1>
        </div>
        <div className='w-1/2 h-screen z-20'>
          <p className='text-primary font-Satoshi leading-8 text-lg p-8 m-8'>Jankal Group stands at the forefront of the construction and development industry, offering unparalleled expertise in construction, meticulous planning, innovative joint venture developments, and comprehensive land development services. With a commitment to quality and excellence, Jankal Group transforms visionary projects into tangible realities, ensuring that every detail is crafted to perfection. Our team of seasoned professionals collaborates closely with clients to deliver customized solutions that meet their unique needs and aspirations. Choose Jankal Group to experience the pinnacle of innovation, reliability, and exceptional service in every project we undertake. Let us help you build your dreams.</p>
        </div>
    </div>

       </motion.div>
      
   </motion.section>
  )
}

export default ShortIntro