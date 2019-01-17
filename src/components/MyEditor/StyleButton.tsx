import * as React from 'react';
import classnames from 'classnames';
import { StyleItem, CheckActiveFunc } from '.';

export interface StyleButtonProps {
  item: StyleItem;
  toggleStyle: Function;
  isStyleActive: CheckActiveFunc;
}

const StyleButton = (props: StyleButtonProps) => (
  <button
    className={classnames('controller-item', {
      active: props.isStyleActive(props.item.style)
    })}
    onMouseDown={event => props.toggleStyle(event, props.item.style)}
    key={props.item.style}
  >
    {props.item.label}
  </button>
);

export default StyleButton;
