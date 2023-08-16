import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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

const buttonStyle1={
  width: '100%',
  padding: '10px',
  backgroundColor: 'red',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
}

const AccountDetails = () => {
  const [accountNo, setAccountNo] = useState('');
  const [accountDetails, setAccountDetails] = useState(null);
  const [transactionData, setTransactionData] = useState(null);
  const navigate = useNavigate();



  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4002/api/v1/account/${accountNo}`);
      if (response.ok) {
        const data = await response.json();
        setAccountDetails(data.account);
        fetchTransactionData(accountNo);
      } else {
        console.error('Error fetching account details:', response.status);
      }
    } catch (error) {
      console.error('Error fetching account details:', error);
    }
  };
/*
  const fetchTransactionData = async (accountNo) => {
    try {
      const response = await fetch(`http://localhost:4002/api/v1/transactions/${accountNo}`);
      if (response.ok) {
        const data = await response.json();
        if (data.transactions) {
          setTransactionData([data.transactions]); // Wrap the single object in an array
        } else {
          console.error('No transaction data found:', data);
        }
      } else {
        console.error('Error fetching transaction details:', response.status);
      }
    } catch (error) {
      console.error('Error fetching transaction details:', error);
    }
  };
*/
const fetchTransactionData = async (accountNo) => {
  try {
    const response = await fetch(`http://localhost:4002/api/v1/transactions/${accountNo}`);
    if (response.ok) {
      const data = await response.json();
      console.log('Fetched transaction data:', data); // Log fetched data
      //if (Array.isArray(data.transactions)) {
     //   setTransactionData(data.transactions);
     // }
     if (data.transactions) {
      setTransactionData([data.transactions]);}
       else {
        
        console.error('Invalid transaction data format:', data.transactions);
      }
    } else {
      console.error('Error fetching transaction details:', response.status);
    }
  } catch (error) {
    console.error('Error fetching transaction details:', error);
  }
};

  const handleCreateAccount = () => {
    // Implement the logic to create a new account
    // You can add the necessary code here or replace this function with the appropriate one
    
   navigate('/create-account');
    console.log('Creating a new account...');
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <input
          type="text"
          placeholder="Enter Account Number"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Enter secret key"
          style={inputStyle}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" style={buttonStyle}>
            See Account Details
          </button>
          <div style={{ width: '10px' }}></div>
          <button type="button" style={buttonStyle1}  onClick={handleCreateAccount}>
            Create Account
          </button>
        </div>
      </form>

      {accountDetails && (
        <div style={{ marginTop: '50px' }}>
          <h2 style={{ marginBottom: '30px' }}>Account Details</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', padding:'10px' }}>
            <tbody>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ width: '30%', fontWeight: 'bold', padding: '10px', borderBottom: '1px solid #ddd' }}>
                 Account Holder:
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{accountDetails.name}</td>
              </tr>
              <tr>
                <td style={{ width: '30%', fontWeight: 'bold', padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
                  Email Id:
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{accountDetails.email}</td>
              </tr>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ width: '30%', fontWeight: 'bold', padding: '10px', borderBottom: '1px solid #ddd' }}>
                  Address:
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{accountDetails.address}</td>
              </tr>
              <tr>
                <td style={{ width: '30%', fontWeight: 'bold', padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
                  Account Number:
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{accountDetails.accountNo}</td>
              </tr>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ width: '30%', fontWeight: 'bold', padding: '10px', borderBottom: '1px solid #ddd' }}>
                  Current Balance:
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{accountDetails.balance}</td>
              </tr>
            </tbody>
          </table>
          <h3>Transactions List</h3>
        </div>
         )}     
        
        {transactionData && (
    <div>
     
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th>Transaction ID</th>
            <th>Sender Account No</th>
            <th>Receiver Account No</th>
            <th>Transaction Amount</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.transactionId}</td>
              <td>{transaction.senderAccountNo}</td>
              <td>{transaction.receiverAccountNo}</td>
              <td>{transaction.transactionAmount}</td>
              <td>{new Date(transaction.transactionAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}


    </div>
  
  );
};

export default AccountDetails;
