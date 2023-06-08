import React from 'react';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const {
    photos,
    topics,
    modal,
    openModal,
    closeModal,
    selectPhoto,
    favouritedPhotos,
    setFavouritedPhotos,
    handleTopicClick,
    handleHomepageClick,
  } = useApplicationData();

  return (
    <div>
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        favouritedPhotos={favouritedPhotos}
        setFavouritedPhotos={setFavouritedPhotos}
        handleTopicClick={handleTopicClick}
        handleHomepageClick={handleHomepageClick}
      />

      {modal && (
        <PhotoDetailsModal
          closeModal={closeModal}
          selectPhoto={selectPhoto}
          photos={photos}
          favouritedPhotos={favouritedPhotos}
          setFavouritedPhotos={setFavouritedPhotos}
        />
      )}
    </div>
  );
};

export default App;
