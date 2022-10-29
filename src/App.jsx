import React from 'react';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
    </>
  );
};

export default App;
