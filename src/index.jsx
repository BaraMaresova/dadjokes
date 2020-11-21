import React from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke/joke.jsx';
import { Likes } from './Likes/likes.jsx';

import './index.html';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Joke />
      <Likes />
    </div>
  );
};

render(<App />, document.querySelector('#app'));
