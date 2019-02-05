import * as React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import './style.sass';

class Navbar extends React.Component<any, any> {
  // render Navlinks
  renderLinks = () =>
    routes
      .filter(link => link.nav)
      .map(link => (
        <NavLink to={link.path} key={link.path} className="nav-link">
          {link.name}
        </NavLink>
      ));

  render() {
    return (
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-links">{this.renderLinks()}</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
