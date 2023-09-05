import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import CatalogPage from "./pages/catalog-page";
import GameInfo from "./pages/gameinfo-page";
import GameType from "./pages/games-page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/game" element={<GameType/>} />;
      <Route path="/game/android" element={<GameInfo />} />;
    </Routes>
  );
}

export default App;
