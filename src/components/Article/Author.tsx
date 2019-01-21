import * as React from 'react';

export interface AuthorType {
  children: string;
  style?: React.CSSProperties;
  href?: string;
}

function Author(props: AuthorType) {
  const { children, style, href } = props;

  return (
    <a className="article-author" style={style} href={href}>
      {children}
    </a>
  );
}

export default Author;
