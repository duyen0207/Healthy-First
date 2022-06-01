import React, { Fragment } from "react";
import clsx from "clsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Slider from "../../../components/Slider";
import Logo from "../../../components/Logo";

import style from "../Authen.module.scss";
import buttonStyles from "../../../components/GlobalStyles/Button.module.scss";
import inputStyles from "../../../components/GlobalStyles/Input.module.scss";

function Login() {
  return (
    <React.Fragment>
      <div className={style.background}>
        <div className={style.container}>
          <div className={style.slider}>
            <Slider />
          </div>
          <div className={style.login}>
            <Logo />

            <h2>Đăng nhập</h2>

            <div className="global-center">
              <form className={style.form} action="" method="post">
                <div className={style.fields}>
                  <label htmlFor={style.username}>Tài khoản</label>
                  <input
                    type="email"
                    className={inputStyles.primary}
                    id={style.username}
                    placeholder="Email"
                    autoFocus
                    required
                  />

                  <label htmlFor={style.password}>Mật khẩu</label>
                  <input
                    type="password"
                    className={inputStyles.primary}
                    id={style.password}
                    placeholder="Mật khẩu"
                    required
                  />
                </div>

                <div className={style.forgot}>
                  <label htmlFor="">
                    <input type="checkbox" defaultChecked={true} /> Remember me
                  </label>
                  <Link to="/forgot-password">Quên mật khẩu?</Link>
                </div>

                <button type="submit" className={clsx(buttonStyles.primary, style.authBtn)}>
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
