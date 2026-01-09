import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
// import House from './pages/house';
import Search from './pages/Search';
import FoodPage from './pages/FoodPage'
// import RestaurantDetail from './pages/RestaurantDetail';
// import FoodDetail from './pages/FoodDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/house" element={<House />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path="/foodpage" element={<FoodPage />} />
        {/* <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/food/:id" element={<FoodDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
