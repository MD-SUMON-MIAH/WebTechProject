
import logo from './logo.svg';
import './App.css';
import CreateAccountForm from './CreateAccountForm';
import Login from './login';
import { BrowserRouter as Router, Route,Routes, Switch, Link } from 'react-router-dom';
import ActDtl from './ActDtlsWithName';
import AccountDetails from './AccountDetails';
import SupplierUI from './SupplierUI'
import About from './pages/about';
import Events from './pages/events';
import Teams from './pages/team';
import Navbar from './components/Navbar';
import OrdersList from './OrderList';





function Home() {
  return (
    <div>
      <h1>Welcome to KHAN BANK!</h1>
      <p>Your trusted bank and loan provider.</p>
      <div>
      <AccountDetails/>
      </div>
      
    </div>
  );
}

function Home2() {
  return (
    <div>
   <CreateAccountForm/>
    </div>

  );
}

function SupplierUIF() {
  return (
    <div>
      <div>
        <h1>Product Supplier</h1>
        <p>Here you can supply any product you want</p>
      </div>
   <SupplierUI style={{marginBottom:"20px"}} />
   
    </div>

  );
}
function OrdersListF() {
  return (
    <div>
      <div>
        <h1>Transaction</h1>
        <p>Here Your Transactions list</p>
      </div>
   <OrdersList style={{marginBottom:"20px"}} />
   
    </div>

  );
}




//<Route path="/TransactionsX" element={<TransactionsX />} />

function App() {
  return (
    <div className="App">
     
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/team' component={Teams} />
      <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
      <Route exact path="/" element={<Home />} />
      <Route path="/create-account" element={<Home2 />} />
      <Route path="/supplierUI" element={<SupplierUIF />} />
      <Route path="/sransactions" element={<OrdersListF />} />
  
    

      </Routes>
    </Router>
       
    </div>
  );
}

export default App;

/*
import React, { useState } from 'react';
import { Transaction } from './../../../ecommerce/pages/hooks/cart';

const App =async () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const accountData = {
      username,
      email,
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
      } else {
        console.error('Error creating account:', response.status);
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
*/