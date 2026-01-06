import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
// import House from './pages/house';
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/house" element={<House />} /> */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
