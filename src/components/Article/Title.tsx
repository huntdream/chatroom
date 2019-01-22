import * as React from 'react';
import { Link } from 'react-router-dom';

export interface TitleProps {
  children: React.ReactChild;
  style?: React.CSSProperties;
  id: string;
}

function Title(props: TitleProps) {
  const { children, style, id } = props;

  return (
    <h2 style={style} className="article-title">
      <Link to={`/article/${id}`}>{children}</Link>
    </h2>
  );
}

export default Title;
