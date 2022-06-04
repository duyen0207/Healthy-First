import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import "./PopupNotification.module.scss";
import style from "../PopupForm/PopupForm.module.scss";
import globalstyle from "../GlobalStyles/Button.module.scss";

function PopupNotification({
  isVisible,
  handleCancel,
  title,
  okButton,
  content,
}) {
  return (
    <Modal
      visible={isVisible}
      title={title}
      onCancel={handleCancel}
      footer={[
        <Button
          key="back"
          onClick={handleCancel}
          className={globalstyle.secondaryButton}
        >
          Xác nhận
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleCancel}
          className={globalstyle.primaryButton}
        >
          {okButton}
        </Button>,
      ]}
    >
      <h2>{content}</h2>
    </Modal>
  );
}

export default PopupNotification;
