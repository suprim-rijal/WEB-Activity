import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import ProductPage from "./pages/ProductPage";
import EditProductPage from "./pages/EditProductPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 pb-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
