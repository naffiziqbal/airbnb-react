import React from 'react';
import './App.css';
import Card from './Card';
import NavBar from './NavBar';
import data from "./data"

function App() {
 const cards = data.map(item => {
  return (
    <Card
    img= { item.coverImg}
    name={item.title}
    price={item.price}
    rating={item.stats.rating}
  />
  )
 })

  return (
    <>
      <NavBar />

      <div className='cards container'>
        {cards}
      </div>

    </>
  );
}

export default App;
