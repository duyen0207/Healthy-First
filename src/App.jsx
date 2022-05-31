import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import React, { Fragment } from "react";

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/forgot-password">Forgot password</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul> */}

        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              // console.log("This is layout: ");
              // console.log(route.layout);
              Layout = Fragment;
            }

            const Page = route.component;
            // console.log(index);
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
