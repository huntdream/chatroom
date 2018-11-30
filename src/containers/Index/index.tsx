import * as React from 'react';
import List from '../List';
import Message from '../Message';
import Input from '../Input';

import './style.sass';

class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="left-pane">
          <div className="list-container">
            <List />
          </div>
        </div>
        <div className="right-pane">
          <div className="message-container">
            <Message />
          </div>
          <div className="input-container">
            <Input />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
