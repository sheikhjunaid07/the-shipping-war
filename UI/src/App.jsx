import { Route, Routes } from "react-router-dom";
import { About, AddCategory, AddProduct, AddSubCategory, AdminPanel, BidProduct, Contact, CPAdmin, EditCategory, 
  EditSubCategory, EPAdmin, Header, Home, Login, Logout, ManageProducts, ManageUser, MyProduct, Register, Search,
  SearchSubCategory, Service, ShowAllProducts, ShowProducts, UserPanel, VerifyUser } from "./importFilePaths";

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
        <Route path="/myproduct" element={<MyProduct />}></Route>
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
