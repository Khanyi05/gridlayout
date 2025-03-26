import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Sidebar />
      <div className="card1"><Card /></div>
      <div className="card2"><Card /></div>
      <div className="card3"><Card /></div>
      <div className="card4"><Card /></div>
      <Footer />
    </div>
  );
}

export default App;