import * as React from 'react';
import './style.sass';
import Button from '../../components/Button';
import Dropdown, { DropdownItem } from '../../components/Dropdown';

class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <h2>Build ui components first</h2>
        <Button color="primary">Primary</Button>
        <Button icon="close" />
        <div className="dropdown-wrap">
          <Dropdown
            style={{ width: '110px' }}
            render={<Button>DropDown</Button>}
          >
            <DropdownItem>It's me</DropdownItem>
            <DropdownItem>Dropdown</DropdownItem>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Index;
