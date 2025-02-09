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

    const scale = useTransform(scrollYProgress, [0, 0.6], [0.7, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);


    return (
        <>
            <div className="hero-container text-secondary">
                <div className=' flex flex-col gap-4 mt-[40px] md:mt-[80px]'>
                    <h1 className='text-7xl font-bold tracking-wide text-center font-InstrumentSerif'>JANKAL ORCHIDS</h1>
                    <p className='text-sm px-16 md:text-xl text-center font-Satoshi'>Dive into Our Latest Residential Project and <br></br>Elevate Your Living Experience.</p>
                    <button className='w-[150px] bg-secondary text-primary py-2 rounded-full font-Satoshi font-bold mx-auto'>Learn More</button>
                </div>
                <motion.section
                    style={{}}
                    ref={targetRef}
                    className='relative'>
                    <motion.div style={{ scale, }} className='video-container  mx-auto '>
                        <video autoPlay muted loop className='' >
                            <source src="/assets/InteriorVideo.mp4" type="video/mp4" />
                        </video>


                    </motion.div>
                    <ProjectDetails />
                </motion.section>

            </div>
        </>
    );
}

export default HeroSection;