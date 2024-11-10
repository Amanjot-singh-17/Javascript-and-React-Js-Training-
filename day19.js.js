import React, { useRef } from 'react';
import { useState } from 'react';

const App = () => {
    let age=useRef(0);
    let age2=18;
    const[count,setCount]=useState(0)
     const inputRef = useRef(null);
     function handleclick(){
        setCount(count+1);
        age.current=age.current+1;
        age2=age2+1;
        console.log(age);
        console.log(age2);
        
     }

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <h1>value of  count= {count}</h1>
      <button onClick={handleclick}>increment</button>
     

    </div>
  );
}

export default App;