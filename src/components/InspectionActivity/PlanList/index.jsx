import React, { useState } from "react";
import { Table, Tooltip } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import buttonStyles from "../../GlobalStyles/Button.module.scss";
import style from "./PlanList.module.scss";

const columns = [
  {
    title: "Mã cơ sở",
    dataIndex: "id",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Tên cơ sở",
    dataIndex: "name",
  },
  {
    title: "Số cấp giấy chứng nhận",
    dataIndex: "idCertificate",
  },
  {
    title: "Ngày kiểm tra",
    dataIndex: "date",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
  },
  {
    title: "Kết quả",
    dataIndex: "result",
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
    idCertificate: i,
    date: "30/09/2001",
    status: i % 2 === 0 ? "Đã kiểm tra" : "Chưa kiểm tra",
    result: i % 2 === 0 ? "Đủ điều kiện" : "Chưa đủ điều kiện",
  });
}

function PlanList(props) {
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

export default PlanList;