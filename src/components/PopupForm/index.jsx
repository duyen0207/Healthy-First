import React, { useState, useEffect } from "react";
import { Modal, Button, Input, message } from "antd";
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
  useEffect(() => {
    inputList.map((input) => {
      const temp = {};
      temp[input.name] = "";
      setInput((previous) => {
        return { ...previous, ...temp };
      });
    });
  }, []);
  return (
    <Modal
      visible={isVisible}
      title={title}
      onCancel={handleCancel}
      footer={[
        <Button
          key="back"
          onClick={handleCancel}
          className={style.secondaryButton}
        >
          Hủy
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            if (!Object.values(input).includes("")) handleSubmit(input);
            else message.warning("Hãy nhập các trường");
          }}
          className={style.primaryButton}
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
