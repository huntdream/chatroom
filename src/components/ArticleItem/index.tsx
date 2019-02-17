import * as React from 'react';
import Title from './Title';
import Author from './Author';
import IconText from '../IconText';
import { ArticleType } from '../ArticleList';

import './style.sass';

export interface ArticleProps {
  article: ArticleType;
}

interface States {}

class ArticleItem extends React.Component<ArticleProps, States> {
  render() {
    const { article } = this.props;
    const { title, author, createdAt, content, id, suffixCode } = article;

    return (
      <article className="articleitem-wrap">
        <Title to={`/article/${title.split(' ').join('-')}-${suffixCode}`}>
          {title}
        </Title>
        {/* <Author>{author}</Author> */}
        <IconText icon="date_range">{createdAt}</IconText>
        {/* <div className="articleitem-content">{content}</div> */}
      </article>
    );
  }
}

export default ArticleItem;
