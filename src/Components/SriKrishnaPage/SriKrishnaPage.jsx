import React, { useEffect } from 'react'
import Srikrishna from '../../Shared/Components/SriKrishna/Srikrishna'
import { textFlag } from 'cursor-effects';

function SriKrishnaPage() {
    useEffect(() => {
           const isMobile = window.matchMedia("(max-width: 768px)").matches;
   
           if (!isMobile) {
               const effect = new textFlag({
                   text: "Sri Krishna",
                   color: ["#D89C5C"],
               });
   
               return () => effect.destroy();
           }
       }, []);
    return (
        <>
            <Srikrishna />
        </>
    )
}

export default SriKrishnaPage
