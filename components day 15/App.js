import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  );
};

export default App;
