import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import style from "./NavItem.module.scss";

function NavItem(props) {
  const { data } = props;
  return (
    // <Link to={data.link}>
    <div className={style.navItem}>
      <FontAwesomeIcon icon={faWarehouse} className="fa-xl" />
      {/* <FontAwesomeIcon icon="fa-solid fa-house-building" /> */}

      <label className={style.itemName} htmlFor="">
        Quản lý cơ sở
      </label>
    </div>
    // </Link>
  );
}

export default NavItem;
