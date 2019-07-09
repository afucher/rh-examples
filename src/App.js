import React from 'react';
import Counter from './Components/Counter/Counter'
import {Counter as CounterHooks} from './Hooks/Counter/Counter'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterHooks />
    </div>
  );
}

export default App;
