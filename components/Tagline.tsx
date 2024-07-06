'use client'
import { stylesWithCssVar } from "@/utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Tagline = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["70%", "-100%"]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.4]);

 
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72,0.75,0.78, 0.8, 0.9],
    [0, 0, 0, 1,1,1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  return (
    <motion.section
      style={stylesWithCssVar({
        "--scale": scale,
      })}
      ref={targetRef}
      className="mt-[50vh] flex h-[300vh] items-start justify-start"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] ]">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[8rem] text-heading text-secondary font-Satoshi font-bold tracking-tighter"
        >
          Building for eternity .
        </motion.p>

        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute font-bold font-InstrumentSerif left-1/2 top-1/2 text-[8.8rem]  leading-tight text-secondary"
        >
        JANKAL GROUP
         
        </motion.p>
        <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
        <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] " />
      </div>
    </motion.section>
  );
};