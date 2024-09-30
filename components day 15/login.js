import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // ...

    // Navigate to the dashboard page
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}