import * as React from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Route } from 'react-router-dom';
import Loading from '../Loading';

export interface RouteWrapperProps {
  path: string;
  name: string;
  exact: boolean;
  component: React.LazyExoticComponent<any>;
}

class RouteWrapper extends React.Component<RouteWrapperProps, {}> {
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
      <React.Suspense fallback={<Loading />}>
        <Route path={path} name={name} exact={exact} render={() => <View />} />
      </React.Suspense>
    );
  }
}

export default RouteWrapper;
