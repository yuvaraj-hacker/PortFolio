import React, { useEffect, useState } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const addStar = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const size = Math.random() * 0 + 1;
      const left = Math.floor(Math.random() * 100);
      const top = Math.floor(Math.random() * 100);

      setStars((prevStars) => [
        ...prevStars,
        { id, size: `${size}vmin`, left: `${left}%`, top: `${top}%` },
      ]);

      setTimeout(() => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== id));
      }, 6000);  
    };

    const interval = setInterval(addStar, 5);

    return () => clearInterval(interval);  
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            '--size': star.size,
            left: star.left,
            top: star.top,
          }}
        ></div>
      ))}
    </>
  );
};

export default StarBackground;
