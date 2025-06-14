import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home/Home';
import Releases from './pages/releases/Releases';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/releases" element={<Releases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
