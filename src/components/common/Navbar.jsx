import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, userRole, onLogout }) {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">JobPortal</Link>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              {userRole === 'admin' ? (
                <>
                  <Link to="/admin" className="hover:text-blue-200">Dashboard</Link>
                  <Link to="/admin/add-job" className="hover:text-blue-200">Add Job</Link>
                </>
              ) : (
                <Link to="/jobs" className="hover:text-blue-200">Browse Jobs</Link>
              )}
              <button 
                onClick={onLogout}
                className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/" 
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
