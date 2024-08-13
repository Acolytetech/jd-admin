import React, { useState } from 'react';
import axios from 'axios';
import ListProduct from './ListProduct';

const productInitialState = {
  name: '',
  price: '',
  rating: '',
  size: '',
  material: '',
  details: '',
  mainImage: null,
  additionalImages: []
};

const AddProscut = () => {
  const [product, setProduct] = useState(productInitialState);

  const onValueChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    if (e.target.name === 'mainImage') {
      setProduct({ ...product, mainImage: e.target.files[0] });
    } else if (e.target.name === 'additionalImages') {
      setProduct({ ...product, additionalImages: Array.from(e.target.files) });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('rating', product.rating);
    formData.append('size', product.size);
    formData.append('material', product.material);
    formData.append('details', product.details);
    formData.append('mainImage', product.mainImage);
    product.additionalImages.forEach((file, index) => {
      formData.append(`additionalImages`, file);
    });

    try {
      const response = await axios.post('http://localhost:4000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={submitForm}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Size</label>
          <input
            type="text"
            name="size"
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Material</label>
          <input
            type="text"
            name="material"
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Details</label>
          <textarea
            name="details"
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Main Image</label>
          <input
            type="file"
            name="mainImage"
            onChange={onFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Additional Images</label>
          <input
            type="file"
            multiple
            name="additionalImages"
            onChange={onFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
      <ListProduct products={ListProduct} />
    </div>
  );
};

export default AddProscut;
