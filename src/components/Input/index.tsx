import * as React from 'react';

import './style.sass';

export type InputTypes = 'text' | 'password' | 'email';

export interface FocusHandler {
  (event: React.FormEvent<HTMLInputElement>): void;
}
export interface InputProps {
  type?: InputTypes;
  style?: React.CSSProperties;
  onFocus?: React.FormEventHandler;
  onBlur?: React.FormEventHandler;
}

class Input extends React.Component<InputProps, {}> {
  static defaultProps = {
    type: 'text'
  };

  _onFocus: FocusHandler = event => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(event);
    }
  };

  render() {
    const { type, style } = this.props;
    return (
      <div className="input-wrap" style={style}>
        <label />
        <div className="input-body">
          <input type={type} className="input-field" onFocus={this._onFocus} />
        </div>
      </div>
    );
  }
}

export default Input;
