import * as React from 'react';
import classnames from 'classnames';
import { CheckActive, ToggleStyle } from './Edit';
import { StyleItem } from './StyleConfig';

export interface StyleButtonProps {
  item: StyleItem;
  toggleStyle: ToggleStyle;
  isStyleActive: CheckActive;
}

const StyleButton = ({
  item,
  toggleStyle,
  isStyleActive
}: {
  item: StyleItem;
  toggleStyle: ToggleStyle;
  isStyleActive: CheckActive;
}) => (
  <button
    type="button"
    className={classnames('controller-item', {
      active: isStyleActive(item.style)
    })}
    onMouseDown={event => toggleStyle(event, item.style)}
    key={item.style}
  >
    {item.label}
  </button>
);

export default StyleButton;
