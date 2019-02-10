import * as React from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  ContentBlock
} from 'draft-js';

import { blockStyleConfig, inlineStyleConfig, StyleItem } from './StyleConfig';
import StyleButton from './StyleButton';
import 'draft-js/dist/Draft.css';

export interface Props {
  setContent?: any;
}

export interface States {
  editorState: EditorState;
}

export interface CheckActive {
  (style: string): boolean;
}

export interface ToggleStyle {
  (event: React.MouseEvent, style: string): void;
}

class Edit extends React.Component<Props, States> {
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
    const { setContent } = this.props;
    this.setState({
      editorState
    });

    setContent(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  };

  // Toggle Inline Style
  toggleInlineStyle = (event: React.MouseEvent, type: string) => {
    event.preventDefault();
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(editorState, type));
  };

  // Check if inline style is active
  isInlineStyleActive: CheckActive = (style: string) => {
    const { editorState } = this.state;
    return editorState.getCurrentInlineStyle().has(style);
  };

  // Toggle block style
  toggleBlockStyle: ToggleStyle = (event, type) => {
    event.preventDefault();
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleBlockType(editorState, type));
  };

  // Check if block style is active
  isBlockStyleActive: CheckActive = style => {
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

  // Custom block style function
  myBlockStyleFn = (contentBlock: ContentBlock) => {
    const type = contentBlock.getType();
    switch (type) {
      case 'code-block':
        return 'my-code-block';
      case 'blockquote':
        return 'my-blockquote';
      default:
        break;
    }
  };

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
          blockStyleFn={this.myBlockStyleFn}
          ref={this.editorRef}
        />
      </div>
    );
  }
}

export default Edit;
