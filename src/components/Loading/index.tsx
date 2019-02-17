import * as React from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class Loading extends React.PureComponent<{}, {}> {
  componentDidMount() {
    NProgress.start();
  }
  componentWillUnmount() {
    NProgress.done();
  }
  render() {
    return <div />;
  }
}

export default Loading;
