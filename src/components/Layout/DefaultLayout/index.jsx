import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Navbar />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
