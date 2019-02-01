import * as React from 'react';
import { Link } from 'react-router-dom';

export interface TitleProps {
  style?: React.CSSProperties;
  render: any;
}

function Title(props: TitleProps) {
  const { style, render } = props;

  return (
    <h2 style={style} className="article-title">
      {render()}
    </h2>
  );
}

export default Title;
