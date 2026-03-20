// @ts-nocheck
import { useEffect, useState } from 'react';
import axios from 'axios';

// Example based on guidelines from {Link: DigitalOcean https://www.digitalocean.com/community/tutorials/react-axios-react}
export function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Perform GET request on mount
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}