import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SoloMovie } from "./pages/SoloMovie";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:idMovie" element={<SoloMovie />} />
      </Routes>
    </BrowserRouter>
  );
}
