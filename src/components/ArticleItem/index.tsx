import * as React from 'react';
import Title from './Title';
import Author from './Author';
import { ArticleType } from '../ArticleList';

import './style.sass';
import { Link } from 'react-router-dom';

export interface ArticleProps {
  article: ArticleType;
}

interface States {}

class ArticleItem extends React.Component<ArticleProps, States> {
  render() {
    const { article } = this.props;
    const { title, author, date, content, id, suffixCode } = article;

    return (
      <div className="articleitem-wrap">
        <Title
          render={() => (
            <Link to={`/article/${title.split(' ').join('-')}-${suffixCode}`}>
              {title}
            </Link>
          )}
        />
        <Author>{author}</Author>
        <span>{date}</span>
        {/* <div className="articleitem-content">{content}</div> */}
      </div>
    );
  }
}

export default ArticleItem;
