// import React from 'react';
// import { BrowserRouter as  Routes, Route, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import './App.css'
import Login from './Pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Pages/Register'
import Friends from './components/Friends'
import Groups from './components/Groups';
import Videos from './components/Videos';
import Photo from './components/Photo'
import Events from './components/Events';
import Timeline from './components/Timeline';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

const App = () => {
  return (
    
      <>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 bg-white border-end">
              {/* Left Sidebar */}
            <LeftSidebar/>
            </div>
          <div className="col-md-6 text-dark d-flex " style={{ backgroundColor: '#FAFAFA ' }}>
              {/* Dashboard Content */}
              
              <Routes>
                
                <Route path="/profile" element={<Profile />} />
                
                {/*  If no route is provided redirect user to the dashboard page*/}
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/profile" element={<MyProfile />} /> */}
              <Route path="/video" element={<Videos />} />
              <Route path="/photos" element={<Photo />} />
              <Route path='/friends' element={<Friends />} />
              <Route path='/events' element={<Events />} />
              <Route path='/group' element={<Groups />} />
              <Route path='/timeline' element={<Timeline />} />
              </Routes>
            </div>
            <div className="col-md-3 bg-white border-start">
              {/* Right Sidebar */}
              <RightSidebar />

            </div>
          </div>
        </div>
      </>
    // </Routes>
  );
};

export default App;
