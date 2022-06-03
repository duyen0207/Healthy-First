import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import clsx from "clsx";

import Logo from "../../../components/Logo";

import style from "../Authen.module.scss";
import buttonStyles from "../../../components/GlobalStyles/Button.module.scss";
import inputStyles from "../../../components/GlobalStyles/Input.module.scss";

import thisStyle from "./ResetPassword.module.scss";

function ResetPassword() {
  return (
    <React.Fragment>
      <div className={style.background}>
        <div className={style.container}>
          <div className={style.login}>
            <div className={style.logoContainer}>
              <Logo />
            </div>

            <h2 className={thisStyle.title}>Reset Password</h2>

            <div className="global-center">
              <form className={style.form} action="" method="post">
                <div className={style.fields}>
                  <label htmlFor={style.password}>Mật khẩu</label>
                  <input
                    type="password"
                    className={inputStyles.primary}
                    id={style.password}
                    placeholder="Mật khẩu"
                    autoFocus
                    required
                  />

                  <label htmlFor={thisStyle.rePassword}>
                    Nhập lại mật khẩu
                  </label>
                  <input
                    type="password"
                    className={inputStyles.primary}
                    id={thisStyle.rePassword}
                    placeholder="Nhập lại mật khẩu"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={clsx(buttonStyles.primary, style.authBtn)}
                >
                  Đặt lại mật khẩu
                </button>
                <div className={style.comeBack}>
                  <Link to="/login">
                    {" "}
                    <i className={style.leftarrow}></i> Back to login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ResetPassword;
