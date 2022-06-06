import React, { useState, useEffect } from "react";
import { Modal, Button, Input, message, Select } from "antd";
import style from "./PopupForm.module.scss";
import buttonStyles from "../GlobalStyles/Button.module.scss";

const { Option } = Select;

function PopupForm({
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
      temp["status"] = "ok";
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
          className={buttonStyles.secondaryButton}
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
          className={buttonStyles.primaryButton}
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
            defaultValue={input?.value}
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
          <label>Kết quả</label>
          <Select
            name="status"
            className={style.select}
            defaultValue="ok"
            style={{ width: 120 }}
            onChange={(e) => {
              const temp = {};
              temp["status"] = e;
              setInput((previous) => {
                return { ...previous, ...temp };
              });
            }}
          >
            <Option value="ok">Đạt</Option>
            <Option value="notOk">Không đạt</Option>
          </Select>
        </>
      ) : (
        <></>
      )}
    </Modal>
  );
}

export default PopupForm;
