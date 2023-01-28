import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Home from './Home'
import Search from './Search'

function Nav() {
  return (
    <Tabs
    defaultActiveKey="home"
    id="fill-tab-example"
    className="mb-3"
    fill
    >
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="search" title="Search">
        <Search />
      </Tab>
      <Tab eventKey="random" title="Random">
        {/* <Search /> */}
      </Tab>
    </Tabs>
  );
}

export default Nav;