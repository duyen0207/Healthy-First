import clsx from "clsx";
import PopupForm from "../PopupForm";
import React, { useState } from "react";
import StoresList from "./StoresList";
import style from "./ManageStores.module.scss";
import inputStyles from "../GlobalStyles/Input.module.scss";
import buttonStyles from "../GlobalStyles/Button.module.scss";

function ManageStores() {
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
      <div className={style.manageStores}>
        <h3 className={style.title}>Danh sách cơ sở kinh doanh</h3>
        <div className={style.insideManage}>
          <div className={style.summary}>
            <div className={style.search}>
              <input
                className={clsx(inputStyles.primary, inputStyles.search)}
                type="text"
                placeholder="Tìm kiếm cơ sở"
              />
            </div>

            <div className={style.addButton}>
              <button
                className={buttonStyles.primary}
                onClick={handleShowPopup}
              >
                Thêm
              </button>
            </div>
          </div>
          <div className={style.storesList}>
            <StoresList />
          </div>
        </div>
      </div>
      {showPopup && (
        <PopupForm
          fillForm={false}
          object={{}}
          isVisible={showPopup}
          title={"Thêm cơ sở kinh doanh"}
          okButton={"Thêm"}
          handleCancel={handleCancel}
          inputList={[
            { label: "Tên cơ sở", name: "storeName" },
            { label: "Địa chỉ", name: "address" },
            { label: "SĐT", name: "phoneNumber" },
            { label: "Loại hình kinh doanh", name: "typeOfBusiness" },
          ]}
          select={false}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default ManageStores;
