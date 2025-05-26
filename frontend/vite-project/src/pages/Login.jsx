import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${USER_API_END_POINT}/login`, {
        email,
        password
      },{  withCredentials: true });

      if (response.data.token) {
        login(response.data);
        alert('Login successful!');
        navigate('/home');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/3 flex items-center justify-center bg-black p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <img
              src="https://pbs.twimg.com/profile_images/1714899115/Galgotia_University_400x400.png"
              alt="Galgotias Logo"
              className="w-16 mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold text-white">Alumni Login</h2>
            <p className="text-sm text-white">Galgotias University</p>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full p-2 mt-1 border text-white border-gray-300 rounded-md"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm  font-medium text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full p-2 mt-1 border text-white border-gray-300 rounded-md"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 text-black bg-white rounded-md hover:bg-gray-200"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-white">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-300 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side*/}
      <div className="hidden md:block md:w-2/3">
        <img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1350&q=80"
          alt="Campus or Alumni"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
