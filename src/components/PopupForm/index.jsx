import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import style from "./PopupForm.module.scss";

function Popup({
  isVisible,
  title,
  okButton,
  handleCancel,
  inputList,
  handleSubmit,
}) {
  const [input, setInput] = useState({});
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
          onClick={() => {
            handleSubmit(input);
          }}
          style={{ backgroundColor: "#30ABC2", borderRadius: "10px" }}
        >
          {okButton}
        </Button>,
      ]}
    >
      {inputList.map((input) => (
        <div key={input.name}>
          <label>{input.label}</label>
          <Input
            name={input.name}
            required
            className={style.input}
            type="text"
            placeholder={input.label}
            onChange={(e) => {
              const temp = {};
              temp[input.name] = e.target.value;
              setInput((previous) => {
                return { ...previous, ...temp };
              });
            }}
          />
        </div>
      ))}
    </Modal>
  );
}

export default Popup;
