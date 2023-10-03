import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Frontend Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Replace with the actual image URL
      description: 'John is an experienced frontend developer with a passion for building user-friendly web applications.',
      imageWidth: 300, // Set the desired image width
      imageHeight: 400, // Set the desired image height
    },
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Replace with the actual image URL
      description: 'Jane specializes in backend development and loves solving complex server-side challenges.',
      imageWidth: 300, // Set the desired image width
      imageHeight: 400, // Set the desired image height
    },
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Replace with the actual image URL
      description: 'Jane specializes in backend development and loves solving complex server-side challenges.',
      imageWidth: 300, // Set the desired image width
      imageHeight: 400, // Set the desired image height
    },
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Replace with the actual image URL
      description: 'Jane specializes in backend development and loves solving complex server-side challenges.',
      imageWidth: 300, // Set the desired image width
      imageHeight: 400, // Set the desired image height
    },
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Replace with the actual image URL
      description: 'Jane specializes in backend development and loves solving complex server-side challenges.',
      imageWidth: 300, // Set the desired image width
      imageHeight: 400, // Set the desired image height
    },
    // Add more team members as needed
  ];

  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-semibold mb-6">Our Team</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={member.image} alt={member.name} className="w-1/2 h-auto rounded-full mx-auto mt-4" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
              <p className="mt-4">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
