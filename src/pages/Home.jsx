import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Mechanic Portal</h1>
      <div>
        <Link to="/register">
          <button style={{ marginRight: '1rem', fontSize: '1.5rem', backgroundColor: '#4299e1', color: '#fff', padding: '1rem 2rem', borderRadius: '0.5rem', marginBottom: '1rem', display: 'inline-block', width: 'auto' }}>Register</button>
        </Link>
        <Link to="/login">
          <button style={{ marginRight: '1rem', fontSize: '1.5rem', backgroundColor: '#4299e1', color: '#fff', padding: '1rem 2rem', borderRadius: '0.5rem', marginBottom: '1rem', display: 'inline-block', width: 'auto' }}>Login</button>
        </Link>
        <Link to="/toolForm">
          <button style={{ marginRight: '1rem', fontSize: '1.5rem', backgroundColor: '#4299e1', color: '#fff', padding: '1rem 2rem', borderRadius: '0.5rem', marginBottom: '1rem', display: 'inline-block', width: 'auto' }}>Tool Form</button>
        </Link>
        <Link to="/tools">
          <button style={{ fontSize: '1.5rem', backgroundColor: '#4299e1', color: '#fff', padding: '1rem 2rem', borderRadius: '0.5rem', marginBottom: '1rem', display: 'inline-block', width: 'auto' }}>Tool Room</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
