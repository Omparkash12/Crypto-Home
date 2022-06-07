import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import BannerHome from './BannerHome/BannerHome'
import OurProjects from './OurProjects/OurProjects'

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerHome />
      <OurProjects />
    </div>
  )
}

export default Home