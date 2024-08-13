import React from 'react';

const ListProduct = ({ products }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Product List</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="flex flex-col items-center border border-gray-300 p-4 rounded-md">
            <img src={product.mainImage.url} alt={product.name} className="w-32 h-32 object-cover mb-2" />
            <div className="text-lg font-semibold">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
