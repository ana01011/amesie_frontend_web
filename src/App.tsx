import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
// import House from './pages/house';
import Search from './pages/Search';
import FoodPage from './pages/FoodPage'
// import RestaurantDetail from './pages/RestaurantDetail';
import FoodDetailsPage from './pages/FoodDetailsPage'; 
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/forgotpasswordpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/house" element={<House />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path="/foodpage" element={<FoodPage />} />
         <Route path="/food-details" element={<FoodDetailsPage />} /> 
         <Route path="/restaurant-details" element={<RestaurantDetailsPage />} /> 
         <Route path="/loginpage" element={<LoginPage />} /> 
          <Route path="/signuppage" element={<SignUpPage/>} /> 
          <Route path="/forgotpassword" element={<ForgotPasswordPage/>} /> 
        {/* <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/food/:id" element={<FoodDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
