import React, { useState } from "react";
import { Table, Tooltip, Tag } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import buttonStyles from "../../GlobalStyles/Button.module.scss";
import style from "./PlanList.module.scss";

import PopupForm from "../../PopupForm";

function PlanList(props) {
  const columns = [
    {
      title: "Mã cơ sở",
      dataIndex: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
      width: 100,
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
      width: 120,
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      width: 120,
      render: (_, object) => (
        <Tag color={object.status == "Đã kiểm tra" ? "green" : "yellow"}>
          {object.status}
        </Tag>
      ),
      filters: [
        {
          text: "Đã kiểm tra",
          value: "Đã kiểm tra",
        },
        {
          text: "Chưa kiểm tra",
          value: "Chưa kiểm tra",
        },
      ],
      onFilter: (text, record) => record.status.indexOf(text) === 0,
    },
    {
      title: "Kết quả",
      key: "result",
      dataIndex: "result",
      width: 140,
      render: (_, object) => (
        <Tag color={object.result == "Đủ điều kiện" ? "blue" : "pink"}>
          {object.result}
        </Tag>
      ),
      filters: [
        {
          text: "Đủ điều kiện",
          value: "Đủ điều kiện",
        },
        {
          text: "Chưa đủ điều kiện",
          value: "Chưa đủ điều kiện",
        },
      ],
      onFilter: (text, record) => record.result.indexOf(text) === 0,
    },
    {
      title: "Hành động",
      key: "operation",
      width: 100,
      render: (text, record) => (
        <div className={style.actionBtn}>
          <button
            className={buttonStyles.actionBtn}
            onClick={() => {
              setEditRecord(record);
              handleShowPopup();
            }}
          >
            Cập nhật kết quả
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
  const [editRecord, setEditRecord] = useState({});
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
    <>
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
      {showPopup && (
        <PopupForm
          fillForm={true}
          object={editRecord}
          isVisible={showPopup}
          title={"Cập nhật mẫu thực phẩm"}
          okButton={"Cập nhật"}
          handleCancel={handleCancel}
          inputList={[
            { label: "Tên mẫu thực phẩm", name: "sampleName" },
            { label: "Mã mẫu", name: "sampleId" },
            { label: "Đơn vị giám định", name: "inspectionUnit" },
            { label: "Trạng thái", name: "status" },
            { label: "Ngày nhận kết quả", name: "date" },
          ]}
          select={true}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default PlanList;
