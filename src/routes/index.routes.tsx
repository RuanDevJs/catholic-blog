import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Article from "../pages/Article";

export default function Router() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Article />} path="/article/:id" />
    </Routes>
  );
}
