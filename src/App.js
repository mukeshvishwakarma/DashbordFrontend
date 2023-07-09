import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./components/Private";
import Login from "./components/Login";
import AddProduct from "./components/Addproduct";
import Productlist from "./components/Productlist";
import Updateproduct from "./components/Updateproduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<Productlist />} />
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="/update/:id" element={<Updateproduct />} />
            <Route
              path="/logout"
              element={<h1>Product listinglogout components</h1>}
            />
            <Route
              path="/profile"
              element={<h1>Product listingprofile components</h1>}
            />
          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
