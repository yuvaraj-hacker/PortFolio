import React, { useEffect } from 'react'
import Valluvas from '../../Shared/Components/Valluvas/Valluvas'
import { textFlag } from 'cursor-effects';

function ValluvasPage() {
    useEffect(() => {
        const effect = new textFlag({
            text: "Valluva's",
            color: ["#F4E316"],
        });
        return () => effect.destroy();
    }, []);
    return (
        <>
            <Valluvas />
        </>
    )
}

export default ValluvasPage
