import Stripes from "@/components/design/Stripes";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import ShortIntro from "@/components/ShortIntro";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="">
    <NavigationBar/>
    <HeroSection/>
    <Stripes/>
    <ShortIntro/>
    </div>
   
    </>
  );
}
