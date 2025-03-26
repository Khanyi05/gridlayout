import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <Sidebar />
      <Card title="Card1" />;
      <Card title="Card2" />;
      <Card title="Card3" />;
      <Card title="Card4" />;
      <Footer />;

    </div>
  );
}

export default App;
