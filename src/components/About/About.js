import React from 'react';
import aboutus from '../../assest/images/aboutus.jpg'


const About = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col sm:flex-row items-center">
        {/* Div for Image */}
        <div className="w-full sm:w-1/2 p-4">
          <img
            src={aboutus}
            alt="About Us"
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>

        {/* Div for Text Description */}
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
          <h1 className="text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            aliquam justo ac justo fringilla, at suscipit elit tristique.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque nobis reiciendis soluta quo commodi maxime? Natus ex fugit, reiciendis fuga, doloremque aut praesentium molestiae iste accusantium aliquid a id! Excepturi nisi, accusantium nam dolore pariatur corporis quam iste in voluptas, voluptatem, error iusto fugit tempora autem aliquam? Inventore eum quibusdam tempore facere! Obcaecati quas at explicabo voluptate repellat delectus debitis fuga quaerat ipsa perferendis, maxime officia? Ipsa sed minima quod, ipsum sint ut dolorem eius eligendi quam. Autem odit dolorem expedita hic ipsum, possimus maiores, iure quaerat officiis, sapiente repellat delectus minus nisi nihil beatae. Laborum, provident nam. Ex?
          </p>
          {/* Add more text content as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
