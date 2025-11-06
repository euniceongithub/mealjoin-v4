import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '../ui/separator';

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black text-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-center mb-8">
          <img
            className="w-24 md:w-32 h-8 md:h-10 object-cover"
            alt="MealJoin Logo"
            src="/gemini-generated-image-8xw24u8xw24u8xw2-1.png"
          />
        </div>

        <Separator className="w-full mx-auto mb-6 md:mb-8 bg-gray-600" />

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8">
          <Link 
            to="/"
            className="font-['Inter',Helvetica] text-white text-sm md:text-base hover:text-[#fdaa00] cursor-pointer transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about"
            className="font-['Inter',Helvetica] text-white text-sm md:text-base hover:text-[#fdaa00] cursor-pointer transition-colors"
          >
            About
          </Link>
          <a className="font-['Inter',Helvetica] text-white text-sm md:text-base hover:text-[#fdaa00] cursor-pointer transition-colors">
            Terms of Service
          </a>
          <a className="font-['Inter',Helvetica] text-white text-sm md:text-base hover:text-[#fdaa00] cursor-pointer transition-colors">
            Privacy Policy
          </a>
        </div>

        <h3 className="font-['Inter',Helvetica] text-white text-lg md:text-xl text-center mb-4 md:mb-6">
          Contact Us
        </h3>

        <p className="font-['Inter',Helvetica] text-white text-sm md:text-base text-center mb-6 md:mb-8">
          <span>0571820957/0542893863 | </span>
          <a
            href="mailto:info@jowu.app"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-[#fdaa00] transition-colors"
          >
            info@jowu.app
          </a>
          <span> | Accra-Ghana</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-3 md:gap-4 mb-4 sm:mb-0">
            <img
              className="w-5 h-6 md:w-6 md:h-8 object-cover hover:opacity-80 cursor-pointer transition-opacity"
              alt="Facebook"
              src="/hd-wallpaper-facebook-black-logo-1.png"
            />
            <img
              className="w-6 h-6 md:w-8 md:h-8 object-cover hover:opacity-80 cursor-pointer transition-opacity"
              alt="Instagram"
              src="/21d67f1d6b3be5bb2e39395311c77fc6-1.png"
            />
            <img
              className="w-5 h-4 md:w-7 md:h-6 object-cover hover:opacity-80 cursor-pointer transition-opacity"
              alt="Twitter/X"
              src="/transparent-x-logo-cross-design-black-and-white-photograph-sim-b.png"
            />
          </div>
          <p className="font-['Inter',Helvetica] text-white text-xs md:text-sm text-center sm:text-right">
            © MealJoin 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};