import React from 'react'
import Carous from '../../Shared/Components/Carousel/Carous'
import StarBackground from '../../Shared/Components/Home/StarBackground'

function CarouselPage() {
    return (
        <>
            <div className='bg-black'>
                <div className=' '>
                    <StarBackground />
                </div>
                <div className=' '>
                    <Carous />
                </div>
            </div>
        </>
    )
}

export default CarouselPage
