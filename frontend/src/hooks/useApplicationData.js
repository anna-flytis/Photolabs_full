import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  photos: [],
  topics: [],
  favouritedPhotos: [],
  selectPhoto: null,
  modal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return {
        ...state,
        photos: action.payload,
      };
    case 'SET_TOPICS':
      return {
        ...state,
        topics: action.payload,
      };
    case 'SET_FAVOURITED_PHOTOS':
      return {
        ...state,
        favouritedPhotos: action.payload,
      };
    case 'SET_SELECT_PHOTO':
      return {
        ...state,
        selectPhoto: action.payload,
      };
    case 'SET_MODAL':
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('http://localhost:8001/api/photos')
      .then((res) => {
        dispatch({ type: 'SET_PHOTOS', payload: res.data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8001/api/topics')
      .then((res) => {
        dispatch({ type: 'SET_TOPICS', payload: res.data });
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  const openModal = (photo) => {
    dispatch({ type: 'SET_SELECT_PHOTO', payload: photo });
    dispatch({ type: 'SET_MODAL', payload: true });
  };

  const closeModal = () => {
    dispatch({ type: 'SET_SELECT_PHOTO', payload: null });
    dispatch({ type: 'SET_MODAL', payload: false });
  };

  const handleTopicClick = (topicId) => {
    axios
      .get(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((res) => {
        dispatch({ type: 'SET_PHOTOS', payload: res.data });
      })
      .catch((error) => {
        console.error('Error fetching photos by topic:', error);
      });
  };

  const handleHomepageClick = () => {
    axios
      .get('http://localhost:8001/api/photos')
      .then((res) => {
        dispatch({ type: 'SET_PHOTOS', payload: res.data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  return {
    photos: state.photos,
    topics: state.topics,
    modal: state.modal,
    openModal,
    closeModal,
    selectPhoto: state.selectPhoto,
    favouritedPhotos: state.favouritedPhotos,
    setFavouritedPhotos: (favouritedPhotos) =>
      dispatch({ type: 'SET_FAVOURITED_PHOTOS', payload: favouritedPhotos }),
    handleTopicClick,
    handleHomepageClick,
  };
};

export default useApplicationData;
