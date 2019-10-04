import React from 'react';
import PlayersList from './components/PlayersList';  
import useDarkMode from './hooks/useDarkMode';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }
  return (
    <div className="App">
      <div> 
        <button onClick={toggleMode}>Change Background</button>
        <h1>Women's World Cup Players' Data</h1> 
        <PlayersList />
      </div> 
          
    </div>
  );
}
 
export default App;
