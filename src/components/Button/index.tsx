import * as React from 'react';
import classNames from 'classnames';
import './style.sass';

export type ButtonTypes = 'button' | 'submit' | 'reset';
export type ButtonColors = 'primary';

export interface ButtonProps {
  children?: React.ReactNode;
  color?: ButtonColors;
  icon?: string;
  prefix?: string;
  type?: ButtonTypes;
}

export type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonProps;

class Button extends React.Component<Props, any> {
  static defaultProps = {
    color: 'primary',
    prefix: 'btn',
    type: 'button',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false,
    };
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
      [`${prefix}--icon`]: icon,
    });
    return (
      <button type={type} className={classes} onClick={this.handleClick}>
        <div className="btn-content">
          {children}
          {icon && <i className="material-icons">{icon}</i>}
        </div>
      </button>
    );
  }
}

export default Button;
