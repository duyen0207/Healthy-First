import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import style from "./Popup.module.scss";

function Popup({ isVisible, title, okButton, handleCancel, inputList }) {
  return (
    <Modal
      visible={isVisible}
      title={title}
      onCancel={handleCancel}
      footer={[
        <Button
          key="back"
          onClick={handleCancel}
          style={{
            color: "#30ABC2",
            borderRadius: "10px",
            borderColor: "#30ABC2",
          }}
        >
          Hủy
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleCancel}
          style={{ backgroundColor: "#30ABC2", borderRadius: "10px" }}
        >
          {okButton}
        </Button>,
      ]}
    >
      {inputList.map((input) => (
        <div>
          <label>{input}</label>
          <Input className={style.input} type="text" placeholder={input} />
        </div>
      ))}
    </Modal>
  );
}

export default Popup;
