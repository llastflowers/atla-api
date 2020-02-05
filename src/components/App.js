import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
// import Character from './Character';

const Home = () => (
  <h1>Home</h1>
);

const Header = () => (
  <header>
    <h1>Avatar: The Last Airbender</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character/:name" />
      </Switch>
    </Router>
  );
}
  
