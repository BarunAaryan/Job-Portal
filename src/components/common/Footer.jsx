import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">JobPortal</h3>
            <p className="text-gray-400">Find your dream job today</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">About</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;