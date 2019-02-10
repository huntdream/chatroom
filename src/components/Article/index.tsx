import * as React from 'react';
import { Editor, convertFromRaw, EditorState, ContentBlock } from 'draft-js';

import { ArticleType } from '../ArticleList';

import './style.sass';

export interface Props {
  article: ArticleType;
}

interface States {
  editorState: EditorState;
}

class Article extends React.Component<Props, States> {
  componentDidMount() {}

  // Initial Content
  convertToEditorState = (content: string) => {
    return EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
  };

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

  // noop
  onChange = () => {};

  render() {
    const { article } = this.props;
    const { title, author, date, content } = article;
    return (
      <div className="article-wrap">
        <h2 className="article-title">{title}</h2>
        <div className="article-info">
          <span className="article-author">{author}</span>
        </div>
        <div className="article-content">
          {content && (
            <Editor
              onChange={this.onChange}
              blockStyleFn={this.myBlockStyleFn}
              readOnly
              editorState={this.convertToEditorState(content)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Article;
