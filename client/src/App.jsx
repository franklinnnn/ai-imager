import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { Nav } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="md:max-w-6xl mx-auto md:my-4 bg-[#f9f8fe] sm:rounded-xl border-4 border-black shadow-[0.6rem_0.4rem_0_0_black] xs:w-full xs:my-0 xs:rounded-none">
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
