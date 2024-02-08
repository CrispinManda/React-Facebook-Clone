// import React from 'react';
// import { BrowserRouter as  Routes, Route, Link } from 'react-router-dom';
import { Route, Link, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/settings';

const App = () => {
  return (
    
      <>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 bg-light border-end">
              {/* Left Sidebar */}
              <nav className="nav flex-column">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </nav>
            </div>
            <div className="col-md-6 bg-secondary text-light d-flex ">
              {/* Dashboard Content */}
              
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            <div className="col-md-3 bg-light border-start">
              {/* Right Sidebar */}
              {/* Add right sidebar content here */}
              <p>jjjjjjjjjjjj</p>
              <p>jjjjjjjjjjjj</p>
              <p>jjjjjjjjjjjj</p>
              <p>jjjjjjjjjjjj</p>
              <p>jjjjjjjjjjjj</p>
            </div>
          </div>
        </div>
      </>
    // </Routes>
  );
};

export default App;
