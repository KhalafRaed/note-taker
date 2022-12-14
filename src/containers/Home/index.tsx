import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default Home
