import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inventoryCount, setInventoryCount] = useState("");

  const [supplierName, setSupplierName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      category,
      description,
      price: Number(price),
      inventoryCount: Number(inventoryCount),
      supplier: {
        name: supplierName,
        contactEmail,
        contactPhone,
        isVerified,
      },
    };

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={submitForm} className="space-y-4">
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Price ($)</label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Inventory Count</label>
            <input
              type="number"
              value={inventoryCount}
              onChange={(e) => setInventoryCount(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
        <div className="border-t pt-4 mt-4">
          <h3 className="text-lg font-semibold mb-2">Supplier Info</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Supplier Name"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Contact Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Contact Phone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
              />
              <span>Is Supplier Verified?</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
