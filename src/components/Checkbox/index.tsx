import * as React from 'react';
import classnames from 'classnames';

import './style.sass';

export type ColorType = 'primary' | 'secondary';

export interface CheckboxProps {
  label?: string;
  onClick?: React.ChangeEventHandler;
  type?: ColorType;
  defaultValue?: boolean;
}

export interface CheckboxStates {
  checked: boolean;
}

export interface ChangeEvent {
  (event: React.ChangeEvent<HTMLInputElement>): void;
}

class Checkbox extends React.Component<CheckboxProps, CheckboxStates> {
  static defaultProps: CheckboxProps = {
    defaultValue: false,
    type: 'primary'
  };

  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      checked: this.props.defaultValue
    };
  }

  // Hanlde click event
  _onClick: ChangeEvent = event => {
    const { onClick } = this.props;
    const { checked } = event.target;

    this.setState({
      checked
    });

    if (onClick) {
      onClick(event);
    }
  };

  render() {
    const { label, type } = this.props;
    const { checked } = this.state;

    const indicatorClass = classnames(
      'checkbox-indicator',
      `checkbox-indicator--${type}`,
      checked ? 'checkbox--checked' : ''
    );

    return (
      <label className="checkbox-wrap">
        <span className={indicatorClass}>
          <span className="checkbox-svg-wrap">
            <svg
              className="checkbox-svg"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              {checked && (
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              )}
            </svg>
          </span>
          <input
            type="checkbox"
            className="checkbox-input"
            checked={checked}
            onChange={this._onClick}
          />
        </span>
        <span className="checkbox-label">{label}</span>
      </label>
    );
  }
}

export default Checkbox;
