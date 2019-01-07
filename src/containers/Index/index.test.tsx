import * as React from "react";
import ReactDOM from "react-dom";
import Index from "./index";

it("renders without crash", () => {
  const div = document.createElement("a");
  ReactDOM.render(<Index />, div);
  ReactDOM.unmountComponentAtNode(div);
});
