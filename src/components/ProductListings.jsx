import ProductListing from "./ProductListing";

const ProductListings = ({ products }) => {
  if (products.length === 0) {
    return <p className="text-gray-500">No products found in the inventory.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductListing key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductListings;
