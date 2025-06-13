'use client'

import Image from 'next/image';
import logoImg from '@/assets/logo.png';

export const Header = () => {
    return (
        <div className="w-full h-20 fixed top-2 left-1 flex items-center z-50 ">
            <Image
                src={logoImg}
                alt="Logo"
                className="object-contain ml-4"
                width={150}
                height={50} 
            />
        </div>
    )
}