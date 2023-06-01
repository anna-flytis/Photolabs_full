import React from 'react';

import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, imageSource, id, like, toggleModalState, clickImgSetID, hideUserName, city, country, profile } = props;

  const clickHandler = () => {
    toggleModalState();
    clickImgSetID(id);
  };
  
  return (
    <div className="photo-list-item">
      <PhotoFavButton like={like} photo_id={id} />
      <img className="photo-list--image"
        src={imageSource}
        onClick={clickHandler} />
      <div className='photo-list--user-details'>
        <img className="photo-list--user-profile" src={profile} />
        <div className='photo-list--user-info'>
          {!hideUserName && <span>{username}</span>}
          <div className="photo-list--user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;