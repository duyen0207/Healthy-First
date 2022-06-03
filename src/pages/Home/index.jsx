import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import PopupForm from "../../components/PopupForm";
function Home() {
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
  return (
    <>
      <Button type="primary" onClick={handleShowPopup}>
        Show popup
      </Button>
      {showPopup && (
        <PopupForm
          isVisible={showPopup}
          title={"Sửa cơ sở kinh doanh"}
          okButton={"Cập nhật"}
          handleCancel={handleCancel}
          inputList={[
            { label: "Tên cơ sở", name: "storeName" },
            { label: "Địa chỉ", name: "address" },
            { label: "Sđt", name: "phoneNumber" },
            { label: "Loại hình kinh doanh", name: "typeOfBusiness" },
          ]}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default Home;
