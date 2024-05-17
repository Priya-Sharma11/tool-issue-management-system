import React, { useState } from 'react';
import axios from 'axios'; // Import axios library

const ToolForm = ({ addTool }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/tool/newTool', { title, category, quantity, image }); 
      if (response.ok) {
        const data = response.data;
        addTool(data);
        setTitle('');
        setCategory('');
        setQuantity('');
        setImage('');
      } else {
        throw new Error('Failed to add tool');
      }
    } catch (error) {
      console.error('Error adding tool:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tool-form max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-medium mb-4">Add New Tool</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-field"
        >
          <option value="">Select Category</option>
          <option value="Hand Tools">Hammer</option>
          <option value="Power Tools">Plier</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="image">Image URL</label>
        <input
          id="image"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input-field"
        />
      </div>

      <button type="submit" className="submit-button bg-blue-500 text-white hover:bg-blue-700 rounded-md px-3 py-2 focus:outline-none">
        Add Tool
      </button>
    </form>
  );
};

export default ToolForm;
