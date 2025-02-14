import React, { useEffect } from 'react' 
import { followingDotCursor } from 'cursor-effects';
import BodyRepair from '../../Shared/Components/BodyRepair/BodyRepair';

export default function BodyRepairPage() {

   useEffect(() => {
          const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
          if (!isMobile) {
              const effect = new  followingDotCursor({
                  text: "Auto Repair and Body Shop",
                  color: ["#ca0303"],
              });
  
              return () => effect.destroy();
          }
      }, []);

  const herosecinfo = [
    { title: "Category", description: "Auto Repair and Body Shop" },
    { title: "Description", description: "Expert auto body repair and restoration with ASE-certified technicians ensuring top-quality service." },
    { title: "Services", description: "Engine diagnostics, transmission repairs, brake services, A/C repairs, electrical work, and tire maintenance." },
    { title: "Team", description: "5 specialists" },
    { title: "Country", description: "US" }
  ];
  
  return (
    <>
    <BodyRepair herosecinfo={herosecinfo} />
    </> 
  )
}
