import * as React from 'react';
import MyEditor from '../../components/MyEditor';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import './style.sass';

class New extends React.Component {
  state = {
    checked: true
  };

  render() {
    return (
      <div className="new-wrap">
        <div className="new-title">
          <Input
            label="text"
            placeholder="Title"
            style={{ fontSize: '2.4rem' }}
            defaultValue="Hello"
          />
        </div>
        <div className="new-editor">
          <MyEditor />
        </div>
        <div className="new-controls">
          <Checkbox label="Private" defaultValue={this.state.checked} />
          <Button color="secondary">Save</Button>
          <Button>Submit</Button>
        </div>
      </div>
    );
  }
}

export default New;
