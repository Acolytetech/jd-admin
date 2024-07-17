import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    mainImage: null,
    productName: '',
    description: '',
    price: '',
    additionalImages: []
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, mainImage: file });
  };

  const handleAdditionalImageChange = (e) => {
    const files = e.target.files;
    const additionalImagesArray = Array.from(files);
    setProduct({ ...product, additionalImages: additionalImagesArray });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('mainImage', product.mainImage);
      formData.append('productName', product.productName);
      formData.append('description', product.description);
      formData.append('price', product.price);
      product.additionalImages.forEach((image) => {
        formData.append('additionalImages', image);
      });
  
      // Send the form data to the backend using axios
      const response = await axios.post('http://localhost:5000/api/products', formData);
  
      // Handle the response, e.g., show success message, update UI, etc.
      console.log(response.data);
      setSuccessMessage('Product added successfully.');
  
      // Reset the form after submission
      setProduct({ mainImage: null, productName: '', description: '', price: '', additionalImages: [] });
  
      // Redirect to ProductList page after successful submission
      navigate('/list-product', { replace: true });
    } catch (error) {
      // Handle errors, e.g., show error message, log the error, etc.
      console.error(error);
      setErrorMessage('Failed to add product. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        {/* Main Image Upload */}
        <div className="w-full md:w-1/2 p-4">
          <label htmlFor="mainImage" className="w-64 h-64 bg-gray-300 flex justify-center items-center text-3xl font-bold cursor-pointer">
            {product.mainImage ? (
              <img src={URL.createObjectURL(product.mainImage)} alt="Main Product" className="w-full h-full object-cover" />
            ) : (
              '+'
            )}
            <input
              type="file"
              id="mainImage"
              name="mainImage"
              accept="image/*"
              onChange={handleMainImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Additional Images Upload */}
        <div className="w-full md:w-1/2 p-4">
          <label htmlFor="additionalImages" className="w-full h-64 bg-gray-300 flex justify-center items-center text-3xl font-bold cursor-pointer">
            {product.additionalImages.length > 0 ? (
              product.additionalImages.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`Additional Image ${index}`} className="w-full h-full object-cover" />
              ))
            ) : (
              '+'
            )}
            <input
              type="file"
              id="additionalImages"
              name="additionalImages"
              accept="image/*"
              multiple
              onChange={handleAdditionalImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-4 space-y-4">
          <input
            type="text"
            name="productName"
            value={product.productName}
            placeholder="Product Name"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="description"
            value={product.description}
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
          <input
            type="text"
            name="price"
            value={product.price}
            placeholder="Price"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all">
            Add Product
          </button>
        </div>
      </form>
      {successMessage && <div className="mt-4 text-green-600">{successMessage}</div>}
      {errorMessage && <div className="mt-4 text-red-600">{errorMessage}</div>}
      <div className="mt-4">
        <button onClick={() => navigate('/list-product', { replace: true })} className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-all">
          Go to Product List
        </button>
      </div>
    </div>
  );
};

export default AddProduct;