import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact component={<Home/>} />
        <Route path="/about" component={<About/>} />
      </Routes>
    </Router>



    </div>
  
  
  );
}

export default App;
