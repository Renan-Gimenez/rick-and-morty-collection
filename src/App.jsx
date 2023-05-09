import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import Input from './components/Input';
import CharacterList from './components/CharacterList';
import Modal from './components/Modal';

function App() {
  const [inputValue, setInputValue] = useState('');
  
  return (
    <div className="App">
      <Header>
        <p>Rick and Morty Collection</p>
        <Input onChange={(e) => {
          setInputValue(e.target.value);
          console.log(e.target.value);
        }} />
      </Header>

      <h2>Characters:</h2>

      <CharacterList inputValue={inputValue}/>

      {/* <Modal name = {"Renan"}/> */}

      <Footer />
    </div>
  );
}

export default App;
