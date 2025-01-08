import React, { useEffect } from 'react'
import FolsumMain from '../../Shared/Components/Folsum/FolsumMain'
import { textFlag } from 'cursor-effects';

function FolsumPage() {

    useEffect(() => {
        const effect = new textFlag({
            text: "Folsum Pulse",
            color: ["#FC9D4A"],
        });
        return () => effect.destroy();
    }, []);
    return (
        <>
            <FolsumMain />
        </>
    )
}

export default FolsumPage
