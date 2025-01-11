import React, { useEffect } from 'react'
import DglHolidays from '../../Shared/Components/DGL/DglHolidays'
import { textFlag } from 'cursor-effects';

function DGLholidaysPage() {
    useEffect(() => {
           const isMobile = window.matchMedia("(max-width: 768px)").matches;
   
           if (!isMobile) {
               const effect = new textFlag({
                   text: "DGL Holidays",
                   color: ["#FCCE38"],
               });
   
               return () => effect.destroy();
           }
       }, []);
    const pageData = {
        headerImage: '/assets/images/nine/dgll.png',
        name: 'DGL HOLIDAYS',
        category: 'Travel and Tourism Services',
        description: 'Tailored holiday packages and exceptional travel experiences.',
        services: 'Custom travel planning, accommodations, transportation, and guided tours.',
        team: '5 specialists',
        country: 'India',
        descriptionImage: '/assets/images/nine/dglherosection.png'
    };
    return (
        <>
            <DglHolidays pageData={pageData} />
        </>
    )
}

export default DGLholidaysPage
