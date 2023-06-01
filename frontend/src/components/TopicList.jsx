import React from 'react';

import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { topics, selectTopic } = props;

  const mappedTopics = topics.map(topic => {
    return <TopicListItem key={topic.id} id={topic.id} label={topic.title} link="placeholder" selectTopic={selectTopic} />;
  });

  return (
    <div className="top-nav-bar--topic-list">
      {mappedTopics}
    </div>
  );
};

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: 'Nature',
      link: 'link placeholder'
    },
    {
      id: 2,
      label: 'Food',
      link: 'link placeholder'
    },
    {
      id: 3,
      label: 'People',
      link: 'link placeholder'
    },
  ]
};
export default TopicList;