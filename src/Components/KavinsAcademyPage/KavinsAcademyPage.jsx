import React, { useEffect } from 'react'
import KavinsAcademy from '../../Shared/Components/KavinsAcademy/KavinsAcademy'
import { followingDotCursor } from 'cursor-effects';

export default function KavinsAcademyPage() {

   useEffect(() => {
          const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
          if (!isMobile) {
              const effect = new  followingDotCursor({
                  text: "Kavins Academy",
                  color: ["#f5c231"],
              });
  
              return () => effect.destroy();
          }
      }, []);

  const instituteInfo = [
    { title: "Category", description: "Educational Institution & Coaching Center" },
    { title: "Description", description: "Premier institute offering expert coaching, skill development, and career guidance." },
    { title: "Services", description: "Competitive exam coaching, higher education counseling, online/offline learning, and mentorship." },
    { title: "Team", description: "5 specialists" },
    { title: "Country", description: "India" }
  ];
  
  return (
    <>
    <KavinsAcademy instituteInfo={instituteInfo} />
    </> 
  )
}
