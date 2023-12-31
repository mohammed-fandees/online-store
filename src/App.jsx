import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { About, Categories, Category, Home, Manage, ProductDetails, CreateProduct } from "./pages";
import { CategoriesProvider, ProductsProvider } from "./contexts";

export default function App() {
  return (
    <Router>
      <div className="page-content d-flex">
        <Sidebar />
        <main className="w-100 overflow-scroll">
          <Navbar />
          <ProductsProvider>
            <CategoriesProvider>
              <Routes>
                <Route path="/" element={<Outlet />}>
                  <Route path="" element={<Home />} />
                  <Route
                    path="products/:productId"
                    element={<ProductDetails />}
                  />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="categories" element={<Outlet />}>
                  <Route path="" element={<Categories />} />
                  <Route path=":catName" element={<Category />} />
                </Route>
                <Route path="admin" element={<Outlet />}>
                  <Route path="" element={<Manage />} />
                  <Route path="create-product" element={<CreateProduct />} />
                </Route>
              </Routes>
            </CategoriesProvider>
          </ProductsProvider>
        </main>
      </div>
    </Router>
  );
}
