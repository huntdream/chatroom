import * as React from "react";
import classnames from "classnames";

const StyleButton = (props: any) => (
  <button
    className={classnames("controller-item", {
      active: props.isInlineStyleActive(props.item.style),
    })}
    onMouseDown={event => props.toggleInlineStyle(event, props.item.style)}
    key={props.item.style}
  >
    {props.item.label}
  </button>
);

export default StyleButton;
