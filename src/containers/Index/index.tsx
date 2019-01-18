import * as React from 'react';
import ArticleList from '../../components/ArticleList';

import './style.sass';

class Index extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="index">
        <ArticleList />
      </div>
    );
  }
}

export default Index;
