import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BootcampSection from '../components/BootcampSection';
import Success from '../components/Success';
import AccessSection from '../components/accessSection';
import NewsletterSection from '../components/NewsletterSection';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <BootcampSection />
            <Success />
            <AccessSection />
            <NewsletterSection />
            <TestimonialSection />
        </div>
    );
};

export default Home;