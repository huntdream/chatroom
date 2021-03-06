import * as React from 'react';
import classnames from 'classnames';

import './style.sass';

export type InputTypes = 'text' | 'password' | 'email';

export interface InputEventHanlder {
  (event: React.FocusEvent<HTMLInputElement>): void;
}

export interface ChangeEventHanlder {
  (event: React.ChangeEvent<HTMLInputElement>): void;
}

export interface InputProps {
  id?: string;
  label?: string;
  type?: InputTypes;
  style?: React.CSSProperties;
  onFocus?: InputEventHanlder;
  onBlur?: InputEventHanlder;
  onChange?: ChangeEventHanlder;
  autocomplete?: string;
  placeholder?: string;
  defaultValue?: string;
}

export interface InputState {
  focused: boolean;
  value: string;
}

class Input extends React.Component<InputProps, InputState> {
  static defaultProps: InputProps = {
    type: 'text',
    defaultValue: '',
    autocomplete: 'off'
  };

  constructor(props: InputProps) {
    super(props);
    this.state = {
      focused: false,
      value: this.props.defaultValue
    };
  }

  // Handler when input is focused
  _onFocus: InputEventHanlder = event => {
    const { onFocus } = this.props;

    this.setState({
      focused: true
    });

    if (onFocus) {
      onFocus(event);
    }
  };

  // Handler when the focus on input is blurred
  _onBlur: InputEventHanlder = event => {
    const { onBlur } = this.props;

    this.setState({
      focused: false
    });

    if (onBlur) {
      onBlur(event);
    }
  };

  // Hanlder when the value of input changed
  _onChange: ChangeEventHanlder = event => {
    const { onChange } = this.props;

    this.setState({
      value: event.target.value
    });

    if (onChange) {
      onChange(event);
    }
  };

  render() {
    const { id, label, type, style, placeholder, autocomplete } = this.props;
    const { focused, value } = this.state;

    const wrapClass = classnames(
      'input-wrap',
      focused ? 'input-wrap--focused' : '',
      value ? 'input-wrap--notempty' : ''
    );
    return (
      <div className={wrapClass} style={style}>
        <div className="input-body">
          <input
            autoComplete={autocomplete}
            id={id}
            type={type}
            className="input-field"
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            onChange={this._onChange}
            value={value}
            placeholder={!label || focused ? placeholder : ''}
          />
        </div>
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
}

export default Input;
