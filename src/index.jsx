import React from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke/joke.jsx';
import './index.html';

const App = () => {
  return (
    <>
      <Joke />
    </>
  );
};

render(<App />, document.querySelector('#app'));
