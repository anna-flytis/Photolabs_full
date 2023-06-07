import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { photos, favouritedPhotos, setFavouritedPhotos, openModal } = props;

  const photoComponents = photos.map(photo => {
    return <PhotoListItem
  key={photo.id}
  id={photo.id}
  username={photo.user.name}
  imageSource={photo.urls.regular}
  hideUserName={false}
  city={photo.location.city}
  country={photo.location.country}
  similar_photos={photo.similar_photos} // this line
  userProfileImage={photo.user.profile}
  favouritedPhotos={favouritedPhotos}
  setFavouritedPhotos={setFavouritedPhotos}
  openModal={openModal}
/>
  });

  return (
  <ul className="photo-list">
    {photoComponents}
  </ul>
  );
};

export default PhotoList