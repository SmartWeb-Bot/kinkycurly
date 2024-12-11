import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (sectionId: string) => (e: React.MouseEvent) => void;
}

export const MobileMenu = ({ isOpen, onClose, onNavClick }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div
        ref={menuRef}
        className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
      >
        <div className="p-6">
          <div className="flex justify-end mb-6">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-rose-50 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-rose-900" />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#home" onClick={onNavClick('home')} className="text-rose-900 hover:text-rose-700 py-2 transition-colors duration-200">
              Home
            </a>
            <a href="#products" onClick={onNavClick('products')} className="text-rose-900 hover:text-rose-700 py-2 transition-colors duration-200">
              Products
            </a>
            <a href="#about" onClick={onNavClick('about')} className="text-rose-900 hover:text-rose-700 py-2 transition-colors duration-200">
              About
            </a>
            <a href="#faq" onClick={onNavClick('faq')} className="text-rose-900 hover:text-rose-700 py-2 transition-colors duration-200">
              FAQ
            </a>
            <a href="#testimonials" onClick={onNavClick('testimonials')} className="text-rose-900 hover:text-rose-700 py-2 transition-colors duration-200">
              Testimonials
            </a>
            <a href="#contact" onClick={onNavClick('contact')} className="text-rose-900 hover:text-rose-700 py-2 transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};