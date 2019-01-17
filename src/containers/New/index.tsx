import * as React from 'react';
import MyEditor from '../../components/MyEditor';
import Button from '../../components/Button';
import Input from '../../components/Input';

import './style.sass';

class New extends React.Component {
  render() {
    return (
      <div className="new-wrap">
        <div className="new-title">
          <Input
            label="text"
            placeholder="Title"
            style={{ fontSize: '2.4rem' }}
          />
        </div>
        <div className="new-editor">
          <MyEditor />
        </div>
        <div className="new-controls">
          <Button color="secondary">Save</Button>
          <Button>Submit</Button>
        </div>
      </div>
    );
  }
}

export default New;
