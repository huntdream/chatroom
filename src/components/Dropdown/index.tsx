import * as React from 'react';
import DropdownItem from './DropdownItem';
import classNames from 'classnames';
import './style.sass';

export type DropdownPositions = 'top' | 'right' | 'bottom' | 'left';
export type TriggerTypes = 'hover' | 'click';

export interface DropdownProps {
  position?: DropdownPositions;
  render: React.ReactNode;
  style?: React.CSSProperties;
  trigger?: TriggerTypes;
}

export type Props = {} & DropdownProps;

class Dropdown extends React.Component<Props, any> {
  static defaultProps = {
    trigger: 'hover'
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  _onClick: React.MouseEventHandler = e => {
    const { target } = e;
    const { trigger } = this.props;
    if (trigger === 'click') {
      this.setState({
        isShow: true
      });
    }
  };

  render() {
    const { children, render, style, trigger } = this.props;
    const { isShow } = this.state;
    const classes = classNames('dropdown', `dropdown__${trigger}`, {
      show: isShow
    });
    return (
      <div className={classes} onClick={this._onClick}>
        {render}
        <div className="dropdown-item-wrap">
          <ul className="dropdown-item-list">{children}</ul>
        </div>
      </div>
    );
  }
}

export { DropdownItem };
export default Dropdown;
