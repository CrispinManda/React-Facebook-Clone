import { Link } from 'react-router-dom';

function LeftSidebar() {
  return (
      <nav className="nav flex-column">
          <Link to="/timeline" className="nav-link text-dark">
              Timeline
          </Link>
          <Link to="/friends" className="nav-link text-dark">
              Friends
          </Link>
          <Link to="/groups" className="nav-link text-dark">
              Groups
          </Link>
          <Link to="/video" className="nav-link text-dark">
              Video
          </Link>
          <Link to="/photos" className="nav-link text-dark">
              Photos
          </Link>
          <Link to="/events" className="nav-link text-dark">
              Events
          </Link>
      </nav>
  )
}

export default LeftSidebar