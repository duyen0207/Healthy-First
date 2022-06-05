import React, { useState } from "react";
import { Table, Tooltip, Tag } from "antd";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import buttonStyles from "../../GlobalStyles/Button.module.scss";
import style from "../../ManageStores/StoresList/StoresList.module.scss";

const columns = [
  {
    title: "Mã cơ sở",
    dataIndex: "idDepartment",
    with: 10,
    defaultSortOrder: "descend",
    sorter: (a, b) => a.idDepartment - b.idDepartment,
  },
  {
    title: "Tên cơ sở",
    dataIndex: "name",
  },

  {
    title: "Số cấp giấy chứng nhận",
    dataIndex: "CertificationNumber",
    width: 100,
  },
  {
    title: "Ngày cấp",
    dataIndex: "initialDate",
    key: "initialDate",
    width: 100,
    sorter: (a, b) =>
      moment(a.initialDate, "DD/MM/YYYY").valueOf() -
      moment(b.initialDate, "DD/MM/YYYY").valueOf(),
    // sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
  {
    title: "Ngày hết hạn",
    dataIndex: "expiredDate",
    key: "expiredDate",
    width: 100,
    sorter: (a, b) =>
      moment(a.expiredDate, "DD/MM/YYYY").valueOf() -
      moment(b.expiredDate, "DD/MM/YYYY").valueOf(),
    // sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
  {
    title: "Trạng thái",
    key: "tags",
    dataIndex: "tags",
    width: 100,
    render: (_, object) => (
      <>
        {console.log("this is tag")}

        {console.log(object.tag)}
        <Tag color={object.tag == "available" ? "green" : "red"}>
          {object.tag.toUpperCase()}
        </Tag>
      </>
    ),
    filters: [
      {
        text: "Còn hiệu lực",
        value: "available",
      },
      {
        text: "Hết hạn",
        value: "expired",
      },
    ],
    onFilter: (value, record) => record.tag.indexOf(value) === 0,
  },
  {
    title: "Hành động",
    key: "operation",
    width: 100,
    render: (_, object) => (
      <div className={style.actionBtn}>
        <button
          className={
            object.tag == "available"
              ? buttonStyles.actionBtn
              : buttonStyles.smallPrimary
          }
        >
          {object.tag == "available" ? "Thu hồi" : "Gia hạn"}
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
    idDepartment: i,
    name: `Edward King ${i}`,
    phone: "01234567",
    address: `New York, Park Lane no. ${i}`,
    businessType: "Chế biến thực phẩm",
    idCertificate: null,
    initialDate: `${i}/1/2021`,
    expiredDate: `${i + 10}/1/2021`,
    tag: "expired",
  });
}

function CertificateList(props) {
  return (
    <div>
      <Table
        id="certificate-table"
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

export default CertificateList;
