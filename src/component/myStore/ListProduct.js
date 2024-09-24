import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Remove product from frontend and backend
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/products/${id}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Failed to remove product:', error);
    }
  };

  // Navigate to the edit page with the selected product's ID
  const handleEdit = (product) => {
    navigate(`/edit-product/${product._id}`);
  };

  // Render stars for rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {Array(fullStars).fill(0).map((_, index) => (
          <span key={index}>⭐</span>
        ))}
        {halfStar && <span>⭐</span>}
        {Array(emptyStars).fill(0).map((_, index) => (
          <span key={index}>☆</span>
        ))}
      </>
    );
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Product List</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {products.map((product) => (
          <div key={product._id} className="flex flex-col items-center border border-gray-300 p-4 rounded-md">
            <img src={product.mainImage} alt={product.name} className="w-32 h-32 object-cover mb-2" />
            <div className="text-lg font-semibold">{product.name}</div>
            <div className="text-gray-500">Price: ${product.price}</div>
            <div className="text-yellow-500">Rating: {renderStars(product.rating)}</div>
            <div className="flex justify-between w-full mt-4">
              <button
                onClick={() => handleRemove(product._id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
              <button
                onClick={() => handleEdit(product)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
