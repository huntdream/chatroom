import * as React from 'react';
import Form from '../../components/Form';
import { connect } from 'react-redux';
import MyEditor from '../../components/MyEditor';
import Button from '../../components/Button';
import Input, { ChangeEventHanlder } from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import { addArticle } from '../../redux/actions';

import './style.sass';

export interface Props {
  addarticle: any;
}

interface States {
  title: string;
  content: string;
}

class New extends React.Component<Props, States> {
  state = {
    checked: true,
    title: '',
    content: ''
  };

  setTitle: ChangeEventHanlder = e => {
    this.setState({
      title: e.target.value
    });
  };

  setContent = (content: string) => {
    this.setState({
      content
    });
  };

  onSubmit = () => {
    const { title, content } = this.state;
    this.props.addarticle({ title, content });
  };

  render() {
    return (
      <div className="new-wrap">
        {/* <Form>
          {formState => (
            <React.Fragment> */}
        <div className="new-title">
          <Input
            autocomplete="off"
            id="field-title"
            label="Title"
            style={{ fontSize: '2rem' }}
            onChange={this.setTitle}
          />
        </div>
        <div className="new-editor">
          <MyEditor setContent={this.setContent} />
        </div>
        <div className="new-controls">
          <Checkbox label="Private" defaultValue={this.state.checked} />
          <Button color="secondary">Save</Button>
          <Button onClick={this.onSubmit}>Publish</Button>
        </div>
        {/* </React.Fragment>
          )}
        </Form> */}
      </div>
    );
  }
}

const mapDisaptchToProps = (dispatch: any) => ({
  addarticle: (payload: any) => dispatch(addArticle.request(payload))
});

export default connect(
  null,
  mapDisaptchToProps
)(New);
