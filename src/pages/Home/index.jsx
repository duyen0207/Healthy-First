import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import PopupForm from "../../components/PopupForm";
import PopupNotification from "../../components/PopupNotification";
import Navbar from "../../components/Layout/Navbar";

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

  const [showNotification, setShowNotification] = useState(false);
  const handleShowNotification = () => {
    setShowNotification(true);
  };
  const handleCancelNotification = () => {
    setShowNotification(false);
  };
  return (
    <>
      <Navbar />
    </>
  );
}

export default Home;
