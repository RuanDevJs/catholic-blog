import { BrowserRouter } from "react-router-dom";
import Router from "./routes/index.routes";

import Header from "./components/Header";
import { GlobalCss } from "./styles/Global";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Router />
    </BrowserRouter>
  );
}
