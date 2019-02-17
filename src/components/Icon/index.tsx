import * as React from 'react';

export interface Props {
  children: string;
}

function Icon(props: Props) {
  const { children } = props;
  return <i className="material-icons">{children}</i>;
}

export default Icon;
