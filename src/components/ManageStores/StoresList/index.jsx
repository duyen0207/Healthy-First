import React, { useState } from "react";
import { Table, Tooltip } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import buttonStyles from "../../GlobalStyles/Button.module.scss";
import style from "./StoresList.module.scss";
import PopupForm from "../../PopupForm";
import PopupNotification from "../../PopupNotification";

function StoresList(props) {
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
      render: (text, record) => (
        <div className={style.actionBtn}>
          <button
            className={buttonStyles.actionBtn}
            onClick={() => {
              setEditRecord(record);
              handleShowPopup();
            }}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            className={buttonStyles.actionBtn}
            onClick={() => {
              setDeleteRecord(record);
              handleShowDeletePopup();
            }}
          >
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

  const [editRecord, setEditRecord] = useState({});
  const [deleteRecord, setDeleteRecord] = useState({});

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

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const handleShowDeletePopup = () => {
    setShowDeletePopup(true);
  };
  const handleCancelDeletePopup = () => {
    setShowDeletePopup(false);
  };

  //TODO: Sửa hàm này để gọi api xóa cơ sở
  const handleSubmitDelete = () => {
    console.log(deleteRecord);
  };

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
      {showPopup && (
        <PopupForm
          fillForm={true}
          object={editRecord}
          isVisible={showPopup}
          title={"Cập nhật cơ sở kinh doanh"}
          okButton={"Cập nhật"}
          handleCancel={handleCancel}
          inputList={[
            { label: "Tên cơ sở", name: "name" },
            { label: "Địa chỉ", name: "address" },
            { label: "SĐT", name: "phone" },
            { label: "Loại hình kinh doanh", name: "businessType" },
            { label: "Số cấp giấy chứng nhận", name: "CertificationNumber" },
          ]}
          select={false}
          handleSubmit={handleSubmit}
        />
      )}
      {showDeletePopup && (
        <PopupNotification
          isVisible={showDeletePopup}
          handleCancel={handleCancelDeletePopup}
          title={""}
          okButton={"Xóa"}
          cancelButton={"Hủy"}
          content={`Xóa cơ sở ${deleteRecord.name}?`}
          okAction={handleSubmitDelete}
        />
      )}
    </div>
  );
}

export default StoresList;
