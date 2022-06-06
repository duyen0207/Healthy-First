import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import PopupForm from "../PopupForm";
import PopupNotification from "../PopupNotification";

function PopupButton(type, props) {
  if (type == "popup-form") {
    const { title, okButton, inputList, select } = props;
  } else if (type == "popup-notification") {
    const { title, okButton, content } = props;
  }

  //Code phần này nên đưa vào 1 component riêng để có thể tái sử dụng trong trang quản
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  const handleCancel = () => {
    setShowPopup(false);
  };
  //TODO: sửa hàm handleSubmit để dùng api (ví dụ như tạo mới hoặc cập nhật cơ sở kinh doanh)
  const handleSubmit = (e) => {
    console.log(e);
  };

  //   const [showNotification, setShowNotification] = useState(false);
  //   const handleShowNotification = () => {
  //     setShowNotification(true);
  //   };
  //   const handleCancelNotification = () => {
  //     setShowNotification(false);
  //   };
  return (
    <>
      <Button type="primary" onClick={handleShowPopup}>
        Show popup
      </Button>
      {showPopup && (
        <PopupForm
          fillForm={false}
          object={{}}
          isVisible={showPopup}
          title={title}
          okButton={okButton}
          handleCancel={handleCancel}
          inputList={[
            { label: "Tên cơ sở", name: "storeName" },
            { label: "Địa chỉ", name: "address" },
            { label: "Sđt", name: "phoneNumber" },
            { label: "Loại hình kinh doanh", name: "typeOfBusiness" },
          ]}
          select={true}
          handleSubmit={handleSubmit}
        />
      )}

      {/* <Button type="default" onClick={handleShowNotification}>
        Show Notification
      </Button>
      {showNotification && (
        <PopupNotification
          isVisible={showNotification}
          handleCancel={handleCancelNotification}
          title={""}
          okButton={"Xác nhận và in"}
          content={"Thu hồi thành công"}
        />
      )} */}
    </>
  );
}

export default PopupButton;
