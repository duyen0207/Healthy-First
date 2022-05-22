import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/forgot-password">Forgot password</Link></li>
        </ul>

        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            console.log(index);
            return (
              <Route key={index} path={route.path} element={<Page />}></Route>
            );
          })}
        </Routes>
        <h1>hello</h1>
      </div>
    </Router>
  );
}

export default App;
