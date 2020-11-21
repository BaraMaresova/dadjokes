import React from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke/joke.jsx';
import { Likes } from './Likes/likes.jsx';
import { jokesList } from './JokesList/jokesList.jsx';
import './index.html';
import './style.css';

const App = () => {
  let result = jokesList.map((a) => {
    return (
      <div className="container">
        <Joke userId={a.id} userName={a.name} text={a.text} />
        <Likes likes={a.likes} dislikes={a.dislikes} />
      </div>
    );
  });
  return result;
};

render(<App />, document.querySelector('#app'));
