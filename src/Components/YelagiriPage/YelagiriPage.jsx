import React, { useEffect, useRef, useState } from 'react'
import YelagiriMain from '../../Shared/Components/Yelagiri/YelagiriMain'
import {  followingDotCursor } from 'cursor-effects';

function YelagiriPage() {
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
            const effect = new  followingDotCursor({
                text: "Yelagiri Gold Hill Resort",
                color: ["#02AC4E"],
            });

            return () => effect.destroy();
        }
    }, []);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <>
            <YelagiriMain isInView={isInView} sectionRef={sectionRef} />
        </>
    )
}

export default YelagiriPage
