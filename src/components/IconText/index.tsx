import * as React from 'react';
import parseDate from '../../utils/parseDate';
import Icon from '../Icon';

import './style.sass';

export interface Props {
  children: string;
  icon: string;
}

function IconText(props: Props) {
  const { children, icon } = props;
  return (
    <div className="icontext-wrap">
      <Icon>{icon}</Icon>
      <span>
        {icon.includes('date') ? parseDate('en-US', children) : children}
      </span>
    </div>
  );
}

export default IconText;
