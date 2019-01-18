import * as React from 'react';
import Ink from 'react-ink';
import classNames from 'classnames';

import './style.sass';

export type ButtonTypes = 'button' | 'submit' | 'reset';
export type ButtonColors = 'primary' | 'secondary';

export interface ButtonProps {
  children: React.ReactNode;
  color?: ButtonColors;
  icon?: string;
  prefix?: string;
  type?: ButtonTypes;
  loading?: boolean;
}

export type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonProps;

class Button extends React.Component<Props, any> {
  static defaultProps = {
    color: 'primary',
    prefix: 'btn',
    type: 'button',
    loading: false
  };

  constructor(props: Props) {
    super(props);
  }

  handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    const { onClick } = this.props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  };

  render() {
    const { children, color, icon, prefix, type } = this.props;
    const classes = classNames(prefix, {
      [`${prefix}--${color}`]: color,
      [`${prefix}--icon`]: icon
    });
    return (
      <button type={type} className={classes} onClick={this.handleClick}>
        <span className="btn-content">
          {children}
          {icon && <i className="material-icons">{icon}</i>}
        </span>
        <Ink />
      </button>
    );
  }
}

export default Button;
