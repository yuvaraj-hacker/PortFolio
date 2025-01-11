import React, { useEffect } from 'react'
import ColorsMain from '../../Shared/Components/ColorsMontessori/ColorsMain'
import { textFlag } from 'cursor-effects';

function ColorsPage() {

   useEffect(() => {
          const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
          if (!isMobile) {
              const effect = new textFlag({
                  text: "Colors Montessori",
                  color: ["#FFCB02"],
              });
  
              return () => effect.destroy();
          }
      }, []);

    const pageData = {
        headerImage: '/assets/images/Fifth/colorsheader.png',
        name: 'COLORS MONTESSORI',
        category: 'Montessori Preschool and Early Education',
        description: 'Colors Montessori nurtures young minds with a holistic, child-centered learning approach in a vibrant environment.',
        services: 'Montessori-based education, interactive learning, and skill development programs for early childhood growth.',
        team: '2 specialists',
        country: 'United State',
        descriptionImage: '/assets/images/Fifth/colors.png'
    };
    return (
        <>
            <ColorsMain pageData={pageData} />
        </>
    )
}

export default ColorsPage
