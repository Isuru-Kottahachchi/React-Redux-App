import React from 'react';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import ChildComponent from './ChildComponent';
import Review from './Review';

const App: React.FC = () => {

  const age = 24;
  const university = "University of Moratuwa";

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Isuru Kottahachchi-  Associate Software Engineer</h1>
        <ChildComponent age={age} university={university} />
        <h1>Add your rating</h1>
        <Counter />
        <Review />

      </div>
    </Provider>
  );
};

export default App;



