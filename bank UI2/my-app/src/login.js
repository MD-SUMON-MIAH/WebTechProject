import React, { useState } from 'react';

const inputStyle = {
  width: '100%',
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


const Login = () => {
  const [AccountNo, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle login
    console.log('Username:', AccountNo);
    console.log('Password:', password);
  };

  const handleCreateAccount = () => {
    // Logic to handle create account
    console.log('Create account clicked');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <div>
          <label htmlFor="Account No."  >Account No:</label>
          <input 
            type="text"
            id="AccountNo"
            value={AccountNo}
            onChange={handleUsernameChange} style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange} style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default Login;
