import { Tabs, Tab } from "antd";

import NavItem from "./NavItem";

import style from "./Navbar.module.scss";

const { TabPane } = Tabs;

function Navbar() {
  return (
    <div className={style.navbar}>
      {/* <h2>sidebar</h2> */}
      {/* <NavItem /> */}
      <Tabs>
        <TabPane tab="Tab Title 1" key="1">
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </TabPane>
        <TabPane tab="Tab Title 2" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab="Tab Title 3" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Navbar;
