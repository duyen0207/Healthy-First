import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";

import style from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
  return (
    <div className={style.defaultLayout}>
      <Header />
      <div className={style.container}>
        <div className="content">
          {children}
        </div>
      </div>
      {/* <Footer /> */}

    </div>
  );
}

export default DefaultLayout;
