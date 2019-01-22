import * as React from 'react';
import { connect } from 'react-redux';
import { getArticleList } from '../../redux/actions';
import { Dispatch } from 'redux';
import Action from '../../redux/actions/types';

import Article from '../Article';

import './style.sass';

export interface ArticleType {
  title: string;
  author: string;
  date?: string;
  content: string;
}

export interface ArticlesType extends Array<ArticleType> {
  [index: number]: ArticleType;
}

export interface Props {
  articlelist: ArticlesType;
  getarticlelist: any;
}

class ArticleList extends React.Component<Props, any> {
  componentDidMount() {
    this.props.getarticlelist({ page: 1 });
  }

  render() {
    const { articlelist } = this.props;
    return (
      <div className="artile-list">
        {articlelist.map((article: ArticleType, index: number) => (
          <Article article={article} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ article }: { article: any }) => ({
  articlelist: article.list
});

const mapDipsatchToProps = (dispatch: any) => ({
  getarticlelist: (params: any) => dispatch(getArticleList(params))
});

export default connect(
  mapStateToProps,
  mapDipsatchToProps
)(ArticleList);
