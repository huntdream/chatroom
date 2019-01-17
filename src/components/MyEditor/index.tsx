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

export interface CheckActiveFunc {
  (style: string): boolean;
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

  // Update editorState
  onChange = (editorState: EditorState) => {
    this.setState({
      editorState
    });
  };

  // Toggle Inline Style
  toggleInlineStyle = (event: React.MouseEvent, type: string) => {
    event.preventDefault();
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(editorState, type));
  };

  // Check if inline style is active
  isInlineStyleActive: CheckActiveFunc = (style: string) => {
    const { editorState } = this.state;
    return editorState.getCurrentInlineStyle().has(style);
  };

  // Toggle block style
  toggleBlockStyle = (event: React.MouseEvent, type: string) => {
    event.preventDefault();
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleBlockType(editorState, type));
  };

  // Check if block style is active
  isBlockStyleActive: CheckActiveFunc = (style: string) => {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    return (
      editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType() === style
    );
  };

  // Render block style controls
  renderBlockStyle = () =>
    blockStyleConfig.map((item: StyleItem) => (
      <StyleButton
        item={item}
        key={item.style}
        toggleStyle={this.toggleBlockStyle}
        isStyleActive={this.isBlockStyleActive}
      />
    ));

  // Render inline style controls
  renderInlineStyle = () =>
    inlineStyleConfig.map((item: StyleItem) => (
      <StyleButton
        item={item}
        key={item.style}
        toggleStyle={this.toggleInlineStyle}
        isStyleActive={this.isInlineStyleActive}
      />
    ));

  render() {
    const { editorState } = this.state;
    return (
      <div className="my-editor">
        <div className="my-editor-controller">
          {this.renderBlockStyle()}
          {this.renderInlineStyle()}
        </div>
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
