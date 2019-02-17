import * as React from 'react';
import { Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Loading from '../Loading';

export interface RouteWrapperProps {
  path: string;
  name: string;
  exact: boolean;
  component: React.LazyExoticComponent<any>;
}

class RouteWrapper extends React.PureComponent<RouteWrapperProps, {}> {
  constructor(props: RouteWrapperProps) {
    super(props);
  }

  // componentDidMount() {
  //   NProgress.done();
  // }

  // componentWillUnmount() {
  //   NProgress.start();
  // }

  render() {
    const { path, name, exact, component: View } = this.props;
    return (
      <DocumentTitle title={name}>
        <React.Suspense fallback={<Loading />}>
          <Route
            path={path}
            name={name}
            exact={exact}
            render={() => <View />}
          />
        </React.Suspense>
      </DocumentTitle>
    );
  }
}

export default RouteWrapper;
