import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import SuccessStories from './components/Successstories';
import JobPortal from './pages/JobPortal';
import About from './components/About';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [login,islogin]= useState(true)

  const handleRegistration = () => {
    setIsRegistered(true); // Update state when user registers
  };

  const handleLogout = () => {
    setIsRegistered(false); // Reset state on logout
  };

  return (

    
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header isRegistered={isRegistered} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> 
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register onRegister={handleRegistration} />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/jobs" element={<JobPortal />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </main>
       

        
      </div>

      
    </AuthProvider>
  );
};

export default App;