import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start">
            <a href="/" className="text-gray-300 hover:text-white px-4 py-2">
              Home
            </a>
            <a href="/about" className="text-gray-300 hover:text-white px-4 py-2">
              About
            </a>
            <a href="/services" className="text-gray-300 hover:text-white px-4 py-2">
              Services
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white px-4 py-2">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex mt-4 md:mt-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-2"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-2"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
