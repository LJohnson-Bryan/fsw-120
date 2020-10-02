import React from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';
import './style.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <BlogList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
