import React from 'react';
const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We create well-developed websites which are user friendly, multi-lingual and responsive. A website is important for business. It represents your brand identity. It is the first thing the user sees.',
      imageUrl:'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Branding',
      description: 'Your business identity is just one step away from becoming a brand.In order to generate the desired market objectives, we will lead you through the process of exploration, analysis and placement.',
      imageUrl: 'https://wedevs.com/_ipx/https://cdn.wedevs.com/uploads/2020/06/Business-Branding-feature-Images.png?f=webp&q=90', // Replace with your image URL
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Our strategists study your values and then combine that insights to create outstanding custom strategies.We believe in 100% transparent and accountable behaviour with our clients, keeping our customer satisfaction is our top priority.',
      imageUrl: 'https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/11/DM_blog_post_image_03.jpg', // Replace with your image URL
    },
    {
      id: 4,
      title: 'Graphics design',
      description: 'A great design takes the brand identity forward. We help our clients craft the message that reflects their visual identity.',
      imageUrl: 'https://scratchpad.co.nz/wp-content/uploads/2017/11/Graphic-Design-Product.png', // Replace with your image URL
    },
    {
      id: 5,
      title: 'Desktop Application',
      description: 'We create custom desktop applications, craft hardware or operating system-specific desktop apps, as well as standalone or backend-enabled software.',
      imageUrl: 'https://www.oxpanmicrosys.com/static/media/desktop-application-development.94f0b6b4777834d3602c.png', // Replace with your image URL
    },
    // Add more service objects as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg mt-6">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-auto object-fill max-h-44" // Responsive image size
            />
            <div className="p-4">
              <h2 className="text-[30px] font-semibold">{service.title}</h2>
              <p className="text-gray-600 text-justify">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
