import { Route, Routes } from "react-router-dom";
import Home from "./components/VisitorPanel/Home/Home";
import Service from "./components/VisitorPanel/Service/Service";
import About from "./components/VisitorPanel/About/About";
import Contact from "./components/VisitorPanel/Contact/Contact";
import Register from "./components/Authentication/Register/Register";
import Login from "./components/Authentication/Login/Login";
import Header from "./components/VisitorPanel/Header/Header";
import AdminPanel from "./components/AdminPanel/AdminPanel/AdminPanel";
import UserPanel from "./components/UserPanel/UserPanel/UserPanel";
import Logout from "./components/Authentication/Logout/Logout";
import CPAdmin from "./components/AdminPanel/CPAdmin/CPAdmin";
import EPAdmin from "./components/AdminPanel/EPAdmin/EPAdmin";
import ManageUser from "./components/AdminPanel/ManageUser/ManageUser";
import AddCategory from "./components/AdminPanel/AddCategory/AddCategory";
import AddSubCategory from "./components/AdminPanel/AddSubCategory/AddSubCategory";
import Search from "./components/UserPanel/Search/Search";
import VerifyUser from "./components/Authentication/VerifyUser/VerifyUser";
import SearchSubCategory from "./components/UserPanel/SearchSubcategory/SearchSubCategory";
import AddProduct from "./components/UserPanel/AddProduct/AddProduct";
import ShowProducts from "./components/UserPanel/ShowProducts/ShowProducts";
import EditCategory from "./components/AdminPanel/EditCategory/EditCategory";
import ShowAllProducts from "./components/UserPanel/ShowAllProducts/ShowAllProducts";
import EditSubCategory from "./components/AdminPanel/EditSubCategory/EditSubCategory";
import ManageProducts from "./components/AdminPanel/ManageProducts/ManageProducts";
import BidProduct from "./components/UserPanel/BidProduct/BidProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Visitor Panel Routes */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/verify/:vemail" element={<VerifyUser />}></Route>
        <Route path="/logout" element={<Logout />}></Route>

        {/* Admin Panel Routes */}
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="/cpadmin" element={<CPAdmin />}></Route>
        <Route path="/epadmin" element={<EPAdmin />}></Route>
        <Route path="/manageuser" element={<ManageUser />}></Route>
        <Route path="/manageproducts" element={<ManageProducts />}></Route>
        <Route path="/addcategory" element={<AddCategory />}></Route>
        <Route path="/editcategory" element={<EditCategory />}></Route>
        <Route path="/addsubcategory" element={<AddSubCategory />}></Route>
        <Route path="/editsubcategory" element={<EditSubCategory />}></Route>

        {/* User Panel Routes */}
        <Route path="/user" element={<UserPanel />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/searchsc/:catnm" element={<SearchSubCategory />}></Route>
        <Route path="/showproduct/:subcatnm" element={<ShowProducts />}></Route>
        <Route path="/allproducts" element={<ShowAllProducts />}></Route>
        <Route path="/bidproduct/:_id" element={<BidProduct />}></Route>
      </Routes>
    </>
  );
}

export default App;
