'use client'

import Image from 'next/image';

export const Header = () => {
    return (
        <div className="w-full h-20 fixed top-2 left-1 flex items-center z-50 ">
            <Image
                src={'/logo.png'}
                alt="Logo"
                className="object-contain ml-4"
                width={150}
                height={50} 
            />
        </div>
    )
}