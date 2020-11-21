import React from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke/joke.jsx';
import './index.html';

const App = () => {
  return (
    <>
      <h1>Dad Jokes</h1>
      <Joke />
    </>
  );
};

render(<App />, document.querySelector('#app'));
