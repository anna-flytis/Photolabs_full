import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, favouritedPhotos, handleTopicClick, handleHomepageClick } = props;
  const isFavPhotoExist = favouritedPhotos.length;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo" onClick={handleHomepageClick}>PhotoLabs</span>
      <TopicList topics={topics} handleTopicClick={handleTopicClick} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}
export default TopNavigation;