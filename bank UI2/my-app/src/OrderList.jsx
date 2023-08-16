
import React, { useState, useEffect } from 'react';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/orders');
        if (!response.ok) {
          throw new Error('Error fetching orders');
        }
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              <strong>Order ID:</strong> {order.orderId}<br />
              <strong>Status:</strong> {order.status}<br />
              <strong>Amount:</strong> {order.amount}<br />
              <strong>Ordered At:</strong> {order.orderAt}<br />
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersList;


/*
import React, { useState, useEffect } from 'react';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              <strong>Order ID:</strong> {order.orderId}<br />
              <strong>Status:</strong> {order.status}<br />
              <strong>Amount:</strong> {order.amount}<br />
              <strong>Ordered At:</strong> {order.orderAt}<br />
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersList;

*/

/*

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import { Transaction } from '../../../ecommerce/pages/hooks/cart';

const API_URL = 'http://localhost:3000/api/orders';

const Transactionsss = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const simplyfiProductNames = (order) => {
    // Implement your logic to simplify product names if needed
    // Return the simplified product names
    return order.productNames.join(", ");
  };
  
  const simplyfiAddress = (order) => {
    // Implement your logic to simplify addresses if needed
    // Return the simplified address
    return order.address;
  };
  

  const handleChange = (e, order) => {
    // Implement your logic to handle the status change
  };

  const getStatusByValue = (statusValue) => {
    // Implement your logic to get status by value
    // Return the corresponding status
  };

  const orderStatus = [
    // Define your order status options here
    // Example: { value: 'pending', name: 'Pending' }
  ];

  return (
    <Box>
      {orders && orders.length > 0 && (
        <>
          <Typography variant="h6" align="center">
            MY ORDERS
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {}
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "12%" }} align="center">
                  Order Id
                </TableCell>
                <TableCell style={{ width: "12%" }} align="center">
                  Product Name
                </TableCell>
                <TableCell style={{ width: "12%" }} align="center">
                  Delivery Address
                </TableCell>
                <TableCell style={{ width: "12%" }} align="center">
                  Amount
                </TableCell>
                <TableCell style={{ width: "12%" }} align="center">
                  Ordered time
                </TableCell>
                <TableCell style={{ width: "12%" }} align="center">
                  Status
                </TableCell>
                <TableCell style={{ width: "12%" }} align="center">
                  Delivered time
                </TableCell>
                <TableCell style={{ width: "12%" }} align="center">
                  TransactionId
                </TableCell>
              </TableRow>
            </TableHead>
            {}
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell
                    style={{ width: "12%" }}
                    align="center"
                    sx={{ textDecoration: "underline" }}
                  >
                    {order?.orderId}
                  </TableCell>
                  <TableCell style={{ width: "12%" }} align="center">
                    {simplyfiProductNames(order)}
                  </TableCell>
                  <TableCell style={{ width: "12%" }} align="center">
                    {simplyfiAddress(order)}
                  </TableCell>
                  <TableCell style={{ width: "12%" }} align="center">
                    {order.amount}
                  </TableCell>
                  <TableCell style={{ width: "12%" }} align="center">
                    {order.orderAt}
                  </TableCell>
                  <TableCell style={{ width: "12%" }} align="center">
                    {user?.isSupplier ? (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={order.status}
                          label="Status"
                          onChange={(e) => handleChange(e, order)}
                        >
                          {orderStatus.map((s) => (
                            <MenuItem value={s.value} key={s.value}>{s.name}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    ) : (
                      <>{getStatusByValue(order.status as string)}</>
                    )}
                  </TableCell>
                  <TableCell style={{ width: "12%" }} align="center">
                    {order.status === "delivered" ? order.deliveredAt : "-"}
                  </TableCell>
                  <TableCell style={{ width: "12%" }} align="center">
                    {order.transactionId}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
      {!orders ||
        (orders.length === 0 && (
          <>
            <Typography variant="h4">No Orders!</Typography>
            <MuiLink underline="hover" sx={{ cursor: "pointer" }}>
              <Typography variant="h5">
                <Link href={{ pathname: "/products" }} prefetch={false}>
                  {"Order here"}
                </Link>
              </Typography>
            </MuiLink>
          </>
        ))}
    </Box>
  );
};

export default Transactionsss;
*/