"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function HeroGallery() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-primary dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    src:"/assets/Orchid1.jpeg"
  },
  {
    src:"/assets/Orchid2.jpeg"
  },
  {
    src:"/assets/Orchid3.jpeg"
  },
  {
    src:"/assets/Orchid4.jpeg"
  },
  {
    src:"/assets/Orchid5.jpeg"
  },
  {
    src:"/assets/Orchid6.jpeg"
  },
  {
    src:"/assets/Orchid7.jpeg"
  },
  {
    src:"/assets/Orchid8.jpeg"
  },
  
  
];

export default HeroGallery