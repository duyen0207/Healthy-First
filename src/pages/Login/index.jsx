import React, { Fragment } from "react";
import clsx from "clsx";

import Slider from "../../components/Slider";
import style from "./Login.module.scss";
import buttonStyles from "../../components/GlobalStyles/Button.module.scss";

function Login() {
  return (
    <React.Fragment>
      <div className={style.background}>
        <div className={style.container}>
          <div className={style.slider}>
            {/* <h2>Slider</h2> */}
            <Slider />
          </div>
          <div className={style.login}>
            <div className={clsx(style.logo, "global-center")}>
              <img
                className={style.logoImg}
                src="../../assets/healthy-first-logo.png"
                alt="healthy-first-logo"
              />
              <h3 className="app-name">Healthy First</h3>
            </div>

            <h2>Đăng nhập</h2>

            <div className="global-center">
              <form className={style.form} action="" method="post">
                <div className={style.fields}>
                  <label htmlFor={style.username}>Tài khoản</label>
                  <input type="text" id={style.username} placeholder="Email" />

                  <label htmlFor={style.password}>Mật khẩu</label>
                  <input
                    type="password"
                    id={style.password}
                    placeholder="Mật khẩu"
                  />
                </div>

                <div className={style.forgot}>
                  <label htmlFor="">
                    <input type="checkbox" defaultChecked={true} /> Remember me
                  </label>

                  <a href="/forgot-password">Quên mật khẩu?</a>
                </div>

                <button type="submit" className={buttonStyles.primary}>
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
