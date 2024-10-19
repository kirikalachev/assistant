import React, { useState } from 'react';
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/tool', { state: { inputValue } });
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  console.log(inputValue);

  return (
    <div className="App">
      <form>
        <input
        type="text"
        onChange={handleChange}
        ></input>
        <input type="submit" value="Submit" onClick={handleSubmit}></input>
      </form>
    </div>
  );
}

export default App;
