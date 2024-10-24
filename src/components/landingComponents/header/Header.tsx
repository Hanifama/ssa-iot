import React from 'react';

import headerData from '@/lib/mocks/headerData.json'; 
import { HeaderTypes } from '@/lib/types/header';
import NavBar from '@/components/landingComponents/navbar/Index';
import CustomButton from '@/components/_shared/CusctomBotton/Index';
import Image from 'next/image';


const Header: React.FC = () => {
    return (
        <header id="home" className="relative">
            <NavBar />
            <div className="header__content bg-gray-200 flex flex-col md:flex-row items-center justify-between w-full h-screen">
                <HeaderContent />
                <HeaderImage />
            </div>
        </header>
    );
};

const HeaderContent: React.FC = () => {    
    const { title, description, buttons}: HeaderTypes = headerData.header;

    return (
        <div className="md:w-1/2 flex flex-col justify-center px-6 text-center md:text-left mt-20 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                {title}
            </h1>
            <p className="text-base md:text-lg text-gray-500 mb-8">
                {description}
            </p>
            <div className="header__btns flex flex-row justify-center md:justify-start space-x-4">
                {buttons.map((button, index) => {                  
                    return (
                        <CustomButton key={index} className={button.className} label={button.label} />
                    );
                })}
            </div>
        </div>
    );
};

const HeaderImage: React.FC = () => {
    const { headerImage } = headerData.header;

    return (
        <div className="header__image md:w-1/2 h-full relative">
            
            <div className="w-full h-[50vh] md:h-[100vh] relative">
                <Image
                    src={headerImage.src}
                    alt={headerImage.alt}
                    fill 
                    style={{ objectFit: 'cover' }} 
                    quality={75}
                />
            </div>
        </div>
    );
};

export default Header;
