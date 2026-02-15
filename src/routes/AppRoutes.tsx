import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "../components/PageLoader";
import ProtectedRoute from "./ProtectedRoute";
// Lazy imports
const Home = lazy(() => import("../pages/home"));
const Search = lazy(() => import("../pages/Search"));
const FoodPage = lazy(() => import("../pages/FoodPage"));
const FoodDetailsPage = lazy(() => import("../pages/FoodDetailsPage"));
const RestaurantDetailsPage = lazy(() => import("../pages/RestaurantDetailsPage"));

const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const ForgotPasswordPage = lazy(() => import("../pages/forgotpasswordpage"));

const MenuScreen = lazy(() => import("../pages/MenuScreen"));
const PersonalInfoScreen = lazy(() => import("../pages/PersonalInfoScreen"));
const EditProfileScreen = lazy(() => import("../pages/EditProfileScreen"));
const AddressScreen = lazy(() => import("../pages/AddressScreen"));
const AddNewAddressScreen = lazy(() => import("../pages/AddNewAddressScreen"));

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/foodpage" element={<FoodPage />} />
        <Route path="/food-details" element={<FoodDetailsPage />} />
        <Route path="/restaurant-details" element={<RestaurantDetailsPage />} />

        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />

        <Route
  path="/menu"
  element={
    <ProtectedRoute>
      <MenuScreen />
    </ProtectedRoute>
  }
/>
<Route
  path="/personalinfo"
  element={
    <ProtectedRoute>
      <PersonalInfoScreen />
    </ProtectedRoute>
  }
/>

<Route
  path="/editprofile"
  element={
    <ProtectedRoute>
      <EditProfileScreen />
    </ProtectedRoute>
  }
/>

<Route
  path="/address"
  element={
    <ProtectedRoute>
      <AddressScreen />
    </ProtectedRoute>
  }
/>

<Route
  path="/add-address"
  element={
    <ProtectedRoute>
      <AddNewAddressScreen />
    </ProtectedRoute>
  }
/>

      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
