import logo from './logo.svg';
import './App.css';


function App() {
  const handleOnClick = () => {
    alert("Welcome to my website !");
  }
   const handleChange = (event) => {
    console.log('Input value:', event.target.value);
  }
    const handleSubmit = (event) => {
    event.preventDefault();
     alert('Form submitted!'); 
    }
  return (
    <div className="App">

    <button onClick={handleOnClick}>Click Me!</button>
    <label htmlFor="textInput">Type something:</label>
    <input type="text" id="textInput" onChange={handleChange} />
    <form onSubmit={handleSubmit}>
        <label htmlFor="textInput">Type something:</label>
        <input type="text" id="textInput" />
        <button type="submit">Submit</button>
      </form> 

    </div>
  
  
  );
}

export default App;
