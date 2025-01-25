import React from 'react';
import Header from './components/Header';
import AboutMe from './components/About';
import Footer from './components/Footer';
import './App.css';

// Main App Component
const App = () => (
  <div className='body'>
    <Header />
    <main>
      <AboutMe />
    </main>
    <Footer />
  </div>
);

export default App;
