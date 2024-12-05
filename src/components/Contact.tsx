import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Phone className="w-8 h-8 text-rose-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <Mail className="w-8 h-8 text-rose-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">info@kinkycurly.com</p>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 text-rose-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <p className="mt-2 text-gray-600">123 Beauty Lane, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
};