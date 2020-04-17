import React from 'react';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class='page'>
    <div class='top'>
      <Header/>
      </div>
      <Main/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
