import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { id, favouritedPhotos, setFavouritedPhotos } = props;

  const isFavorited = favouritedPhotos.includes(id);

  const handleFavourites = (event) => {
    event.stopPropagation()
    if (isFavorited) {
      setFavouritedPhotos(favouritedPhotos.filter((photoId) => photoId !== id));
    } else {
      setFavouritedPhotos([...favouritedPhotos, id]);
    }
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleFavourites}>
        <div className='photo-list--fav-icon-svg'>
          <FavIcon fill={isFavorited ? '#C80000'  : '#EEE'} />
        </div>
    </div>

  );
};

export default PhotoFavButton;
