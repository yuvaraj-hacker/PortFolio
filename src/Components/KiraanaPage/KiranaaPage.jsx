import React, { useEffect } from 'react'
import KiranaaBazaar from '../../Shared/Components/KiraanaBazaar/KiranaaBazaar'
import {  followingDotCursor } from 'cursor-effects';

function KiranaaPage() {
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
            const effect = new  followingDotCursor({
                text: "Kiranaa Bazaar",
                color: ["#00B75E"],
            });

            return () => effect.destroy();
        }
    }, []);
    const pageData = {
        headerImage: '/assets/images/one/hero.png',
        name: 'KIRANAA BAZAAR',
        category: 'Online Grocery and Fresh Produce Marketplace',
        description: 'A convenient platform to buy fresh vegetables, fruits, flowers, and essentials online.',
        services: 'Doorstep delivery of fresh produce with quality assurance and competitive pricing.',
        team: '5 specialists',
        country: 'United States',
        descriptionImage: '/assets/images/one/origin.png',

    };
    return (
        <>
            <section className='kiranaa'>
                <KiranaaBazaar pageData={pageData} />
            </section>
        </>
    )
}

export default KiranaaPage
