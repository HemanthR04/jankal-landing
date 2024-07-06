'use client'
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import ShortIntro from "@/components/ShortIntro";
import { Tagline } from "@/components/Tagline";
import WhatWeDo from "@/components/WhatWeDo";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {
  const [lenisRef, setlenisRef] = useState<Lenis | null>(null)
  const [rafState, setrafState] = useState(0)

  useEffect(() => {

    const scroller = new Lenis();
    let rf;

    function raf(time: number){
      scroller.raf(time);
      requestAnimationFrame(raf);
    }
    rf = requestAnimationFrame(raf);
    setrafState(rf);
    setlenisRef(scroller);

    return()=>{
      if(lenisRef){
        cancelAnimationFrame(rafState);
        lenisRef.destroy();
      }
    }
  }, [])
  return (
    <>
    <div className="">
    <NavigationBar/>
    <HeroSection/>
    <Tagline/>
    <ShortIntro/>
    <WhatWeDo/>
    </div>
   
    </>
  );
}
