import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import moment from "moment";
import buttonStyles from "../GlobalStyles/Button.module.scss";
import style from "./ChangePassword.module.scss";

function ChangePassword({ id }) {
  const data = {
    password: "",
    newPassword: "",
    rePassword: "",
  };
  const [password, setPassword] = useState({});
  const [newPassword, setNewPassword] = useState({});
  const [rePassword, setRePassword] = useState({});
  const [form] = Form.useForm();

  //TODO: có thể sử dụng useMutation từ use-query để update mật khẩu, onSuccess của mutation sẽ hiện lên thông báo thành công
  const onFinish = (values: any) => {
    if (newPassword !== rePassword)
      message.warning("Mật khẩu mới không trùng khớp");
    else {
      console.log("Success:", values);
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
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Hãy điền mật khẩu của bạn!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[{ required: true, message: "Hãy điền mật khẩu mới của bạn" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu mới"
          name="rePassword"
          rules={[
            { required: true, message: "Hãy nhập lại mật khẩu mới của bạn!" },
          ]}
        >
          <Input.Password />
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
            Đổi mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ChangePassword;
