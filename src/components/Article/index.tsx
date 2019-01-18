import * as React from 'react';
import Title from './Title';
import { ArticleType } from '../ArticleList';

import './style.sass';

export interface ArticleProps {
  article: ArticleType;
}

class Article extends React.Component<ArticleProps, any> {
  render() {
    const { article } = this.props;
    const { title, author, content } = article;
    return (
      <div className="article-wrap">
        <Title>{title}</Title>
        <span>{author}</span>
        <div>{content}</div>
      </div>
    );
  }
}

export default Article;
