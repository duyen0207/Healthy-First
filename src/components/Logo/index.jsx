import clsx from "clsx";

import Images from "../GlobalStyles/Images";

import style from "./Logo.module.scss";

function Logo() {
  return (
    <div className={clsx(style.logo, "global-center")}>
      <img
        className={style.logoImg}
        src={Images.logo}
        alt="healthy-first-logo"

      />
      <h3 className="app-name">Healthy First</h3>
    </div>
  );
}

export default Logo;
