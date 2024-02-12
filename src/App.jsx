import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Pages/Register';
import Friends from './components/Friends';
import Groups from './components/Groups';
import Videos from './components/Videos';
import Photo from './components/Photo';
import Events from './components/Events';
import Timeline from './components/Timeline';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

const App = () => {
  const location = useLocation();

  // Function to determine whether to show navigation and sidebars
  const showNavigationAndSidebars = () => {
    // Exclude login and '/' pages from showing navigation and sidebars
    return !['/login', '/'].includes(location.pathname);
  };

  return (
    <>
      {showNavigationAndSidebars() && <Navigation />}
      <div className="container-fluid ">
        <div className="row">
          {showNavigationAndSidebars() && (
            <div className="col-md-2 col-sm-2 bg-white border-end">
              {/* Left Sidebar */}
              <LeftSidebar />
            </div>
          )}
          <div className="col-md-8 col-sm-8 text-dark d-flex justify-content-center" style={{ backgroundColor: '#FAFAFA' }}>
            {/* Dashboard Content */}
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/video" element={<Videos />} />
              <Route path="/photos" element={<Photo />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/events" element={<Events />} />
              <Route path="/group" element={<Groups />} />
              <Route path="/timeline" element={<Timeline />} />
            </Routes>
          </div>
          {showNavigationAndSidebars() && (
            <div className="col-md-2 col-sm-2 bg-white border-start">
              {/* Right Sidebar */}
              <RightSidebar />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
