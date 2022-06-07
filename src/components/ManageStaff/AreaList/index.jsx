import React, { useState } from "react";
import { Table, Tooltip, Tag } from "antd";
import moment from "moment";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import buttonStyles from "../../GlobalStyles/Button.module.scss";
import inputStyles from "../../GlobalStyles/Input.module.scss";

import style from "../../ManageStores/ManageStores.module.scss";
import thisStyle from "./AreaList.module.scss";

const columns = [
  {
    title: "Địa bàn quản lý",
    dataIndex: "DistrictManagement",
    ellipsis: {
      showTitle: false,
    },
    render: (DistrictManagement) => (
      <Tooltip placement="topLeft" title={DistrictManagement}>
        {DistrictManagement}
      </Tooltip>
    ),
    filters: [
      {
        text: "Quận Hoàng Mai",
        value: "Quận Hoàng Mai",
      },
      {
        text: "Quận Long Biên",
        value: "Quận Long Biên",
      },
      {
        text: "Quận Thanh Xuân",
        value: "Quận Thanh Xuân",
      },
      {
        text: "Quận Bắc Từ Liêm",
        value: "Quận Bắc Từ Liêm",
      },
      {
        text: "Quận Nam Từ Liêm",
        value: "Quận Nam Từ Liêm",
      },
      {
        text: "Quận Ba Đình",
        value: "Quận Ba Đình",
      },
      {
        text: "Quận Cầu Giấy",
        value: "Quận Cầu Giấy",
      },
      {
        text: "Quận Đống Đa",
        value: "Quận Đống Đa",
      },
      {
        text: "Quận Hai Bà Trưng",
        value: "Quận Hai Bà Trưng",
      },
      {
        text: "Quận Hoàn Kiếm",
        value: "Quận Hoàn Kiếm",
      },
      {
        text: "Quận Hà Đông",
        value: "Quận Hà Đông",
      },
      {
        text: "Quận Tây Hồ",
        value: "Quận Tây Hồ",
      },
      {
        text: "Huyện Đan Phượng",
        value: "Huyện Đan Phượng",
      },
      {
        text: "Huyện Gia Lâm",
        value: "Huyện Gia Lâm",
      },
      {
        text: "Huyện Đông Anh",
        value: "Huyện Đông Anh",
      },
      {
        text: "Huyện Chương Mỹ",
        value: "Huyện Chương Mỹ",
      },
      {
        text: "Huyện Hoài Đức",
        value: "Huyện Hoài Đức",
      },
      {
        text: "Huyện Ba Vì",
        value: "Huyện Ba Vì",
      },
      {
        text: "Huyện Mỹ Đức",
        value: "Huyện Mỹ Đức",
      },
      {
        text: "Huyện Phúc Thọ",
        value: "Huyện Phúc Thọ",
      },
      {
        text: "Huyện Thạch Thất",
        value: "Huyện Thạch Thất",
      },
      {
        text: "Huyện Quốc Oai",
        value: "Huyện Quốc Oai",
      },
      {
        text: "Huyện Thanh Trì",
        value: "Huyện Thanh Trì",
      },
      {
        text: "Huyện Thường Tín",
        value: "Huyện Thường Tín",
      },
      {
        text: "Huyện Thanh Oai",
        value: "Huyện Thanh Oai",
      },
      {
        text: "Huyện Phú Xuyên",
        value: "Huyện Phú Xuyên",
      },
      {
        text: "Huyện Mê Linh",
        value: "Huyện Mê Linh",
      },
      {
        text: "Huyện Sóc Sơn",
        value: "Huyện Sóc Sơn",
      },
      {
        text: "Huyện Ứng Hòa",
        value: "Huyện Ứng Hòa",
      },
      {
        text: "Thị xã Sơn Tây",
        value: "Thị xã Sơn Tây",
      },
    ],
    onFilter: (value, record) => record.DistrictManagement.indexOf(value) === 0,
  },
  {
    title: "Mã chuyên viên",
    dataIndex: "idStaff",
    with: 10,
    defaultSortOrder: "descend",
    sorter: (a, b) => a.idStaff - b.idStaff,
  },
  {
    title: "Tên chuyên viên",
    dataIndex: "fullname",
  },
  {
    title: "SĐT",
    dataIndex: "phoneNumber",
  },
  {
    title: "Hành động",
    key: "operation",
    width: 150,
    render: (_, object) => (
      <div className={style.actionBtn}>
        <button className={buttonStyles.updateResult}>Xóa quyền</button>
      </div>
    ),
  },
];
const data = [];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    idStaff: i,
    fullname: `Edward King ${i}`,
    phoneNumber: "01234567",
    DistrictManagement: "Huyện Đông Anh",
  });
}

function AreaList(props) {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <div className={thisStyle.areaList}>
      <Table
        id="certificate-table"
        scroll={{ y: 500, x: 780 }}
        pagination={{ position: ["bottomCenter"], pageSize: 20 }}
        columns={columns}
        dataSource={data}
        size="small"
        onChange={onChange}
      />
    </div>
  );
}

export default AreaList;
