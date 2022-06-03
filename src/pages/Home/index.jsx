import React, { useState } from "react";
import "antd/dist/antd.css";
import Popup from "../../components/Popup";
import { Button } from "antd";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  const handleCancel = () => {
    setShowPopup(false);
  };
  return (
    <>
      <Button type="primary" onClick={handleShowPopup}>
        Show popup
      </Button>
      {showPopup && (
        <Popup
          isVisible={showPopup}
          title={"Sửa"}
          okButton={"Cập nhật"}
          handleCancel={handleCancel}
          inputList={["Tên cơ sở", "Địa chỉ", "Sđt", "Loại hình kinh doanh"]}
        />
      )}
    </>
  );
}

export default Home;
