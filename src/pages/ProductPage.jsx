import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        if (response.ok) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(`/api/products/${id}`, {
          method: "DELETE",
        });

        if (response.status === 204) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  if (loading)
    return <p className="text-center mt-6">Loading product details...</p>;
  if (!product)
    return <p className="text-center mt-6 text-red-500">Product not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <Link to="/" className="text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>
        <div className="space-x-2">
          <Link
            to={`/edit-product/${product._id}`}
            className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 text-sm"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      <span className="text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-1 rounded">
        {product.category}
      </span>
      <h1 className="text-3xl font-bold mt-2">{product.productName}</h1>
      <p className="text-gray-700 mt-4">{product.description}</p>

      <div className="my-6 grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
        <div>
          <span className="text-sm text-gray-500 block">Price</span>
          <span className="text-xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div>
          <span className="text-sm text-gray-500 block">Inventory Count</span>
          <span className="text-xl font-bold text-gray-800">
            {product.inventoryCount}
          </span>
        </div>
      </div>

      {product.supplier && (
        <div className="border-t pt-4 mt-4">
          <h3 className="text-lg font-semibold mb-2">Supplier Information</h3>
          <p className="text-sm text-gray-700">
            <strong>Name:</strong> {product.supplier.name}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Email:</strong> {product.supplier.contactEmail}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Phone:</strong> {product.supplier.contactPhone}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Verified:</strong>{" "}
            {product.supplier.isVerified ? "Yes ✅" : "No ❌"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
