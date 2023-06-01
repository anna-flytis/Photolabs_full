import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import axios from 'axios';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const {
    favPhotoExist,
    like,
    toggleModalState,
    modalState,
    closeModal,
    clickImgSetID,
    clickedImgID
  } = useApplicationData();

  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
      .then(res => {
        setPhotos(res.data);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:8001/api/topics')
      .then(res => {
        setTopics(res.data);
      })
      .catch(err => console.log(err));

  }, []);

  const selectTopic = (id) => {
    setSelectedTopic(id);
  };

  useEffect(() => {
      if (!selectedTopic) {
        axios.get('http://localhost:8001/api/photos')
          .then(res => {
            setPhotos([...res.data]);
          })
          .catch(err => console.log(err));
      } else {
        axios.get(`http://localhost:8001/api/topics/photos/${selectedTopic}`)
          .then(res => {
            setPhotos(res.data);
          })
          .catch(err => console.log(err));
      }
  }, [selectedTopic]);

  return (
    <div className="App">
      <HomeRoute
        favPhotoExist={favPhotoExist}
        like={like}
        toggleModalState={toggleModalState}
        PhotoData={photos}
        clickImgSetID={clickImgSetID}
        TopicData={topics}
        selectTopic={selectTopic} />
      {modalState && <PhotoDetailsModal closeModal={closeModal}
        PhotoData={photos}
        like={like}
        toggleModalState={toggleModalState}
        clickedImgID={clickedImgID}
        clickImgSetID />}
    </div>
  );
};

export default App;