import Sidebar from "./shared/Sidebar/Sidebar";
import "./App.css";
import { Navigate, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav>
          <h1 style={{ textAlign: "center" }}>MyForum ✍</h1>
        </nav>
        <main>
          <Sidebar />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
