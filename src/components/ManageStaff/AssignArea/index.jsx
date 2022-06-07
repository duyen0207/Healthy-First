import { Button, Checkbox, Form, Input, Select, Alert } from "antd";
import React, { useRef, useState } from "react";
import AntdInputTag from "antd-input-tag";

import style from "./AssignArea.module.scss";
import buttonStyles from "../../GlobalStyles/Button.module.scss";

const { Option } = Select;
function AssignArea() {
  const [area, setArea] = useState("");
  const childRef = useRef();
  const data = [];
  // const [showAlert, setShowAlert] = useState(false);

  const onFinish = (event) => {
    event.preventDefault();
    console.log("This is data");
    // console.log(childRef.current.changeVal());
    console.log(area);

    const assignArea = {
      DistrictManagement: area,
      staffsList: childRef.current.changeVal(),
    };
    console.log(assignArea);
    let json = JSON.stringify(assignArea);
    
    // alert(`Phân công thành công ${area} cho các chuyên viên: ${assignArea}`)
    return json;
  };

  return (
    <form action="" className={style.assignArea}>
      <h2 className={style.title}>Phân công địa bàn</h2>
      <div className={style.selectArea}>
        <label htmlFor="" className={style.label}>
          Chọn quận huyện
        </label>
        <Select
          id="chooseArea"
          name="chooseArea"
          showSearch
          style={{
            width: 420,
          }}
          onChange={(value) => setArea(value)}
          placeholder="Chọn địa bàn"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="Quận Hoàng Mai">Quận Hoàng Mai</Option>
          <Option value="Quận Long Biên">Quận Long Biên</Option>
          <Option value="Quận Thanh Xuân">Quận Thanh Xuân</Option>
          <Option value="Quận Bắc Từ Liêm">Quận Bắc Từ Liêm</Option>
          <Option value="Quận Nam Từ Liêm">Quận Nam Từ Liêm</Option>
          <Option value="Quận Ba Đình">Quận Ba Đình</Option>
          <Option value="Quận Cầu Giấy">Quận Cầu Giấy</Option>
          <Option value="Quận Đống Đa">Quận Đống Đa</Option>
          <Option value="Quận Hai Bà Trưng">Quận Hai Bà Trưng</Option>
          <Option value="Quận Hoàn Kiếm">Quận Hoàn Kiếm</Option>
          <Option value="Quận Hà Đông">Quận Hà Đông</Option>
          <Option value="Quận Tây Hồ">Quận Tây Hồ</Option>

          <Option value="Huyện Đan Phượng">Huyện Đan Phượng</Option>
          <Option value="Huyện Gia Lâm">Huyện Gia Lâm</Option>
          <Option value="Huyện Đông Anh">Huyện Đông Anh</Option>
          <Option value="Huyện Chương Mỹ">Huyện Chương Mỹ</Option>
          <Option value="Huyện Hoài Đức">Huyện Hoài Đức</Option>
          <Option value="Huyện Ba Vì">Huyện Ba Vì</Option>
          <Option value="Huyện Mỹ Đức">Huyện Mỹ Đức</Option>
          <Option value="Huyện Phúc Thọ">Huyện Phúc Thọ</Option>
          <Option value="Huyện Thạch Thất">Huyện Thạch Thất</Option>
          <Option value="Huyện Quốc Oai">Huyện Quốc Oai</Option>
          <Option value="Huyện Thanh Trì">Huyện Thanh Trì</Option>
          <Option value="Huyện Thường Tín">Huyện Thường Tín</Option>
          <Option value="Huyện Thanh Oai">Huyện Thanh Oai</Option>
          <Option value="Huyện Phú Xuyên">Huyện Phú Xuyên</Option>
          <Option value="Huyện Mê Linh">Huyện Mê Linh</Option>
          <Option value="Huyện Sóc Sơn">Huyện Sóc Sơn</Option>
          <Option value="Huyện Ứng Hòa">Huyện Ứng Hòa</Option>
          <Option value="Thị xã Sơn Tây">Thị xã Sơn Tây</Option>
        </Select>
      </div>
      <div className={style.detail}>Nhập 1 hoặc nhiều mã nhân viên</div>
      <div className={style.inputStaff}>
        <label htmlFor="" className={style.label}>
          Chọn nhân viên:
        </label>
        <AntdInputTag
          name="staffNumbers"
          value={data}
          ref={childRef}
          className={style.inputStaff}
        />
      </div>

      <div className={style.alert}>
        <Button type="primary" htmlType="submit" onClick={onFinish}>
          Phân công
        </Button>
        
      </div>
    </form>
  );
}

export default AssignArea;
