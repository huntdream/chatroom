import * as React from 'react';

import { connect } from 'react-redux';
import { article } from '../../redux/actions';

import Article from '../../components/Article';
import { ArticleType } from '../../components/ArticleList';

interface UserParams {
  link: string;
}

interface MatchParams<Params> {
  params: Params;
  isExact: boolean;
  path: string;
  url: string;
}

export interface Props {
  piece: ArticleType;
  getarticle: any;
  router: any;
}

interface States {}

class Page extends React.Component<Props, States> {
  componentDidMount() {
    const value = this.parseSuffixCode(this.props.router.location.pathname);
    this.props.getarticle({ key: 'suffixCode', value });
  }

  parseSuffixCode = (pathname: string) => {
    const titleArray = pathname.split('/')[2].split('-');
    const code = titleArray.pop();
    document.title = titleArray.join(' ');
    return code;
  };

  render() {
    const { piece } = this.props;
    return <>{piece.author && <Article article={piece} />}</>;
  }
}

const mapStateToProps = ({
  articles,
  router
}: {
  articles: any;
  router: any;
}) => ({
  piece: articles.piece,
  router
});

const mapDispatchToProps = (dispatch: any) => ({
  getarticle: (payload: any) => dispatch(article.request(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
