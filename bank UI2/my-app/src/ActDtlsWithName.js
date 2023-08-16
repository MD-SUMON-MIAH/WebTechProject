import React, { useEffect, useState } from 'react';

const ActDtlsWithName = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4002/api/v1/account/1sumon');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Data from API:</h2>
      <ul>
        <li>Name: {data.name}</li>
        <li>Email: {data.email}</li>
        <li>Address: {data.address}</li>
        <li>Account Number: {data.accountNo}</li>
        <li>Balance: {data.balance}</li>
      </ul>
    </div>
  );
};

export default ActDtlsWithName;
