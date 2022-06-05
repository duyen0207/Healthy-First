import React, { useState } from "react";
import { Table, Tooltip } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import buttonStyles from "../../GlobalStyles/Button.module.scss";
import style from "./StoresList.module.scss";

const columns = [
  {
    title: "Mã cơ sở",
    dataIndex: "id",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Tên cơ sở",
    dataIndex: "name",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    ellipsis: {
        showTitle: false,
      },
      render: (address) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "SĐT",
    dataIndex: "phone",
    width: 100,
  },
  {
    title: "Loại hình kinh doanh",
    dataIndex: "businessType",
    filters: [
      {
        text: "Dịch vụ ăn uống",
        value: "Dịch vụ ăn uống",
      },
      {
        text: "Thực phẩm tươi sống",
        value: "Thực phẩm tươi sống",
      },
      {
        text: "Chế biến thực phẩm",
        value: "Chế biến thực phẩm",
      },
    ],
    onFilter: (value, record) => record.businessType.indexOf(value) === 0,
  },
  {
    title: "Số cấp giấy chứng nhận",
    dataIndex: "CertificationNumber",
  },
  {
    title: "Hành động",
    key: "operation",
    width: 100,
    render: () => (
      <div className={style.actionBtn}>
        <button className={buttonStyles.actionBtn}>
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className={buttonStyles.actionBtn}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
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
    id: i,
    name: `Edward King ${i}`,
    phone: "12345678",
    address: `New York, Park Lane no. ${i}`,
    businessType: "Chế biến thực phẩm",
    idCertificate: null,
  });
}

function StoresList(props) {
  return (
    <div>
      <Table
        id="stores-table"
        scroll={{ y: 500, x: 880 }}
        pagination={{ position: ["bottomCenter"], pageSize: 20 }}
        columns={columns}
        dataSource={data}
        size="small"
        onChange={onChange}
      />
    </div>
  );
}

export default StoresList;
