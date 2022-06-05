import clsx from "clsx";

import StoresList from "./StoresList";
import style from "./ManageStores.module.scss";
import inputStyles from "../GlobalStyles/Input.module.scss";
import buttonStyles from "../GlobalStyles/Button.module.scss";

function ManageStores() {
  return (
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
            <button className={buttonStyles.primary}>Thêm</button>
          </div>
        </div>
        <div className={style.storesList}>
          <StoresList />
        </div>
      </div>
    </div>
  );
}

export default ManageStores;
