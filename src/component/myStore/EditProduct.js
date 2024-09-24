import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    rating: '',
    size: '',
    material: '',
    details: '',
    mainImage: null,
    additionalImages: [],
    units: 1,
    includeSize: false,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/products/${id}`);
        const productData = response.data;
        setProduct({
          ...productData,
          includeSize: !!productData.size,
          mainImage: null,
          additionalImages: [],
        });
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const onValueChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const onFileChange = (e) => {
    const { name } = e.target;
    const files = e.target.files;

    if (name === 'mainImage') {
      setProduct({ ...product, mainImage: files[0] });
    } else if (name === 'additionalImages') {
      setProduct({ ...product, additionalImages: Array.from(files) });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in product) {
      if (key === 'additionalImages') {
        product[key].forEach((file) => {
          formData.append('additionalImages', file);
        });
      } else if (key !== 'includeSize') {
        formData.append(key, product[key]);
      }
    }

    try {
      const response = await axios.put(`http://localhost:4000/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Product updated:', response.data);

      navigate('/'); // Redirect to the product list after update
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={submitForm}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            <input
              type="checkbox"
              name="includeSize"
              checked={product.includeSize}
              onChange={onValueChange}
              className="mr-2"
            />
            Include Size
          </label>
        </div>
        {product.includeSize && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Size</label>
            <input
              type="text"
              name="size"
              value={product.size}
              onChange={onValueChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Material</label>
          <input
            type="text"
            name="material"
            value={product.material}
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Details</label>
          <textarea
            name="details"
            value={product.details}
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
          <label className="block text-sm font-medium mb-1">Additional Images (Up to 4)</label>
          <input
            type="file"
            multiple
            name="additionalImages"
            onChange={onFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Units</label>
          <input
            type="number"
            name="units"
            value={product.units}
            onChange={onValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
