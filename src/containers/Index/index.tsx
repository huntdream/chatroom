import * as React from 'react';
import { connect } from 'react-redux';
import { allArticle } from '../../redux/actions';

import ArticleList, { ArticlesType } from '../../components/ArticleList';
import './style.sass';

export interface Props {
  articlelist: ArticlesType;
  getarticlelist: any;
}

interface States {}

class Index extends React.Component<Props, States> {
  componentDidMount() {
    this.props.getarticlelist({ page: 1 });
  }
  render() {
    const { articlelist } = this.props;
    return (
      <div className="index">
        <ArticleList articlelist={articlelist} />
      </div>
    );
  }
}

const mapStateToProps = ({ articles }: { articles: any }) => ({
  articlelist: articles.list
});

const mapDipsatchToProps = (dispatch: any) => ({
  getarticlelist: (payload: any) => dispatch(allArticle.request(payload))
});

export default connect(
  mapStateToProps,
  mapDipsatchToProps
)(Index);
