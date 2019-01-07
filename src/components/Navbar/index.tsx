import * as React from "react";
import { NavLink } from "react-router-dom";

import "./style.sass";

const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Article",
    path: "article"
  },
  {
    name: "About",
    path: "about"
  }
];

class Navbar extends React.Component<any, any> {
  // render Navlinks
  renderLinks = () =>
    links.map(link => (
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
