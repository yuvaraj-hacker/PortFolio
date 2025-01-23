import React, { useEffect } from 'react'
import JobezzyMain from '../../Shared/Components/Jobezzys/JobezzyMain'
import {  followingDotCursor } from 'cursor-effects';

function JobezzyPage() {
    useEffect(() => {
           const isMobile = window.matchMedia("(max-width: 768px)").matches;
   
           if (!isMobile) {
               const effect = new  followingDotCursor({
                   text: "Jobezzy",
                   color: ["#FFC000"],
               });
   
               return () => effect.destroy();
           }
       }, []);
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

            <JobezzyMain pageData={pageData} />
        </>
    )
}

export default JobezzyPage
