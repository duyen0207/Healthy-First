import React, { useState } from "react";
import { Tabs, DatePicker } from "antd";
import clsx from "clsx";

import CertificateList from "./CertificateList";
import Barchart from "../Barchart";

import PopupForm from "../PopupForm";
import style from "../ManageStores/ManageStores.module.scss";
import inputStyles from "../GlobalStyles/Input.module.scss";
import buttonStyles from "../GlobalStyles/Button.module.scss";
import thisStyle from "./ManageCertificate.module.scss";


const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

function ManageCertificate() {
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
                  <button
                    className={buttonStyles.primary}
                    onClick={handleShowPopup}
                  >
                    Cấp mới
                  </button>
                </div>
              </div>
              <CertificateList />
            </TabPane>
            <TabPane tab="Thống kê" key="2">
              <div className={thisStyle.datePicker}>
                <DatePicker
                  placeholder="Chọn năm"
                  picker="year"
                  bordered={true}
                  className={thisStyle.chooseYear}
                />
              </div>
              <Barchart />
              <div className={thisStyle.chartName}>
                Biểu đồ thống kê số lượng giấy chứng nhận cấp theo thời gian
                theo loại hình cơ sở
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      {showPopup && (
        <PopupForm
          fillForm={false}
          object={{}}
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

export default ManageCertificate;
