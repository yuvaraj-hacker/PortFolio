import React from 'react'
import Common from '../CommonSection/Common'

function JobezzyMain() {
    const pageData = {
        headerImage: '/assets/images/Second/sizes.png',
        name: 'JOBEZZY',
        category: 'Job Posting and Recruitment Platform',
        description: 'A streamlined platform connecting job seekers with employers for diverse opportunities.',
        services: 'Job listings, employer profiles, candidate applications, and resume management.',
        team: '3 specialists',
        country: 'India',
        descriptionImage: '/assets/images/Second/jobezzehero.png'
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

export default JobezzyMain
