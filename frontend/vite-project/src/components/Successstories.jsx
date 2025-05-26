import React from 'react';
import Footer from './Footer';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: 'David Ben',
      story: 'I found my dream job through the alumni network. The support and guidance I received were invaluable.',
      image: 'https://cdn.prod.website-files.com/5fbb9b89508062592a9731b1/6448c1ce35d6ffe59e4d6f46_GettyImages-1399565382.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      story: 'Attending the alumni events helped me expand my professional network and open new doors.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtElN9NGJktUDKrA0mtzP1r25ZkQxjulp7iY73BaZUpF0vTdGRgYrBLpCJMlw2Rwt6S40&usqp=CAU',
    },
    {
      id: 3,
      name: 'Murli Prakasham',
      story: 'The alumni association provided me with the resources and mentorship I needed to start my own business.',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small_2x/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg',
    },
    
    {
      id: 4,
      name: 'Sarah Kapoor',
      story: 'The connections I made at alumni events were crucial in landing my current position.',
      image: 'https://easy-feedback.de/wp-content/uploads/2022/10/Employee-Journey-What-it-is-and-how-to-improve-it.jpg',
    },
  ];

  return (
    <div className=" mx-auto py-12  bg-black">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-8 mr-8">
        {successStories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-lg rounded-lg  hover:-translate-y-2 "
          >
            <img src={story.image} alt={story.name} className="w-full h-50 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{story.name}</h2>
              <p className="text-gray-600">{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

   
  );
};
<Footer/>
export default SuccessStories;