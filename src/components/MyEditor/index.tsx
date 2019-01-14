import * as React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import StyleButton from "./StyleButton";
import "draft-js/dist/Draft.css";

import "./style.sass";

interface State {
  editorState: EditorState;
}

const styleConfig = [
  {
    label: "B",
    style: "BOLD"
  },
  {
    label: "I",
    style: "ITALIC"
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
  handleKeyCommand = (command: any, editorState: any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  // Update state
  onChange = (editorState: any) => {
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