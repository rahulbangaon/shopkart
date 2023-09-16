import React from 'react';
import './style.css';
import TopNav from '../topNav/TopNav';
import Navbar from '../navbar/Navbar';
import HeroSection from '../heroSection/HeroSection';

const Header = () => {
  return (
    <header>
    <TopNav />
    <Navbar />
    <HeroSection/>
    </header>
  )
}

export default Header;