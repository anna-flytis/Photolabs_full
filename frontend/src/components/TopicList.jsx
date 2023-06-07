import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  const { topics, link, handleTopicClick } = props;

  const topicComponents = topics.map(topic => {
    return <TopicListItem key={topic.id} id={topic.id} label={topic.title} link={"#"} handleTopicClick={handleTopicClick} />
  })

  return (
    <div className="top-nav-bar--topic-list">
      {topicComponents}
    </div>
  )
}
export default TopicList