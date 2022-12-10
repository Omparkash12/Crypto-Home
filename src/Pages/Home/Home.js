import React from 'react';
import './Home.css'
import Navbar from '../Shared/Navbar/Navbar';
import BannerHome from './BannerHome/BannerHome';
import Creators from './Creators/Creators';
import EcoSystem from './EcoSystem/EcoSystem';
import OurProjects from './OurProjects/OurProjects';
import Tokens from './Tokens/Tokens';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
  return (
    <div className='home_page'>
      <Navbar />
      <BannerHome />
      <OurProjects />
      <EcoSystem />
      <Tokens />
      <Creators />
      <Footer />
    </div>
  )
}

export default Home