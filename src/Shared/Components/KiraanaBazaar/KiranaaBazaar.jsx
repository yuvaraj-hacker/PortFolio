import React from 'react'
import Common from '../CommonSection/Common'

function KiranaaBazaar() {
    const pageData = {
        headerImage: '/assets/images/one/hero.png',
        name: 'KIRANAA BAZAAR',
        category: 'Online Grocery and Fresh Produce Marketplace',
        description: 'A convenient platform to buy fresh vegetables, fruits, flowers, and essentials online.',
        services: 'Doorstep delivery of fresh produce with quality assurance and competitive pricing.',
        team: '5 specialists',
        country: 'United States',
        descriptionImage: '/assets/images/one/origin.png'
    };


    return (
        <>
            <section>
                <Common name={pageData.name} headerImage={pageData.headerImage} descriptionImage={pageData.descriptionImage} category={pageData.category} description={pageData.description} services={pageData.services} team={pageData.team} country={pageData.country} />
            </section>
        </>
    )
}

export default KiranaaBazaar
