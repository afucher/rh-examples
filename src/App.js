import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Counter from './Components/Counter/Counter'
import {Counter as CounterHooks} from './Hooks/Counter/Counter'
import './App.css';
import ThemeContext from './context';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact render={() => {
          return <>
            <ThemeContext.Provider value="dark">
              <Counter />
            </ThemeContext.Provider>
            <ThemeContext.Provider value="light">
              <CounterHooks />
            </ThemeContext.Provider>
          </>
        }} />
        <ThemeContext.Provider value="dark">
          <Route path="/class" component={Counter} />
        </ThemeContext.Provider>
        <ThemeContext.Provider value="light">
          <Route path="/function" component={CounterHooks} />
        </ThemeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
