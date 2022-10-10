import Login from "./components/Login";
import Homepage from "./components/Homepage"
import Signup from "./components/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForumPosts from "./components/ForumPosts";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/ForumPosts" element={<ForumPosts />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;

