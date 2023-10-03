import React from 'react';
import contact from '../../assest/images/Contact.png'
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col sm:flex-row items-center">
        {/* Div for Image */}
        <div className="w-full sm:w-1/2 p-4">
          <img
            src={contact}
            alt="Contact Us"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        
        {/* Div for Contact Form */}
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0 p-4">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your Mobile Number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
