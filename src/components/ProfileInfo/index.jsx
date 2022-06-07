import React, { useState } from "react";
import { Form, Input, Button, DatePicker, message } from "antd";
import type { DatePickerProps } from "antd";
import moment from "moment";
import buttonStyles from "../GlobalStyles/Button.module.scss";
import style from "./ProfileInfo.module.scss";

function ProfileInfo({ id }) {
  //TODO: fetch user data từ id và đưa vào dòng useState
  const data = {
    name: id,
    dob: moment(new Date(2001, 8, 30)),
    phoneNumber: "0949553672",
    email: "ngocnhung2k1@gmail.com",
  };
  const [profile, setProfile] = useState(data);
  const [form] = Form.useForm();
  form.setFieldsValue(profile);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setProfile((previous) => {
      return { ...previous, dob: date };
    });
  };

  //TODO: có thể sử dụng useMutation để update profile, onSuccess sẽ hiển thị thông báo thành công (chưa có API nên ko dùng được)
  const onFinish = (values: any) => {
    if (profile === data) message.warning("Chưa có thông tin nào thay đổi");
    else {
      message.success("Success:", values);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Đã có lỗi xảy ra");
    console.log("Failed:", errorInfo);
  };

  const resetField = () => {
    form.setFieldsValue(data);
  };
  return (
    <div className={style.container}>
      <Form
        className={style.form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: "Hãy điền tên của bạn!" }]}
        >
          <Input
            onChange={(e) => {
              setProfile((previous) => {
                return { ...previous, name: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item
          label="Ngày sinh"
          name="dob"
          rules={[{ required: true, message: "Hãy điền ngày sinh của bạn" }]}
        >
          <DatePicker
            onChange={onChange}
            format={"DD/MM/YYYY"}
            defaultPickerValue={moment(profile.dob)}
          />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phoneNumber"
          rules={[
            { required: true, message: "Hãy điền số điện thoại của bạn!" },
          ]}
        >
          <Input
            onChange={(e) => {
              setProfile((previous) => {
                return { ...previous, phoneNumber: e.target.value };
              });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Hãy điền email của bạn!" }]}
        >
          <Input
            onChange={(e) => {
              setProfile((previous) => {
                return { ...previous, email: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            className={buttonStyles.secondaryButton}
            onClick={resetField}
            type="default"
          >
            Hủy
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            className={buttonStyles.primary}
            type="primary"
            htmlType="submit"
          >
            Cập nhật thông tin
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ProfileInfo;
