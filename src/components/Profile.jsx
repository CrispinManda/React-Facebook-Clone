import './Profile.scss'
import Avatar from '../assets/Avatar.png'
import parameter from '../assets/parameter.png'
// import map from '../assets/map.png'
// import briefcase from '../assets/briefcase.png'
import unsplash from '../assets/unsplash.png'
import unsplas from '../assets/unsplas.png'


const Profile = () => {
    return (

        <>
            <div className="containe m-2">

                <div className="col prof" >
                    <img className='Avatar' src={Avatar} alt="Avatar" height='70px' />
                    <button type="button" className="btn btn-light " >Edit Profile</button>

                </div>

                <div className="cont row hello  " >

                    <div className="col">

                        <h4>Angela Lee</h4>
                        <small>@angela</small>

                    </div>

                    <div className="col btn-group btn-group-lg m-3 " role="group" aria-label="Example Button Group" >
                        <button type="button" className="btn rgb"><small className='text-muted'>POST</small>  <br /> 683</button>
                        <button type="button" className="btn rgb">|</button>
                        <button type="button" className="btn rgb"><small className='text-muted'>FRIENDS</small>  <br />683 </button>
                        <button type="button" className="btn rgb">|</button>
                        <button type="button" className="btn rgb"><small className='text-muted'>PHOTOS</small>  <br />683 </button>
                        <button type="button" className="btn rgb">|</button>
                        <button type="button" className="btn rgb"><small className='text-muted'>LIKES</small>  <br />683 </button>
                    </div>




                </div>

                <div className="grid-container mt-3">
                    <div className="item1 row">
                        <div className="col">
                            <p><strong>Complete Your Profile</strong></p>
                            <br />
                        </div>
                        <div className="col">
                            <img src={parameter} alt="" />
                        </div>
                    </div>

                    <div className="item2 row">
                        <div className="col"><img src={Avatar} alt="" /></div>
                        <div className="col"><input type="search" placeholder="Whats on your mind" className="form-control" style={{ width: '400px' }}
                        /></div>
                        <hr />
                        <div className="row">
                            <div className="col">📺 Live/Video</div>
                            <div className="col">📸Photo</div>
                            <div className="col">⭐Activity</div>

                        </div>

                    </div>
                    <div className="item3">
                        <div className="row text-center">
                            <div className="col"><p><strong>Intro</strong></p></div>
                            <div className="col">...</div>
                            <p className='muted'>I am an experienced joiner with well developed skills</p>
                            <hr />
                            <div className="row" >📌 2978 westheimer Rd.</div>
                            <div className="row" >💼 Binford Ltd.</div>
                            <div className="row" >📆 September 24, 2017</div>
                            <div className="row" >📌 Dribble.com/Angela 24, 2017</div>
                        </div>
                    </div>
                    <div className="item4 ">
                        <div className="inside">
                            <div className='Avatar'> <img src={Avatar} alt="" /></div>
                            <div className='name'><p><strong>Angela</strong></p > <p>56 min ago</p></div>
                        </div>
                        <div className="row">
                            <p>Here are some photography works that I made on the weekend with some of my friends, happy for that!</p>
                        </div>
                        <div className="row mb-4">
                            <div className="col"><img src={unsplash} alt="" width={200} height={120}/></div>
                            <div className="col"><img src={unsplas} alt="" width={200} height={120}/></div>
                            <hr />
                            <div className="row ">
                                <div className="col">💙2.6k Likes</div>
                                <div className="col">📑27k comments</div>
                                <div className="col">🪒205 shares</div>
                                <div className="col mt-3"><input type="search" placeholder="Whats on your mind" className="form-control" style={{ width: '400px' }}
                                /></div>
                            </div>
                        </div>



                    </div>
                    <div className="item5 row">
                        <div className="col">Photo</div>
                        <div className="col text-primary">See All</div>
                        <div className="row">
                            <div className="col"><img src={unsplash} alt="" /></div>
                            <div className="col"><img src={unsplas} alt="" /></div>
                        </div>

                    </div>

                </div>




            </div>


        </>

    );
};

export default Profile;
