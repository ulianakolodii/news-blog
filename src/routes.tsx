import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Article from "./pages/Article";

const routes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/readmore/:id" element={<Article />} />
  </Routes>
);

export default routes;

