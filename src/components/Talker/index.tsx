import * as React from 'react';

import Button from '../Button';

import './style.sass';

export interface Props {
  src: string;
  username: string;
}

interface States {}

class Talker extends React.Component<Props, States> {
  render() {
    const { src, username } = this.props;
    return (
      <div className="talker-wrap">
        <div className="avatar">
          <img src={src} alt="Avatar" />
        </div>
        <div className="label">{username}</div>
        <div className="action">
          <Button icon="close" />
        </div>
      </div>
    );
  }
}

export default Talker;
