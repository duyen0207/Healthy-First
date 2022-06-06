import React, { useState } from "react";
import { Tabs, DatePicker } from "antd";
import clsx from "clsx";

import PopupForm from "../PopupForm";
import StaffList from "./StaffList";
import style from "../ManageStores/ManageStores.module.scss";
import inputStyles from "../GlobalStyles/Input.module.scss";
import buttonStyles from "../GlobalStyles/Button.module.scss";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

function ManageStaff() {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="navbarContent">
        <div className={style.insideManage}>
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Quản lý chuyên viên" key="1">
              <div className={style.summary}>
                <div className={style.search}>
                  <input
                    className={clsx(inputStyles.primary, inputStyles.search)}
                    type="text"
                    placeholder="Tìm chuyên viên qua tài khoản"
                  />
                </div>

                <div className={style.addButton}>
                  <button
                    className={buttonStyles.primary}
                    onClick={handleShowPopup}
                  >
                    Thêm mới
                  </button>
                </div>
              </div>
              <StaffList />
            </TabPane>
            <TabPane tab="Phân địa bàn" key="2">
             thống kê
            </TabPane>
          </Tabs>
        </div>
      </div>
      {showPopup && (
        <PopupForm
          isVisible={showPopup}
          title={"Cấp mới giấy chứng nhận"}
          okButton={"Cấp mới"}
          handleCancel={handleCancel}
          inputList={[
            { label: "Tên cơ sở", name: "storeName" },
            { label: "Ngày cấp", name: "date" },
            { label: "Số cấp", name: "number" },
          ]}
          select={false}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default ManageStaff;
