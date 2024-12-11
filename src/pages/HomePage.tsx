import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { About } from '../components/About';
import { FAQ } from '../components/FAQ';
import { Reviews } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a section to scroll to from navigation
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Products />
      <About />
      <FAQ />
      <Reviews />
      <Contact />
    </>
  );
};