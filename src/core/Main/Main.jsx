import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Main() {


  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div ref={headerRef} style={{ background: "black", height: "60px" }} className='flex justify-center items-center fixed w-full top-0'>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default Main
