import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import ReadMore from "./ReadMore";

export default () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/readmore" element={<ReadMore />} />
  </Routes>
);
