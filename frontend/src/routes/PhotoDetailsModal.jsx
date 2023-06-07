import React from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoFavButton.scss';

export const PhotoDetailsModal = (props) => {
  const { photos, selectPhoto, favouritedPhotos, setFavouritedPhotos } = props;
  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={props.closeModal}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className='photo-details-modal--image'>
        <PhotoFavButton
          favouritedPhotos={favouritedPhotos}
          setFavouritedPhotos={setFavouritedPhotos}
          id={selectPhoto.id} />
        <img src={selectPhoto.imageSource} alt="" />
      </div>

      <div className='photo-details-modal--photographer-details'>
        <img src={selectPhoto.imageSource} alt="" className='photo-details-modal--photographer-profile' />
        <div className='photo-details-modal--photographer-info'>
          <p>{selectPhoto.username}</p>
          <p className='photo-details-modal--photographer-location'>{selectPhoto.city}, {selectPhoto.country}</p>
        </div>
      </div>

      <section className='photo-details-modal--images'>
        <h1 className='photo-details-modal--header'>Similar photos:</h1>
        <PhotoList photos={selectPhoto.similar_photos} favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos} />
      </section>

    </div>
  )
}

export default PhotoDetailsModal;