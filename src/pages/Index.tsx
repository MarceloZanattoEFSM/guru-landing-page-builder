
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ForCreators from '@/components/ForCreators';
import ForStudents from '@/components/ForStudents';
import ComparisonSection from '@/components/ComparisonSection';
import Testimonials from '@/components/Testimonials';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ForCreators />
        <ForStudents />
        <ScreenshotCarousel />
        <ComparisonSection />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
