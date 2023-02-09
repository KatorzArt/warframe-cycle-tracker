import { Route, Routes } from "react-router"
import CetusPage from "./pages/CetusPage"
import DeimosPage from "./pages/DeimosPage"
import FortunaPage from "./pages/FortunaPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cetus" element={<CetusPage />} />
      <Route path="/fortuna" element={<FortunaPage />} />
      <Route path="/deimos" element={<DeimosPage />} />
    </Routes>
  )
}

export default App
