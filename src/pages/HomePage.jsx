import { useState, useEffect } from "react";
import ProductListings from "../components/ProductListings";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6">Product Inventory</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ProductListings products={products} />
      )}
    </div>
  );
};

export default HomePage;
