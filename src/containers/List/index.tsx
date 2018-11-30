import * as React from 'react';
import Talker from '../../components/Talker';

import birdy from '../../assets/img/Birdy.png';

import './style.sass';

class List extends React.Component {
  render() {
    return (
      <div className="list-wrap">
        <Talker src={birdy} username="birdy" />
      </div>
    );
  }
}

export default List;
