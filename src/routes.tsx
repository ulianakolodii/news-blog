import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ReadMore from "./pages/Article";

export default () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/readmore" element={<ReadMore />} />
  </Routes>
);
