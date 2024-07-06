
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'


const WhatWeDo = () => {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9], [0.8, 1]);
  return (
    <motion.section
      style={{}}
      ref={targetRef}
    >
      <motion.div style={{ }} className='bg-secondary w-full h-screen flex relative'>
      
      <div className='w-full h-screen z-20 '>
        <ul className=' transition-all '>
        <li className='text-primary font-Satoshi leading-12 text-7xl font-bold py-4 px-8 hover:bg-primary hover:text-secondary'>CONSTRUCTION</li>
        <li className='text-primary font-Satoshi leading-12 text-7xl font-bold py-4 px-8 hover:bg-primary hover:text-secondary'>DEVELOPMENT</li>
        <li className='text-primary font-Satoshi leading-12 text-7xl font-bold py-4 px-8 hover:bg-primary hover:text-secondary'>PLANNING</li>
        <li className='text-primary font-Satoshi leading-12 text-7xl font-bold py-4 px-8 hover:bg-primary hover:text-secondary'>JOINT VENTURE DEVELOPMENTS</li>
        <li className='text-primary font-Satoshi leading-12 text-7xl font-bold py-4 px-8 hover:bg-primary hover:text-secondary'>LAND DEVELOPMENT SERVICES</li>
        
        </ul>
      </div>
      
      


      </motion.div>

    </motion.section>

    )
}

export default WhatWeDo