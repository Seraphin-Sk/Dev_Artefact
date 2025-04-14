import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BootcampSection from '../components/BootcampSection';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <BootcampSection />
        </div>
    );
};

export default Home;