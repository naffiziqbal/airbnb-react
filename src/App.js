import React from 'react';
import './App.css';
import Card from './Card';
import NavBar from './NavBar';

function App() {
  return (
    <>
    <NavBar />

<div className='cards container'>
<Card 
    img = "./images/card-1.jpg"
    name = "I dont Know"
    price ="13"
    rating = " 6"
    country= "  USA"
    />
    <Card 
    img = "./images/card-2.png"
    name = "I dont Know"
    price ="132"
    rating = "21 6"
    country= "  SA"
    />
    <Card 
    img = "./images/card-3.jpg"
    name = "I dont Know"
    price ="44"
    rating = " 26"
    country= "  UK"
    />
</div>
    
    </>
  );
}

export default App;
