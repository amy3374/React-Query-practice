import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ReactQueryPage from "./page/ReactQueryPage";
import NormalPage from "./page/NormalPage";

function App() {
  return (
    <div>
      <nav style={{ backgroundColor: "beige", padding: "20px" }}>
        <Link to="/" style={{ marginRight: "10PX" }}>
          HomePage
        </Link>
        <Link to="/normal" style={{ marginRight: "10px" }}>
          NolmalPage
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/normal" element={<NormalPage />}></Route>
        <Route path="/react-query" element={<ReactQueryPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
