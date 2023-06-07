import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, username, city, country, imageSource, hideUserName, userProfileImage, favouritedPhotos, setFavouritedPhotos, openModal } = props;

  const handleClick = () => {
    openModal({id, username, city, country, imageSource});
  };

  return (
    <article className='photo-list--item' onClick={handleClick}>
      <PhotoFavButton
        favouritedPhotos={favouritedPhotos}
        setFavouritedPhotos={setFavouritedPhotos}
        id={id}
      />

      <img src={imageSource} className='photo-list--image' />

      <div className='photo-list--user-details'>
        <img src={userProfileImage} alt="" className='photo-list--user-profile' />
        <div className='photo-list--user-info'>
          {!hideUserName && <p>{username}</p>}
          <p className='photo-list--user-location'>{city}, {country}</p>
        </div>
      </div>

    </article>

  );
};

PhotoListItem.defaultProps = {
  username: 'Jacob',
  location: 'city, country',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem