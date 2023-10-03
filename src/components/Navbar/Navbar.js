import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-extrabold text-xl tracking-widest">
            DigitalNestDev
          </Link>
          <ul className="hidden sm:flex space-x-9">
            <li>
              <Link to="/" className="text-white hover:bg-[#4a28e6]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:bg-[#4a28e6]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Client" className="text-white hover:bg-[#4a28e6]">
                Client
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-white hover:bg-[#4a28e6]">
                Team
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:bg-[#4a28e6]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:bg-[#4a28e6]">
                Contact
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>

          {/*  Mobile NavBar start */}
          
          <button className="sm:hidden text-white" onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
        <ul className="sm:hidden space-y-4">
        <li>
              <Link to="/" className="text-white  hover:bg-[#4a28e6]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:bg-[#4a28e6]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Client" className="text-white hover:bg-[#4a28e6]">
                Client
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-white hover:bg-[#4a28e6]">
                Team
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:bg-[#4a28e6]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:bg-[#4a28e6]">
                Contact
              </Link>
            </li>  {/* Add more navigation links as needed */}
        </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
