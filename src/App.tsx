import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
// import House from './pages/house';
import Search from './pages/Search';
import FoodPage from './pages/FoodPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/house" element={<House />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path="/foodpage" element={<FoodPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
