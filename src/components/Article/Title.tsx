import * as React from 'react';

export interface TitleProps {
  children: React.ReactChild;
  style?: React.CSSProperties;
}

function Title(props: TitleProps) {
  const { children, style } = props;

  return <h1 style={style}>{children}</h1>;
}

export default Title;
