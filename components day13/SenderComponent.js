import React from 'react';
import ReceiverComponent from './ReceiverComponent';

const SenderComponent = () => {
  return (
    const user = {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com'
    };
  
    <div>
      <h2>Sender Component</h2>
      <ReceiverComponent name="John Doe" age={30} />
      <ReceiverComponent isLoggedIn={true} />
      <ReceiverComponent user={user} />


    </div>
  );
};

export default SenderComponent;
