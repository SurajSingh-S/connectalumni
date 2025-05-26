import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <header className="bg-black text-white shadow-md animate-fadeIn ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 ">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src="https://pbs.twimg.com/profile_images/1714899115/Galgotia_University_400x400.png"
            alt="University Logo"
            className="w-10 h-10 "
          />
          <h1
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <Link to="/home" className="hover:underline decoration-wavy underline-offset-8">
              GALGOTIAS UNIVERSITY
            </Link>
          </h1>
        </div>

        {/* Auth Buttons */}
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 font-semibold rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-black hover:to-black transition duration-300"
            >
              Logout
            </button>
          ) : (
            <div className="space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 font-semibold  bg-blue-400 text-white hover:bg-blue-800 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 font-semibold bg-blue-400 text-white hover:bg-blue-800 transition duration-300"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;









// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Header = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/home");
//   };

//   return (
//     <header className="bg-white text-black shadow-lg">
//       <div className="mx-auto flex items-center justify-between p-4 bg-white text-black">
//         <h1 className="text-4xl font-extrabold text-center text-black"
//         style={{ fontFamily: "'Playfair Display', serif" }}
//         >
          
//           <Link to="/home">GALGOTIAS UNIVERSITY</Link>
//         </h1>

//         <div>
//           {user ? (
//             <button
//               className="px-3 py-2 bg-black rounded text-white font-bold hover:bg-red-700"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           ) : (
//             <div className="space-x-4">
//               <Link
//                 to="/login"
//                 className="bg-blue-700 text-white font-bold hover:bg-gray-700 px-3 py-2 rounded-lg"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-blue-700 text-white font-bold hover:bg-gray-700 px-3 py-2 rounded-lg"
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

