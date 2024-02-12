import './Friends.scss';
import Avatar from '../assets/Avatar.png';

function Friends() {
  // Array of friends data
  const friendsData = [
    { id: 1, name: 'John Doe', avatar: Avatar, },
    { id: 2, name: 'Jane Doe', avatar: Avatar, },
    { id: 2, name: 'Jane Doe', avatar: Avatar, },
    { id: 2, name: 'Jane Doe', avatar: Avatar, },
    { id: 2, name: 'Jane Doe', avatar: Avatar, },
    { id: 2, name: 'Jane Doe', avatar: Avatar, },
    { id: 2, name: 'Jane Doe', avatar: Avatar, },
    { id: 2, name: 'Jane Doe', avatar: Avatar, },
    { id: 2, name: 'Jane Doe', avatar: Avatar, },
    // Add more friends as needed
  ];

  return (
    <div className="wrapper m-4 bg-white rounded">
      <div className="row m-4 ">
        {friendsData.map(friend => (
          <div className="col-sm-6" key={friend.id}>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">
                  <div>
                    <img src={friend.avatar} alt="" /> {friend.name}
                  </div>
                  <div>
                    <p>{friend.description}</p>
                  </div>
                </h5>
                <button className="btn btn mt-4">Message</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
