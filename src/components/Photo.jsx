// import React from 'react';
import './Photo.scss';
import unsplash from '../assets/unsplash.png';
import unsplas from '../assets/unsplas.png';

function Photo() {
  // Assuming you have an array of image URLs
  const imageUrls = [unsplash, unsplas, unsplash, unsplas, unsplash, unsplas, unsplas, unsplas, unsplash, unsplas, unsplash, unsplas]; // Add more URLs as needed

  // Function to chunk the array into smaller arrays with a specific size
  const chunkArray = (array, size) => {
    return array.reduce((acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]), []);
  };

  // Chunk the imageUrls array into rows of four
  const imageRows = chunkArray(imageUrls, 4);

  return (
    <div className="paren bg-white m-3 " style={{ width: '990px' }}>
      <div className="chil ">
        <div className="heading ">
          <h4>Your Photo</h4>
        </div>
        <div className="option">
          <p>...</p>
        </div>
      </div>
      <hr />
      <div className="upper">
        <div className="inner1">
          <u>
            <b>
              <p>Photos About You</p>
            </b>
          </u>
        </div>
        <div className="inner">
          <b>
            <p>Your Photos</p>
          </b>
        </div>
        <div className="inner">
          <b>
            <p>Albums</p>
          </b>
        </div>
      </div>
      <div className="bag">
        <div className="totalPhotos">
          <b>
            <p>Total Photos</p>
          </b>
        </div>
        <div>
          <p className="text-muted">42 Total pPhotos About You</p>
        </div>
      </div>
      <div className="gallery">
        {imageRows.map((row, rowIndex) => (
          <div key={rowIndex} className="row pic mt-3">
            {row.map((imageUrl, colIndex) => (
              <div key={colIndex} className="col">
                <img src={imageUrl} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photo;
