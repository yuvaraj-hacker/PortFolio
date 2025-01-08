import React, { useEffect } from 'react'
import Vivid from '../../Shared/Components/VividConsultant/Vivid'
import { textFlag } from 'cursor-effects';

function VividPage() {
    useEffect(() => {
        const effect = new textFlag({
            text: "Vivid Engineering Consultants",
            color: ["#FF0000"],
        });
        return () => effect.destroy();
    }, []);
    return (
        <>
            <Vivid />
        </>
    )
}

export default VividPage
