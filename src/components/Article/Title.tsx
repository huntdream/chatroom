import * as React from 'react';

export interface TitleProps {
  children: React.ReactChild;
  style?: React.CSSProperties;
}

function Title(props: TitleProps) {
  const { children, style } = props;

  return (
    <h2 style={style} className="article-title">
      {children}
    </h2>
  );
}

export default Title;
