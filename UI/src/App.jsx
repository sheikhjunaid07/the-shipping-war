import './App.css';
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

  {/* Visitor Panel Routes */}
  const Header = lazy(()=> import('./components/VisitorPanel/Header/Header.jsx'));
  const Home = lazy(()=> import('./components/VisitorPanel/Home/Home.jsx'));
  const About = lazy(()=> import('./components/VisitorPanel/About/About.jsx'));
  const Contact = lazy(()=> import('./components/VisitorPanel/Contact/Contact.jsx'));
  const Service = lazy(()=> import('./components/VisitorPanel/Service/Service.jsx'));
  const Register = lazy(()=> import('./components/Authentication/Register/Register.jsx'));
  const Login = lazy(()=> import('./components/Authentication/Login/Login.jsx'));
  const VerifyUser = lazy(()=> import('./components/Authentication/VerifyUser/VerifyUser.jsx'));
  const Logout = lazy(()=> import('./components/Authentication/Logout/Logout.jsx'));

  {/* Admin Panel Routes */}
  const AdminPanel = lazy(()=> import('./components/AdminPanel/AdminPanel/AdminPanel.jsx'));
  const CPAdmin = lazy(()=> import('./components/AdminPanel/CPAdmin/CPAdmin.jsx'));
  const EPAdmin = lazy(()=> import('./components/AdminPanel/EPAdmin/EPAdmin.jsx'));
  const ManageUser = lazy(()=> import('./components/AdminPanel/ManageUser/ManageUser.jsx'));
  const ManageProducts = lazy(()=> import('./components/AdminPanel/ManageProducts/ManageProducts.jsx'));
  const AddCategory = lazy(()=> import('./components/AdminPanel/AddCategory/AddCategory.jsx'));
  const EditCategory = lazy(()=> import('./components/AdminPanel/EditCategory/EditCategory.jsx'));
  const AddSubCategory = lazy(()=> import('./components/AdminPanel/AddSubCategory/AddSubCategory.jsx'));
  const EditSubCategory = lazy(()=> import('./components/AdminPanel/EditSubCategory/EditSubCategory.jsx'));
  
  {/* User Panel Routes */}
  const UserPanel = lazy(()=> import('./components/UserPanel/UserPanel/UserPanel.jsx'));
  const AddProduct = lazy(()=> import('./components/UserPanel/AddProduct/AddProduct.jsx'));
  const MyProduct = lazy(()=> import('./components/UserPanel/MyProduct/MyProduct.jsx'));
  const Search = lazy(()=> import('./components/UserPanel/Search/Search.jsx'));
  const SearchSubCategory = lazy(()=> import('./components/UserPanel/SearchSubcategory/SearchSubCategory.jsx'));
  const ShowProducts = lazy(()=> import('./components/UserPanel/ShowProducts/ShowProducts.jsx'));
  const ShowAllProducts = lazy(()=> import('./components/UserPanel/ShowAllProducts/ShowAllProducts.jsx'));
  const BidProduct = lazy(()=> import('./components/UserPanel/BidProduct/BidProduct.jsx'));

function App() {

  const loadingText = ()=> {
    <div><h1 className="loading-text">Loading...</h1></div>
  }
  return (
    <>
      <Header />
        <Suspense fallback={loadingText()}>
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
              <Route path="/myproduct" element={<MyProduct />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/searchsc/:catnm" element={<SearchSubCategory />}></Route>
              <Route path="/showproduct/:subcatnm" element={<ShowProducts />}></Route>
              <Route path="/allproducts" element={<ShowAllProducts />}></Route>
              <Route path="/bidproduct/:_id" element={<BidProduct />}></Route>
          </Routes>
        </Suspense>
    </>
  );
}

export default App;
