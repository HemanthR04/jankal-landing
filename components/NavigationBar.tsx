import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
    return (
        <nav className='flex items-center justify-between px-4 md:px-16 py-4'>
            <div>
                <Image className='w-[60px] md:w-[72px]' src={'/assets/logo-gold.png'} alt='logo' width={72} height={72}></Image>
            </div>
            <div className='ml-16 hidden md:block'>
                <ul className='flex items-center gap-16 '>
                    <li className='text-secondary font-bold hover:text-white'><Link href={''}>Home</Link></li>
                    <li className='text-secondary font-bold hover:text-white'><Link href={''}>Properties</Link></li>
                    <li className='text-secondary font-bold hover:text-white'><Link href={''}>About Us</Link></li>
                    <li className='text-secondary font-bold hover:text-white'><Link href={''}>Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <button className='bg-secondary text-primary py-2 px-6 rounded-full font-bold hidden md:block'>Enquire Now</button>
            </div>
        </nav>
    )
}

export default NavigationBar