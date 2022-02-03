import React from 'react';
import Greeting from './pages/greeting/Greeting';
import Studies from './pages/studies/Studies';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting></Greeting>
        <Studies></Studies>
      </header>
    </div>
  );
}

export default App;
