import * as React from 'react';
import List from '../List';
import Message from '../Message';
import Input from '../Input';

import './style.sass';

class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="up-wrap">
          <div className="list-wrap">
            <List />
          </div>
          <div className="message-wrap">
            <Message />
          </div>
        </div>
        <div className="down-wrap">
          <div className="input-wrap">
            <Input />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
