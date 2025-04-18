import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BootcampSection from '../components/BootcampSection';
import Success from '../components/Success';
import AccessSection from '../components/accessSection';
import NewsletterSection from '../components/NewsletterSection';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <BootcampSection />
            <Success />
            <AccessSection />
            <NewsletterSection />
        </div>
    );
};

export default Home;