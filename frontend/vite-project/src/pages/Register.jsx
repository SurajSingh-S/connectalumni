// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { USER_API_END_POINT } from '../utils/constant';

// const Register = () => {
//   const [name, setname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${USER_API_END_POINT}/register`, {
//         name,
//         email,
//         password
//       });      console.log('Registration success:', response.data);
//       alert('Registration successful! You can now log in.');
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration error:', error);
//       setError(error.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center">Register</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setname(e.target.value)}
//               required
//               className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
//               placeholder="Your name"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
//               placeholder="you@example.com"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
//               placeholder="••••••••"
//             />
//           </div>
//           <button type="submit" className="w-full p-2 text-white bg-black rounded-md hover:bg-gray-700">
//             Register
//           </button>
//         </form>
//         <p className="text-sm text-center">
//           Already have an account?{' '}
//           <Link to="/login" className="text-blue-500 hover:underline">
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;





import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';

const Register = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${USER_API_END_POINT}/register`, {
        name,
        email,
        password
      });
      console.log('Registration success:', response.data);
      alert('Registration successful! You can now log in.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Image */}
      <div className="hidden md:block md:w-2/3">
        <img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1350&q=80"
          alt="Alumni Join"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Register Form */}
      <div className="w-full md:w-1/3 flex items-center justify-center bg-black text-white p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <img
              src="https://pbs.twimg.com/profile_images/1714899115/Galgotia_University_400x400.png"
              alt="Galgotias Logo"
              className="w-16 mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold">Register</h2>
            <p className="text-sm text-white">Join the Alumni Network</p>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full p-2 mt-1 border border-white rounded-md"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 text-black bg-white rounded-md hover:bg-gray-200"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center text-white">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-200 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
