import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Search from './Search'

function Nav() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        {/* <Search /> */}
      </Tab>
      <Tab eventKey="profile" title="Search">
        <Search />
      </Tab>
      <Tab eventKey="contact" title="Random" disabled>
        {/* <Search /> */}
      </Tab>
    </Tabs>
  );
}

export default Nav;