import { Tabs } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa9,
  faCheckToSlot,
  faCircleInfo,
  faPager,
  faPeopleArrows,
  faPeopleCarry,
  faPeopleCarryBox,
  faPeopleGroup,
  faPeopleLine,
  faWarehouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import style from "./Navbar.module.scss";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

import ManageStores from "../../ManageStores";
import { useState } from "react";

import Profile from "../../Profile";

const { TabPane } = Tabs;

function Navbar() {
  return (
    <Tabs className={style.navbar} tabPosition="left">
      <TabPane
        key="1"
        tab={
          <div>
            <FontAwesomeIcon icon={faWarehouse} className="fa-xl" />
            <label htmlFor="" className={style.itemName}>
              Quản lý cơ sở
            </label>
          </div>
        }
      >
        <ManageStores />
      </TabPane>
      <TabPane
        key="2"
        tab={
          <div className={style.navItem}>
            <FontAwesomeIcon icon={faPager} className="fa-xl" />
            <label htmlFor="" className={style.itemName}>
              Quản lý giấy chứng nhận
            </label>
          </div>
        }
      >
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane
        key="3"
        tab={
          <div className={style.navItem}>
            <FontAwesomeIcon icon={faCheckToSlot} className="fa-xl" />
            {/* <FontAwesomeIcon icon="fa-solid fa-ballot-check" /> */}
            <label htmlFor="" className={style.itemName}>
              Hoạt động thanh kiểm tra
            </label>
          </div>
        }
      >
        <p>Content of Tab Pane 3</p>
      </TabPane>

      <TabPane
        key="4"
        tab={
          <div className={style.navItem}>
            <FontAwesomeIcon icon={faPeopleLine} className="fa-xl" />
            {/* <FontAwesomeIcon icon="fa-solid fa-ballot-check" /> */}
            <label htmlFor="" className={style.itemName}>
              Quản lý chuyên viên
            </label>
          </div>
        }
      >
        <p>Content of Tab Pane 4</p>
      </TabPane>
      <TabPane
        key="5"
        tab={
          <div className={style.navItem}>
            <FontAwesomeIcon icon={faUser} className="fa-xl" />
            {/* <FontAwesomeIcon icon="fa-solid fa-ballot-check" /> */}
            <label htmlFor="" className={style.itemName}>
              Hồ sơ
            </label>
          </div>
        }
      >
        <Profile id={10} />
        {/* id ở đây là userId truyền cho Profile */}
      </TabPane>
    </Tabs>
  );
}

export default Navbar;
