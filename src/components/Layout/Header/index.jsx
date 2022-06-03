import clsx from "clsx";


import Logo from "../../../components/Logo";
import Images from "../../GlobalStyles/Images";

import style from "./Header.module.scss";
import buttonStyles from "../../../components/GlobalStyles/Button.module.scss";
import inputStyles from "../../../components/GlobalStyles/Input.module.scss";

const user = {
  id: 1,
  name: "Nguyễn Văn A",
  avatarImg: "../../../assets/images/default-avatar.png",
}

function Header() {
  // if (props) 
  // const { userData } = props;

  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <a href="/">
          <Logo />
        </a>
      </div>

      <div className={style.search}>
        <input
          className={clsx(inputStyles.primary, inputStyles.search)}
          type="text"
          placeholder="Tìm kiếm"
        />
      </div>

      <div className={style.user}>
        {console.log(typeof user.avatarImg)}
        <img
          className={style.userAvatar}
          // src={require(""+user.avatarImg)}
          // src={require("../../../assets/images/default-avatar.png")}

          src={Images.defaultAvatar}
          alt="Nguyen Van A"
        />
      </div>
    </div>
  );
}

export default Header;
