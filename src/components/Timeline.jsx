import './Timeline.scss'
import Avatar from '../assets/Avatar.png';


function Timeline() {
  
  return (
    <>
      <div className="cover bg-white m-3" style={{ width: '990px' }}>
        <div className="Timeline">
          <h4>Your Timeline</h4>
        </div>
        <hr />
        <div className="  frame">
          <div className="cup">
            <div className="pic"><img src={Avatar} alt="" /></div>
            <p>@User</p>
          </div>
          <div className="cup">
            <div className="pic"><img src={Avatar} alt="" /></div>
            <p>@User</p>
          </div>
          <div className="cup">
            <div className="pic"><img src={Avatar} alt="" /></div>
            <p>@User</p>
          </div>
          <div className="cup">
            <div className="pic"><img src={Avatar} alt="" /></div>
            <p>@User</p>
          </div>
          <div className="cup">
            <div className="pic"><img src={Avatar} alt="" /></div>
            <p>@User</p>
          </div>
          <div className="cup">
            <div className="pic"><img src={Avatar} alt="" /></div>
            <p>@User</p>
          </div>          <div className="cup">
            <div className="pic"><img src={Avatar} alt="" /></div>
            <p>@User</p>
          </div>
          <div className="cup">
            <div className="pic"><img src={Avatar} alt="" /></div>
            <p>@User</p>
          </div>
        
        </div>

      </div>


    </>
  )
}

export default Timeline