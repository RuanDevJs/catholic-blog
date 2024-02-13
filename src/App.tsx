import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalCss } from "./styles/Global";

export default function App() {
  return (
    <div>
      <GlobalCss />
      <Header />
      <Home />
    </div>
  );
}
