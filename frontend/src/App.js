import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchMessage = () => {
    axios.get(`${apiUrl}/api`)
      .then(response => setMessage(response.data.message))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>MERN Stack App</h1>
      <button onClick={fetchMessage}>Fetch Message</button>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;