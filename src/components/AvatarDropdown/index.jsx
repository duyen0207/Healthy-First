import React from "react";
import { Avatar, Popover, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import style from "./AvatarDropdown.module.scss";

const content = (
  <div>
    <Button className={style.button} type="text" href="/profile">
      Thông tin cá nhân
    </Button>
    <Button className={style.button} type="text" href="/settings">
      Cài đặt
    </Button>
    <Button className={style.button} type="text" href="/logout">
      Đăng xuất
    </Button>
  </div>
);

function AvatarDropdown({ user }) {
  return (
    <>
      <Popover content={content} trigger="click" placement="bottomRight">
        <Avatar size="large" icon={<UserOutlined />} />
      </Popover>
    </>
  );
}

export default AvatarDropdown;
