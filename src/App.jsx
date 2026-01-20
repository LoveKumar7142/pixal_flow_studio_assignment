import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HybridPage from "./pages/HybridPage";
import ProcessPage from "./pages/ProcessPage";
import SilosPage from "./pages/SilosPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advantage" element={<HybridPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/teams" element={<SilosPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
