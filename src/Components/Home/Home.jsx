import React, { useEffect, useState } from 'react'
import HomePage from '../../Shared/Components/Home/HomePage'

function Home() {
    const [swiperHeight, setSwiperHeight] = useState(0);
    useEffect(() => {
        const updateHeight = () => {
            const headerHeight = 60;
            setSwiperHeight(window.innerHeight - headerHeight);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);



    return (
        <>
            <HomePage swiperHeight={swiperHeight} />
        </>
    )
}

export default Home
