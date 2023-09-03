import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import CatalogPage from "./pages/catalog-page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<CatalogPage />} />
    </Routes>
  );
}

export default App;
