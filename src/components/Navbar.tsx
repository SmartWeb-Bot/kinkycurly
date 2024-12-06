import React, { useState } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
                <a href="#home" className="text-rose-900 hover:text-rose-700 px-3 py-2">Home</a>
                <a href="#products" className="text-rose-900 hover:text-rose-700 px-3 py-2">Products</a>
                <a href="#about" className="text-rose-900 hover:text-rose-700 px-3 py-2">About</a>
                <a href="#faq" className="text-rose-900 hover:text-rose-700 px-3 py-2">FAQ</a>
                <a href="#contact" className="text-rose-900 hover:text-rose-700 px-3 py-2">Contact</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* <ShoppingBag className="h-6 w-6 text-rose-900" /> */}
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
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};