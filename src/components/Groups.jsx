import './Groups.scss'
function Groups() {
  return (
    <>
      <div className="contain">
        <div className="wrapper bg-white m-3" >
          <div className="top" style={{  }}>
            <div>
              <h4>Groups</h4>
            </div>
            <div className="end">
              <span>Sort by: &nbsp;</span>
              <button className="btn btn-primary">+ Create Group</button>
            </div>
          </div>
          <hr /> 
          <div className='top'>
            <div className="">
              <h3>Suggested for you</h3>
              <h6 className='text-muted'>Groups you Might be interested in.</h6>
            </div>
            <div className="end">
              <p className='text-primary'>See All</p>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Groups