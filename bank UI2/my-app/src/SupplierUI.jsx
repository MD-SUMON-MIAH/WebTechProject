import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateAccountForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();


  const inputStyle = {
    width: '380px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      category,
      price,
      description,
    };

    try {
      const response = await fetch('http://localhost:4000/api/v1/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        console.log('Product created successfully');
        console.log('Product added successfully');
        setName('');
        setCategory('');
        setPrice('');
        setDescription('');

        // Reset form fields or perform any other necessary actions
        navigate('/supplierUI');
        
      } else {
        console.error('Error creating product:', response.status);
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Supply a New Product</h1>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
      <p></p>
      <input type="text" placeholder="Product Category" value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle} />
      <p></p>
      <input type="text" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} style={inputStyle} />
      <p></p>
      <textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} style={inputStyle} />
      <button type="submit" style={buttonStyle}>SUPPLY PRODUCT</button>
    </form>
  );
};

export default CreateAccountForm;
