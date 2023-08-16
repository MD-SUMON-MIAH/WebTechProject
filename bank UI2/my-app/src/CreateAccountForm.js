import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const cors = require('cors');


const CreateAccountForm = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [balance, setBalance] = useState('');
  const navigate = useNavigate();

  const inputStyle = {
    width: '90%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#c5c',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
   
    const accountData = {
      name,
      email,
      address,
      accountNo,
      balance
    };

    try {
      const response = await fetch('http://localhost:4002/api/v1/account/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountData),
      });

      if (response.ok) {
        console.log('Account created successfully');
        
        // Reset form fields or perform any other necessary actions
        navigate('/')
      } else {
        console.error('Error creating account:', response.status);
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
    
  };

  return (
    <form  onSubmit={handleFormSubmit} style={{ maxWidth: '500px', marginBottom: '20px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Create Account</h1>
      <input type="text" placeholder="Account Name" value={name} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
      <p></p>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
      <p></p>
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />
      <p></p>
      <input type="text" placeholder="Account No." value={accountNo} onChange={(e) => setAccountNo(e.target.value)} style={inputStyle} />
      <p></p>
      <input type="number" placeholder="Balance" value={balance} onChange={(e) => setBalance(e.target.value)} style={inputStyle} />
      <button type="submit" style={buttonStyle}>Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
