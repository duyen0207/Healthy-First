import React, { useState } from "react";
import { Table, Tooltip } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import buttonStyles from "../../GlobalStyles/Button.module.scss";
import style from "../../ManageStores/StoresList/StoresList.module.scss";
import PopupForm from "../../PopupForm";
import PopupNotification from "../../PopupNotification";

function StaffList(props) {
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
      render: (text, record) => (
        <div className={style.actionBtn}>
          <button
            className={buttonStyles.actionBtn}
            onClick={() => {
              delete record.idStaff;
              delete record.key;
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
      idStaff: i,
      fullname: `Edward King ${i}`,
      phoneNumber: "12345678",
      DistrictManagement: `New York, Park Lane no. ${i}`,
      username: "staff@gmail.com",
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
  //TODO: hàm gọi API edit chuyên viên ở đây
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

  //TODO: Sửa hàm này để gọi api xóa chuyên viên
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
          title={"Cập nhật thông tin chuyên viên"}
          okButton={"Cập nhật"}
          handleCancel={handleCancel}
          inputList={[
            { label: "Tên chuyên viên", name: "fullname" },
            { label: "SĐT", name: "phoneNumber" },
            { label: "Địa bàn quản lý", name: "DistrictManagement" },
            { label: "Tên người dùng", name: "username" },
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
          content={`Xóa chuyên viên ${deleteRecord.fullname}?`}
          okAction={handleSubmitDelete}
        />
      )}
    </div>
  );
}

export default StaffList;
