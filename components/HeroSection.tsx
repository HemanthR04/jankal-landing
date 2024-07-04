'use client'
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import ProjectDetails from './ProjectDetails';

const HeroSection = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);


    return (
        <>
            <div className="hero-container text-secondary">
                <div className=' flex flex-col gap-4 mt-[100px]'>
                    <h1 className='text-5xl italic text-center tracking-normal font-InstrumentSerif'>Experience Luxury Living with Bangalore&apos;s Top Properties</h1>
                    <p className='text-2xl text-center font-Satoshi'>Expertly Curated Listings Tailored to Your Unique Lifestyle Needs</p>
                    <button className='w-[150px] bg-secondary text-primary py-2 rounded-full font-Satoshi font-bold mx-auto'>Contact Us</button>
                </div>
                <motion.section
                    style={{}}
                    ref={targetRef}
                    className='relative'>
                    <motion.div style={{ scale,  }} className='video-container w-[90%] mx-auto  '>
                        <video autoPlay muted loop className='rounded-lg' >
                            <source src="/assets/InteriorVideo.mp4" type="video/mp4" />
                        </video>
                        <h1
                        className=' absolute text-4xl font-Satoshi font-bold top-10 left-20 z-20 text-secondary'
                    >
                        Jankal Orchids
                    </h1>
                    <button className='font-Satoshi font-bold px-4 py-2 rounded-full absolute  bg-secondary text-primary bottom-10 right-10'>Enquire Now</button>
                    </motion.div>
                    <ProjectDetails/>
                </motion.section>
                
            </div>
        </>
    );
}

export default HeroSection;