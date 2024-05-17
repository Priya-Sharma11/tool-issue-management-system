import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ToolList = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const res = await axios.get('http://localhost:4000/tool/getTool');
        setTools(res.data);
      } catch (error) {
        console.error('Error fetching tools:', error);
      }
    };

    fetchTools();
  }, []);

  return (
    <div style={{ backgroundColor: '#f3f4f6', padding: '2rem 0' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Tool Room</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {tools.map((tool) => (
          <div key={tool._id} style={{ maxWidth: '20rem', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '1rem', borderRadius: '0.5rem' }}>
            <img src={tool.image} alt={tool.title} style={{ width: '100%', height: '10rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }} /> 
            <div style={{ fontWeight: 'bold' }}>{tool.title}</div>
            <div style={{ color: '#4b5563', marginBottom: '0.5rem' }}>{tool.category}</div>
            <div style={{ color: '#4b5563' }}>Quantity: {tool.quantity}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/" style={{ padding: '0.5rem 1rem', backgroundColor: '#4299e1', color: '#fff', borderRadius: '0.25rem', textDecoration: 'none', }}>Go back to Home</Link>
      </div>
    </div>
  );
};

export default ToolList;
