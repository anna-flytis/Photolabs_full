import React from 'react';

import PhotoListItem from './PhotoListItem';
import PhotoData from '../mocks/photos.json';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {

  const { photos, like, toggleModalState, clickImgSetID } = props;

  const mappedPhotos = photos.map(photo => {
    return (
      <PhotoListItem username={photo.user.name}
        imageSource={photo.urls.regular}
        key={photo.id}
        id={photo.id}
        like={like}
        toggleModalState={toggleModalState}
        clickImgSetID={clickImgSetID}
        hideUserName={photo.hideUserName}
        city={photo.location.city}
        country={photo.location.country}
        profile={photo.user.profile} />
    );
  });

  return (
    <ul className="photo-list">
      {mappedPhotos}
    </ul>

  );
};

PhotoList.defaultProps = {
  photos: [
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    }
  ]
};

export default PhotoList;