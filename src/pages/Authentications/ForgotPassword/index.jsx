import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import clsx from "clsx";

import Logo from "../../../components/Logo";

import style from "../Authen.module.scss";
import buttonStyles from "../../../components/GlobalStyles/Button.module.scss";
import inputStyles from "../../../components/GlobalStyles/Input.module.scss";

function ForgotPassword() {
  return (
    <React.Fragment>
      <div className={style.background}>
        <div className={style.container}>
          <div className={style.login}>
            <div className={style.logoContainer}>
              <Logo />
            </div>

            <h2>Forgot Password?</h2>

            <div className="global-center">
              <form className={style.form} action="" method="post">
                <div className={style.fields}>
                  <label htmlFor={style.username}>Email</label>
                  <input
                    type="email"
                    className={inputStyles.primary}
                    id={style.username}
                    placeholder="Nhập email"
                    autoFocus
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={clsx(buttonStyles.primary, style.authBtn)}
                >
                  Tiếp tục
                </button>
                <div className={style.comeBack}>
                  <Link to="/login">
                    <i className={style.leftarrow}></i>
                    Back to login
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

export default ForgotPassword;
