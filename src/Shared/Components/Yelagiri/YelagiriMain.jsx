import React from 'react'
import Common from '../CommonSection/Common'

function YelagiriMain() {
    const pageData = {
        headerImage: '/assets/images/Third/yelagirihero.png',
        name: 'YELAGIRI GOLD HILL RESORT',
        category: 'Premium Resort and Holiday Destination',
        description: 'Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.',
        services: 'Luxurious accommodations, fine dining, event hosting, and recreational activities for an unforgettable experience.',
        team: '8 specialists',
        country: 'India',
        descriptionImage: '/assets/images/Third/yelagiri.png'
    };


    return (
        <>
            <section>
                <Common name={pageData.name}
                    headerImage={pageData.headerImage}
                    descriptionImage={pageData.descriptionImage}
                    category={pageData.category}
                    description={pageData.description}
                    services={pageData.services}
                    team={pageData.team}
                    country={pageData.country}
                   
                />

            </section>
        </>
    )
}

export default YelagiriMain
