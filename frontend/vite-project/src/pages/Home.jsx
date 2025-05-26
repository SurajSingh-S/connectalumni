

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const Homepage = ({}) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const eventt = [
    { name: 'Alumni Reunion', message: 'A gathering of alumni to reconnect and celebrate achievements.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JIz3JzFAqTQABCZYQqTh5D4dn1nGfv9TVw&s' },
    { name: 'Career Fair', message: 'Explore career opportunities and network with professionals.', image: 'https://innis.utoronto.ca/wp-content/uploads/Alumni-Events-1-680@2x.jpg' },
    { name: 'Turn Around', message: 'A motivational event to inspire change and growth.', image: 'https://www.carroll.edu/sites/default/files/2023-09/alumni-events.jpg' },
  ];

  const successStories = [
    { name: 'David Ben', message: 'Thanks to this platform, I landed my dream job!', image: 'https://cdn.prod.website-files.com/5fbb9b89508062592a9731b1/6448c1ce35d6ffe59e4d6f46_GettyImages-1399565382.jpg' },
    { name: 'Jane Smith', message: 'This community helped me reconnect with old friends!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtElN9NGJktUDKrA0mtzP1r25ZkQxjulp7iY73BaZUpF0vTdGRgYrBLpCJMlw2Rwt6S40&usqp=CAU' },
    { name: 'Sarah Kapoor', message: 'Loved attending the alumni meetups!', image: 'https://easy-feedback.de/wp-content/uploads/2022/10/Employee-Journey-What-it-is-and-how-to-improve-it.jpg' },
  ];

  const jobs = [
    { title: 'Software Engineer', company: 'Google', description: 'Develop scalable web applications.', image: 'https://www.gisma.com/uploads/sites/5/2024/12/pexels-thisisengineering-3861958-scaled.jpg' },
    { title: 'Data Analyst', company: 'Microsoft', description: 'Analyze and interpret complex data sets.', image: 'https://cdn.careerfoundry.com/en/wp-content/uploads/old-blog-uploads/data-analyst-role.jpg' },
    { title: 'Product Manager', company: 'Amazon', description: 'Lead teams to launch innovative products.', image: 'https://www.mediabistro.com/wp-content/uploads/2017/05/Product-Manager.jpg' },
  ];

  const handleSuccessStoriesRedirect = () => {
    navigate(user ? '/success-stories' : '/login');
  };

  const handleEventRedirect = () => {
    navigate(user?'/events':'/login');
  };

  const handleJobPortalRedirect = () => {
    navigate(user ? '/jobs' : '/login');
  };

  return (
    <div className="bg-black text-white py-20 px-8 text-center">
      <h1 className="text-5xl font-extrabold">
        {user ? `Welcome back!` : 'Welcome to Our Alumni Platform'}
      </h1>
      <p className="mt-4 text-lg">
        Connect, network, and stay updated with your alma mater and fellow alumni.
      </p>

      {!user && (
        <div className="mt-6">
          <Link
            to="/register"
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Join Now
          </Link>
        </div>
      )}

      {/* Success Stories */}
      <div className="py-16 bg-black text-white">
        <h2 className="text-4xl font-bold text-center">Success Stories</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <img src={story.image} alt={story.name} className="h-40 bg-gray-300 rounded-lg mb-4 object-cover" />
              <h3 className="text-xl font-bold text-gray-700">{story.name}</h3>
              <p className="mt-2 text-gray-600">"{story.message}"</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleSuccessStoriesRedirect}
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
          >
            View More
          </button>
        </div>
      </div>

      {/* Events */}
      <div className="py-16 bg-black text-white">
        <h2 className="text-4xl font-bold text-center">Upcoming Events</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {eventt.map((event, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <img src={event.image} alt={event.name} className="h-40 bg-gray-300 rounded-lg mb-4 object-cover" />
              <h3 className="text-xl font-bold text-gray-700">{event.name}</h3>
              <p className="mt-2 text-gray-600">{event.message}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleEventRedirect}
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
          >
            View More
          </button>
        </div>
      </div>

      {/* Job Portal */}
      <div className="py-16 bg-black text-white">
        <h2 className="text-4xl font-bold text-center">Job Portal</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {jobs.slice(0, 3).map((job, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <img src={job.image} alt={job.title} className="h-40 bg-gray-300 rounded-lg mb-4 object-cover" />
              <h3 className="text-xl font-bold text-gray-700">{job.title}</h3>
              <p className="text-gray-500">{job.company}</p>
              <p className="mt-2 text-gray-600">{job.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleJobPortalRedirect}
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
          >
            View More
          </button>
        </div>
      </div>

      <div><Footer/></div>
    </div>
    
  );
  

   
};

export default Homepage;
