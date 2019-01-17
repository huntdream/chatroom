import * as React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import StyleButton from './StyleButton';
import 'draft-js/dist/Draft.css';

import './style.sass';

export interface State {
  editorState: EditorState;
}

export interface StyleItem {
  label: string;
  style: string;
}

export interface StyleConfig extends Array<any> {
  [index: number]: StyleItem;
}

const blockStyleConfig: StyleConfig = [
  {
    label: 'H1',
    style: 'header-one'
  },
  {
    label: 'H2',
    style: 'header-two'
  },
  {
    label: 'H3',
    style: 'header-three'
  },
  {
    label: 'Block',
    style: 'blockquote'
  },
  {
    label: 'UL',
    style: 'unordered-list-item'
  },
  {
    label: 'OL',
    style: 'ordered-list-item'
  },
  {
    label: 'Code',
    style: 'code-block'
  }
];

const inlineStyleConfig: StyleConfig = [
  {
    label: 'B',
    style: 'BOLD'
  },
  {
    label: 'I',
    style: 'ITALIC'
  }
];

class MyEditor extends React.Component<{}, State> {
  private editorRef: React.RefObject<Editor>;

  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    const node = this.editorRef.current;
    node.focus();
  }

  // Handle key command
  handleKeyCommand = (command: any, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  onChange = (editorState: EditorState) => {
    this.setState({
      editorState
    });
  };

  // Handle click for controller items
  toggleInlineStyle = (event: React.MouseEvent, type: string) => {
    event.preventDefault();
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(editorState, type));
  };

  // Is inline style active
  isInlineStyleActive = (style: string) => {
    const { editorState } = this.state;
    return editorState.getCurrentInlineStyle().has(style);
  };

  // Render controller items
  renderController = () =>
    styleConfig.map(item => (
      <StyleButton
        item={item}
        key={item.style}
        isInlineStyleActive={this.isInlineStyleActive}
        toggleInlineStyle={this.toggleInlineStyle}
      />
    ));

  render() {
    const { editorState } = this.state;
    return (
      <div className="my-editor">
        <div className="my-editor-controller">{this.renderController()}</div>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          placeholder="Tell a story..."
          ref={this.editorRef}
        />
      </div>
    );
  }
}

export default MyEditor;
