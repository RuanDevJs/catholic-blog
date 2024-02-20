import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Article from "../pages/Article";
import Meditation from "../pages/Meditation";

export default function Router() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Article />} path="/article/:id" />
      <Route element={<Meditation />} path="/meditation" />
    </Routes>
  );
}
