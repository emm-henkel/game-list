import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // State for the list of games
  const [games, setGames] = useState([]);

  // Function to add a new game to the list
  const addGame = (name) => {
    setGames([...games, { name, status: 'To Do' }]);
  };

  // Function to move a game to a different status (column)
  const moveGame = (index, newStatus) => {
    const updatedGames = [...games];
    updatedGames[index].status = newStatus;
    setGames(updatedGames);
  };

  return (
    <div>
      <h1>Game Tracker</h1>
      {/* Pass state and functions as props to TodoList component */}
      <TodoList
        games={games}
        addGame={addGame}
        moveGame={moveGame}
      />
    </div>
  );
};

export default App;