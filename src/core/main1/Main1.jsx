

import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';

function Main1() {
    const headerRef = useRef(null);
    const location = useLocation();
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
        const handleResize = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };
        const handleScroll = () => {
            if (window.scrollY > headerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [headerHeight]);

    const getHeaderStyles = () => {
        switch (location.pathname) {
            case '/kiranaa-bazaar':
                return { bgColor: '#02AC4E', textColor: 'text-white', name: 'KIRANAA BAZAAR' };
            case '/jobezzy':
                return { bgColor: '#FFC000', textColor: 'text-white', name: 'JOBEZZY' };
            case '/yelagiri-gold-hill-resort':
                return { bgColor: '#02AC4E', textColor: 'text-white', name: 'YELAGIRI GOLD HILL RESORT' };
            case '/folsum-pulse':
                return { bgColor: '#02AC4E', textColor: 'text-white', name: 'FOLSUM PULSE' };
            case '/colors-montessori':
                return { bgColor: '#E63D3D', textColor: 'text-white', name: 'COLORS MONTESSORI' };
            case '/vivid-engineering-consultants':
                return { bgColor: '#FF0000', textColor: 'text-white', name: 'VIVID ENGINEERING CONSULTANTS' };
            case '/inba-foods':
                return { bgColor: '#00B453', textColor: 'text-white', name: 'INBA FOODS EAT RIGHT' };
            case '/sri-krishna':
                return { bgColor: '#D89C5C', textColor: 'text-white', name: 'SRI KRISHNA ' };
            case '/dglholidays':
                return { bgColor: '#FCCE38', textColor: 'text-white', name: 'DGL HOLIDAYS' };
            default:
                return { bgColor: '#02AC4E', textColor: 'white' };
        }
    };

    const { bgColor, textColor, name } = getHeaderStyles();

    return (
        <div >

            <div ref={headerRef} style={{ height: '60px', backgroundColor: bgColor, }}
                className={`flex  justify-between px-3 items-center fixed w-full z-50 top-0 transition-all  duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}  >
                <div>
                </div>
                <span className={`text-lg md:text-4xl font-bold ${textColor}`}>
                    {name}
                </span>
                <Link to='/' >
                    <div className='   '>
                        <button className='btn-6 custom-btn   '>
                            <i className="fi fi-ts-house-chimney font-bold text-2xl text-white flex justify-center items-center"></i>
                        </button>
                    </div>
                </Link>
            </div>

            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Main1;
