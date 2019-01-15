import * as React from "react";
import "./style.sass";

import { greeting } from "../../api/hello";

class Index extends React.Component {
  state = {
    greeting: "hello",
  };
  componentDidMount() {}
  render() {
    return <div className="index">{this.state.greeting}</div>;
  }
}

export default Index;
