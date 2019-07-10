import React from 'react';
import Counter from './Components/Counter/Counter'
import {Counter as CounterHooks} from './Hooks/Counter/Counter'
import './App.css';
import ThemeContext from './context';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="blue">
        <Counter />
      </ThemeContext.Provider>
      <ThemeContext.Provider value="yellow">
        <CounterHooks />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
