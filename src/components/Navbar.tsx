import React, { useState } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { useScrollToSection } from '../hooks/useScrollToSection';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(sectionId);
    closeMobileMenu();
  };

  return (
    <>
      <nav className="bg-rose-50 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold font-great-vibes text-rose-900">Kinky Curly</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" onClick={handleNavClick('home')} className="text-rose-900 hover:text-rose-700 px-3 py-2">Home</a>
                <a href="#products" onClick={handleNavClick('products')} className="text-rose-900 hover:text-rose-700 px-3 py-2">Products</a>
                <a href="#about" onClick={handleNavClick('about')} className="text-rose-900 hover:text-rose-700 px-3 py-2">About</a>
                <a href="#faq" onClick={handleNavClick('faq')} className="text-rose-900 hover:text-rose-700 px-3 py-2">FAQ</a>
                <a href="#testimonials" onClick={handleNavClick('testimonials')} className="text-rose-900 hover:text-rose-700 px-3 py-2">Testimonials</a>
                <a href="#contact" onClick={handleNavClick('contact')} className="text-rose-900 hover:text-rose-700 px-3 py-2">Contact</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleMobileMenu}
                className="md:hidden focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6 text-rose-900" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} onNavClick={handleNavClick} />
    </>
  );
};