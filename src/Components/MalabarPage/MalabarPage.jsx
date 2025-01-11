import React, { useEffect } from 'react'
import Malabar from '../../Shared/Components/Malabar/Malabar'
import { textFlag } from 'cursor-effects';

function MalabarPage() {
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
            const effect = new textFlag({
                text: "Malabar Indian Groceries",
                color: ["#FE7826"],
            });

            return () => effect.destroy();
        }
    }, []);
    return (
        <>
            <Malabar />
        </>
    )
}

export default MalabarPage
