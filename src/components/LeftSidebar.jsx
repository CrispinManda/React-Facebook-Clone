import './LeftSidebar.scss'
import { Link } from 'react-router-dom';
import Avatar from '../assets/Avatar.png'
import Timeline from '../assets/timeline.png'
import Videos from '../assets/photo.png'
import Friends from '../assets/friends.png'
import Groups from '../assets/groups.png'
import Photos from '../assets/photo.png'
import Events from '../assets/events.png'
import ShortCuts from './ShortCuts';


function LeftSidebar() {
    let name = 'Anjela Lee';
    let nickname = '@anjela'
    return (
        <nav className="nav flex-column">
            <div className="profile">
                <div className="ProfileImg">
                    <img src={Avatar} alt="" />
                </div>
                <div className="name">
                    <strong>{name} <br /> {nickname}</strong>

                </div>
            </div>

            <div className="parent mt-2">
                <div className="flexing">
                    <div className="icon mt-2"><img src={Timeline} alt="" /></div>
                    <div className="timeline">
                        <Link to="/timeline" className="nav-link text-dark">
                            Timeline
                        </Link>
                    </div>

                </div>

                <div className="flexing">
                    <div className="icon mt-2"><img src={Friends} alt="" /></div>
                    <div className="timeline">
                        <Link to="/friends" className="nav-link text-dark">
                            Friends
                        </Link>
                    </div>

                </div>
                <div className="flexing">
                    <div className="icon mt-2"><img src={Groups} alt="" /></div>
                    <div className="timeline">
                        <Link to="/group" className="nav-link text-dark">
                            Groups
                        </Link>
                    </div>

                </div>
                <div className="flexing">
                    <div className="icon mt-2"><img src={Videos} alt="" /></div>
                    <div className="timeline">
                        <Link to="/video" className="nav-link text-dark">
                            Videos
                        </Link>
                    </div>

                </div>
                <div className="flexing">
                    <div className="icon mt-2"><img src={Photos} alt="" /></div>
                    <div className="timeline">
                        <Link to="/photos" className="nav-link text-dark">
                            Photos
                        </Link>
                    </div>

                </div>
                <div className="flexing">
                    <div className="icon mt-2"><img src={Events} alt="" /></div>
                    <div className="timeline">
                        <Link to="/events" className="nav-link text-dark">
                            Events
                        </Link>
                    </div>
                    <div className=''>
                        <p className=''>10</p>
                    </div>

                </div>
            </div>
            <hr />
          <div className="text-muted    text-center mb-2">
                <strong className='mt-2'>SHORTCUTS</strong>
                <  ShortCuts />
          </div>

        </nav>
    )
}

export default LeftSidebar