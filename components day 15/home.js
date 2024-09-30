import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the CodeHelp Home Page!</h2>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Home;