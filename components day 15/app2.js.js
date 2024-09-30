import React from 'react';
import { Route, BrowserRouter as Router, Routes,Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/users">Users</Link>
            </li>
            <li>
              <Link to="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/users" component={Users} />
          <Route path="/dashboard/settings" component={Settings} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;