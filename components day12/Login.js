import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // ...

    // Navigate to the dashboard page
    navigate('/about');
  };

  return <button onClick={handleLogin}>about</button>;
}