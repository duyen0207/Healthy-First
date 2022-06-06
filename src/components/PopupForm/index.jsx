import React, { useState, useEffect } from "react";
import { Modal, Button, Input, message, Select, Form, Tag } from "antd";
import style from "./PopupForm.module.scss";
import buttonStyles from "../GlobalStyles/Button.module.scss";

const { Option } = Select;

function PopupForm({
  fillForm,
  object,
  isVisible,
  title,
  okButton,
  handleCancel,
  inputList,
  handleSubmit,
  select,
}) {
  const [form] = Form.useForm();
  const [input, setInput] = useState({});
  useEffect(() => {
    if (select) {
      setInput({ date: object.date, status: "checked", result: "ok" });
    } else
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
      <Form form={form}>
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
              defaultValue={fillForm ? object[input.name] : ""}
            />
          </div>
        ))}
        {select ? (
          <>
            <div>
              <label>Trạng thái</label>
              <Tag color="green">Đã kiểm tra</Tag>
            </div>
            <label>Kết quả</label>
            <Select
              name="result"
              className={style.select}
              defaultValue="ok"
              style={{ width: 120 }}
              onChange={(e) => {
                const temp = {};
                temp["result"] = e;
                setInput((previous) => {
                  return { ...previous, ...temp };
                });
              }}
            >
              <Option value="ok">Đủ điều kiện</Option>
              <Option value="notOk">Chưa đủ điều kiện</Option>
            </Select>
          </>
        ) : (
          <></>
        )}
      </Form>
    </Modal>
  );
}

export default PopupForm;
