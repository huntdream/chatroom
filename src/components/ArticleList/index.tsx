import * as React from 'react';

import ArticleItem from '../ArticleItem';

import './style.sass';

export interface ArticleType {
  title: string;
  author: string;
  createdAt?: string;
  content: string;
  id: string;
  suffixCode: string;
}

export interface ArticlesType extends Array<ArticleType> {
  [index: number]: ArticleType;
}

export interface Props {
  articlelist: ArticlesType;
}

class ArticleList extends React.PureComponent<Props, any> {
  render() {
    const { articlelist } = this.props;
    return (
      <main className="article-list">
        {articlelist.map((article: ArticleType, index: number) => (
          <ArticleItem article={article} key={index} />
        ))}
      </main>
    );
  }
}

export default ArticleList;
