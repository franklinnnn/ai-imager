import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import { Nav } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-w-6xl mx-auto my-4 sx:p-8 w-full bg-[#f9f8fe] rounded-xl border-4 border-black shadow-[0.6rem_0.4rem_0_0_black]">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
