import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
// import House from './pages/house';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/house" element={<House />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
