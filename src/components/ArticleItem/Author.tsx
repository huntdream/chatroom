import * as React from 'react';
import { Link } from 'react-router-dom';

export interface AuthorType {
  children: string;
  style?: React.CSSProperties;
  href?: string;
}

function Author(props: AuthorType) {
  const { children, style, href } = props;

  return (
    <a className="articleitem-author" style={style} href={href}>
      {children}
    </a>
  );
}

export default Author;
