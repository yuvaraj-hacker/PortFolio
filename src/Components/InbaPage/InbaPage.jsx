import React, { useEffect } from 'react'
import InbaFoods from '../../Shared/Components/InbaFoods/InbaFoods'
import { textFlag } from 'cursor-effects';

function InbaPage() {
    useEffect(() => {
           const isMobile = window.matchMedia("(max-width: 768px)").matches;
   
           if (!isMobile) {
               const effect = new textFlag({
                   text: "Inba Foods",
                   color: ["#00B453"],
               });
   
               return () => effect.destroy();
           }
       }, []);
    return (
        <>
            <InbaFoods />
        </>
    )
}

export default InbaPage
