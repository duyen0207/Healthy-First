import React from "react";
import { Tabs } from "antd";
import clsx from "clsx";

import CertificateList from "./CertificateList";

import style from "../ManageStores/ManageStores.module.scss";
import inputStyles from "../GlobalStyles/Input.module.scss";
import buttonStyles from "../GlobalStyles/Button.module.scss";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

function ManageCertificate() {
  return (
    <div className="navbarContent">
      <div className={style.insideManage}>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Quản lý giấy chứng nhận" key="1">
            <div className={style.summary}>
              <div className={style.search}>
                <input
                  className={clsx(inputStyles.primary, inputStyles.search)}
                  type="text"
                  placeholder="Số cấp giấy chứng nhận"
                />
              </div>

              <div className={style.addButton}>
                <button className={buttonStyles.primary}>Cấp mới</button>
              </div>
            </div>
            <CertificateList />
          </TabPane>
          <TabPane tab="Thống kê" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default ManageCertificate;
