import * as React from 'react';

import './style.sass';

export interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

export type Props = {} & DropdownItemProps;

class DropdownItem extends React.Component<Props, object> {
  handleClick: React.MouseEventHandler = e => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  };
  render() {
    const { children } = this.props;
    return (
      <div className="dropdown-item" onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default DropdownItem;
