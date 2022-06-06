import style from "./InspectionActivity.module.scss";
import clsx from "clsx";
import PopupForm from "../PopupForm";
import React, { useState } from "react";
import inputStyles from "../GlobalStyles/Input.module.scss";
import buttonStyles from "../GlobalStyles/Button.module.scss";
import PlanList from "./PlanList";

function InspectionActivity() {
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
        <h3 className={style.title}>Kế hoạch thanh tra, kiểm tra</h3>
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
                Lập kế hoạch
              </button>
            </div>
          </div>
          <div className={style.storesList}>
            <PlanList />
          </div>
        </div>
      </div>
      {showPopup && (
        <PopupForm
          isVisible={showPopup}
          title={"Lập kế hoạch thanh tra, kiểm tra"}
          okButton={"Lập kế hoạch"}
          handleCancel={handleCancel}
          inputList={[
            { label: "Tên cơ sở", name: "storeName" },
            { label: "Ngày kiểm tra", name: "date" },
            { label: "Trạng thái", name: "status" },
          ]}
          select={false}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default InspectionActivity;
