import { useReducer } from 'react';

const reducer = (state, action) => {
switch (action.type) {
case 'SET_FAVOURITED_PHOTOS':
return {
...state,
favouritedPhotos: action.payload
};
case 'SET_SELECT_PHOTO':
return {
...state,
selectPhoto: action.payload
};
case 'SET_MODAL':
return {
...state,
modal: action.payload
};
default:
return state;
}
};

const useApplicationData = () => {
  const initialState = {
    favouritedPhotos: [],
    selectPhoto: {},
    modal: false
    };

const [state, dispatch] = useReducer(reducer, initialState);

const openModal = (photo) => {
dispatch({ type: 'SET_SELECT_PHOTO', payload: photo });
dispatch({ type: 'SET_MODAL', payload: true });
};

const closeModal = () => {
dispatch({ type: 'SET_SELECT_PHOTO', payload: null });
dispatch({ type: 'SET_MODAL', payload: false });
};

return {
modal: state.modal,
openModal,
closeModal,
selectPhoto: state.selectPhoto,
favouritedPhotos: state.favouritedPhotos,
setFavouritedPhotos: (favouritedPhotos) =>
dispatch({ type: 'SET_FAVOURITED_PHOTOS', payload: favouritedPhotos })
};
};

export default useApplicationData;