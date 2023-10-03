import React from 'react';
import homevideo from '../../assest/images/homevideo.mp4'

const Home = () => {
  return (
    <div className="container mx-auto p-8 h-[850px]">
      <div className="flex flex-col sm:flex-row items-center">
        {/* Div for Video */}
        <div className="w-full sm:w-1/2">
          <video
            src={homevideo}
            autoPlay
            loop
            muted
            className="w-full h-auto"
          />
        </div>
        
        {/* Div for Text */}
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0 text-center sm:text-left">
          <h1 className="text-4xl font-semibold mb-4 text-blue-600">GROW YOUR BRAND
          WITH A DIGITAL PUSH</h1>
          <p className="text-xl text-justify">
          The digital landscape is ever-evolving. Staying adaptable and agile in your digital strategies is key to long-term success. Embrace new technologies and trends to ensure your brand remains relevant and continues to grow.
          </p>
          {/* Add more text content as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
