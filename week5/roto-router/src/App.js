import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
