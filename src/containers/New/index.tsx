import * as React from 'react';
import Form from '../../components/Form';
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
        <Form>
          {formState => (
            <React.Fragment>
              <div className="new-title">
                <Input
                  id="field-title"
                  label="Title"
                  placeholder="Title"
                  style={{ fontSize: '2rem' }}
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
            </React.Fragment>
          )}
        </Form>
      </div>
    );
  }
}

export default New;
