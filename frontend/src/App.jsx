import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'


const App = () => {
  const {
    modal,
    openModal,
    closeModal,
    selectPhoto,
    favouritedPhotos,
    setFavouritedPhotos } = useApplicationData();

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([])

  useEffect(() => {
    axios({
      url: "http://localhost:8001/api/photos",
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        setPhotos(prev => res.data)
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  useEffect(() => {
    axios({
      url: "http://localhost:8001/api/topics",
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        setTopics(prev => res.data)
      })
      .catch((error) => {
        console.error('Error fetching photos by topic:', error);
      });
  }, []);

  const handleTopicClick = (topicId) => {
    axios
      .get(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((res) => {
        setPhotos(prev => res.data);
      })
      .catch((error) => {
        console.error('Error fetching photos by topic:', error);
      });
  };

  const handleHomepageClick = () => {
    axios({
      url: "http://localhost:8001/api/photos",
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        setPhotos(prev => res.data)
      })
      .catch((error) => {
        console.error('Error fetching photos', error);
      });
  };

  return (
    <div>
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos}
        handleTopicClick={handleTopicClick}
        handleHomepageClick={handleHomepageClick} />

      {modal &&
        <PhotoDetailsModal
          closeModal={closeModal}
          selectPhoto={selectPhoto}
          photos={photos}
          favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos}
        />}
    </div>
  );
};

export default App
