import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Main() {
  const headerHeight = 100;
  return (
    <div>
      <Header />
      <main style={{ height: `calc(100vh - ${headerHeight}px)` }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default Main
