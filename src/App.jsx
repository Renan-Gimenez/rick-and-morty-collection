import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Div from './components/Div';

import './App.css';

function App() {

  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      setCharactersList(data.results);
      console.log(charactersList);
    })
  }, [])
  
  return (
    <div className="App">
      <Header />
      <h1>Characters:</h1>

      <Div>
        {charactersList.map((e) => (
          <Card 
            image={e.image} 
            name={e.name} 
            status={e.status} 
            species={e.species}
            location={e.origin.name} 
            firstSeen={e.location.name} 
          />
        ))}
      </Div>

      <Footer>
        <h2>This is a Footer</h2>
      </Footer>
    </div>
  );
}

export default App;
