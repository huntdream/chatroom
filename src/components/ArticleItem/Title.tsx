import * as React from 'react';
import { Link } from 'react-router-dom';

export interface TitleProps {
  style?: React.CSSProperties;
  to: string;
  children: any;
}

function Title(props: TitleProps) {
  const { style, to, children } = props;

  return (
    <h2 className="articleitem-title-wrap">
      <Link to={to} style={style} className="articleitem-title">
        {children}
      </Link>
    </h2>
  );
}

export default Title;
