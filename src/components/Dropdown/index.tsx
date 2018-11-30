import * as React from 'react';
import DropdownItem from './DropdownItem';
import classNames from 'classnames';
import './style.sass';

export type DropdownPositions = 'top' | 'right' | 'bottom' | 'left';

export interface DropdownProps {
  position?: DropdownPositions;
  render: React.ReactNode;
  style?: React.CSSProperties;
}

export type Props = {} & DropdownProps;

class Dropdown extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    const { children, render, style } = this.props;
    const { isOpen } = this.state;
    const classes = classNames('dropdown', {
      [`dropdown--${open}`]: isOpen
    });
    return (
      <div className={classes}>
        {render}
        <div className="dropdown-item-wrap" style={style}>
          {children}
        </div>
      </div>
    );
  }
}

export { DropdownItem };
export default Dropdown;
