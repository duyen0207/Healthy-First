import React, { useState } from "react";
import { Table, Tooltip } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import buttonStyles from "../../GlobalStyles/Button.module.scss";
import style from "../../ManageStores/StoresList/StoresList.module.scss";

const columns = [
  {
    title: "Mã chuyên viên",
    dataIndex: "idStaff",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Tên chuyên viên",
    dataIndex: "fullname",
  },
  {
    title: "SĐT",
    dataIndex: "phoneNumber",
    width: 100,
  },
  {
    title: "Địa bàn quản lý",
    dataIndex: "DistrictManagement",
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
    title: "Tài khoản",
    dataIndex: "username",
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
    idStaff: i,
    fullname: `Edward King ${i}`,
    phoneNumber: "12345678",
    DistrictManagement: `New York, Park Lane no. ${i}`,
    username: "staff@gmail.com",
  });
}

function StaffList(props) {
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

export default StaffList;
