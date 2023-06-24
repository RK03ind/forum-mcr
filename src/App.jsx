import Sidebar from "./shared/Sidebar/Sidebar";
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

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
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
