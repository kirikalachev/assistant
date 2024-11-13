import React, { useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';

function Tool() {
    const location = useLocation(); // Get the current location
    const siteSrc = location.state?.inputValue;

    const [isBlackboxOpen, setBlackboxOpen] = useState(false)

    function Menu() {
        const toggleBlackbox = (event) => {
            setBlackboxOpen(!isBlackboxOpen);
        }

        return (
            <div className='menu'>
                <input type='button' value='Open' className='openBlackbox' onClick={toggleBlackbox}></input>

                <iframe 
                  src="https://www.blackbox.ai/" 
                  title="ChatGPT" 
                  className={`chat ${isBlackboxOpen ? 'opened' : ''}`}
                ></iframe>
            </div>
        )
    }

  return (
    <div className="App">
      <Menu />
      <iframe src={siteSrc} title="W3Schools Free Online Web Tutorials"></iframe>
    </div>
  );
}

export default Tool;
