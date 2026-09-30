import { Link } from "react-router-dom";

const ProductListing = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow bg-white flex flex-col justify-between">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {product.category}
        </span>
        <h3 className="text-xl font-bold mt-1">
          <Link
            to={`/products/${product._id}`}
            className="hover:underline text-blue-800"
          >
            {product.productName}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-green-600">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-sm text-gray-500">
          Stock: {product.inventoryCount}
        </span>
      </div>
    </div>
  );
};

export default ProductListing;
