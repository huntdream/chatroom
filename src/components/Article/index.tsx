import * as React from 'react';

import { ArticleType } from '../ArticleList';

import './style.sass';

export interface Props {
  article: ArticleType;
}

interface States {}

class Article extends React.Component<Props, States> {
  componentDidMount() {}

  render() {
    const { article } = this.props;
    const { title, author, date, content } = article;
    return (
      <div className="article-wrap">
        <h2 className="article-title">{title}</h2>
        <div className="article-info">
          <span className="article-author">{author}</span>
        </div>
        <div className="article-content">{content}</div>
      </div>
    );
  }
}

export default Article;
