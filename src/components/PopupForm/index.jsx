import React, { useState, useEffect } from "react";
import { Modal, Button, Input, message, Select } from "antd";
import style from "./PopupForm.module.scss";
import globalstyle from "../GlobalStyles/Button.module.scss";

const { Option } = Select;

function Popup({
  isVisible,
  title,
  okButton,
  handleCancel,
  inputList,
  handleSubmit,
  select,
}) {
  const [input, setInput] = useState({});
  useEffect(() => {
    if (select) {
      const temp = {};
      temp["status"] = "sent";
      setInput((previous) => {
        return { ...previous, ...temp };
      });
    }
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
          className={globalstyle.secondaryButton}
        >
          Hủy
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            console.log(input);
            if (!Object.values(input).includes("")) handleSubmit(input);
            else message.warning("Hãy nhập các trường");
          }}
          className={globalstyle.primaryButton}
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
      {select ? (
        <>
          <label>Trạng thái</label>
          <Select
            name="status"
            className={style.select}
            defaultValue="sent"
            style={{ width: 120 }}
            onChange={(e) => {
              const temp = {};
              temp["status"] = e;
              setInput((previous) => {
                return { ...previous, ...temp };
              });
            }}
          >
            <Option value="sent">Đã gửi</Option>
            <Option value="notSent">Chưa gửi</Option>
          </Select>
        </>
      ) : (
        <></>
      )}
    </Modal>
  );
}

export default Popup;
