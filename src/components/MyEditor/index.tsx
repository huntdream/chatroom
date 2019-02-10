import * as React from 'react';
import Edit from './Edit';

import './style.sass';

export interface Props {
  setContent?: any;
  readOnly?: boolean;
  content?: string;
}

export interface States {}

class MyEditor extends React.Component<Props, States> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { setContent, readOnly, content } = this.props;
    return (
      <div className="my-editor-wrap">
        <Edit setContent={setContent} />
      </div>
    );
  }
}

export default MyEditor;
