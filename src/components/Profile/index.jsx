import React from "react";
import style from "./Profile.module.scss";
import { Tabs } from "antd";
import ProfileInfo from "../ProfileInfo";
import ChangePassword from "../ChangePassword";

const { TabPane } = Tabs;

function Profile({ id }) {
  return (
    <div className={style.manageStores}>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={<p className={style.tabpane}>Thông tin cá nhân</p>}
          key="1"
        >
          <ProfileInfo id={id} />
        </TabPane>
        <TabPane tab="Đổi mật khẩu" key="2">
          <ChangePassword id={id} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
