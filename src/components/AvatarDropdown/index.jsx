import React from "react";
import { Avatar, Popover, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import style from "./AvatarDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const content = (
  <div className={style.dropDown}>
    <Button className={style.button} type="text" href="/profile">
      <FontAwesomeIcon icon={faUser} />
      <label htmlFor="" className={style.label}>Thông tin cá nhân</label>
      
    </Button>
    <Button className={style.button} type="text" href="/settings">
      <FontAwesomeIcon icon={faGear} />
      <label htmlFor="" className={style.label}>Cài đặt</label>
    </Button>
    <Button className={style.button} type="text" href="/logout">
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      <label htmlFor="" className={style.label}>Đăng xuất</label>
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
