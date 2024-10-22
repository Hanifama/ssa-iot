"use client";

import React, { useState, useEffect } from 'react';
import { RiMenuLine, RiArrowRightUpLine, RiLoginBoxLine } from 'react-icons/ri';

import Link from 'next/link';
import headerData from '@/lib/mocks/headerData.json';
import CustomButton from '@/components/_shared/CusctomBotton/Index';

const NavBar: React.FC = () => {
    const [scroll, setScroll] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            if (typeof window !== 'undefined' && window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`py-4 px-4 fixed top-0 left-0 right-0 z-10 transition-colors duration-300 ${scroll ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="nav__logo">
                    <Link href={headerData.navigation.logo.link} className="text-2xl font-bold text-foreground">
                        {headerData.navigation.logo.text}<span className="text-accent">{headerData.navigation.logo.accent}</span>
                    </Link>
                </div>
                <div className="nav__menu__btn text-3xl text-foreground cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    <RiMenuLine />
                </div>
                <ul className={`hidden md:flex items-center space-x-6`}>
                    {headerData.navigation.menuItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                className="relative text-foreground transition-all ease-in-out duration-300 hover:text-accent transform hover:scale-105"
                            >
                                {item.label}
                                <span
                                    className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all ease-in-out duration-500 will-change-width hover:w-full"
                                ></span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <CustomButton
                            redirectTo="/authentication"
                            className="btn bg-accent text-white border border-dark px-4 py-2 rounded-xl hover:bg-secondary transition-colors transform hover:scale-105"
                            label={headerData.navigation.loginButton.label}
                            icon={RiLoginBoxLine}
                        />
                    </li>
                </ul>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md">
                    {headerData.navigation.menuItems.map(item => (
                        <li key={item.label}>
                            <Link href={item.href} className="relative text-foreground transition-all hover:text-accent hover:underline transform hover:scale-105">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <CustomButton
                            className="btn bg-accent text-white border border-dark px-4 py-2 hover:bg-secondary transition-colors transform hover:scale-105"
                            label={headerData.navigation.loginButton.label}
                            icon={RiArrowRightUpLine}
                        />
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
