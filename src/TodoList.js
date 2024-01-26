import React, { useState } from 'react';
import Columns from './Columns';

const TodoList = ({ games, addGame, moveGame }) => {
  // State for the new game input
  const [newGame, setNewGame] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setNewGame(event.target.value);
  };

  // Function to handle adding a new game
  const handleAddGame = () => {
    if (newGame.trim() !== '') {
      addGame(newGame);
      setNewGame(''); // Clear the input field after adding the game
    }
  };

  return (
    <div>
      {/* Form for adding new games */}
      <div>
        <input
          type="text"
          placeholder="Enter new game"
          value={newGame}
          onChange={handleInputChange}
        />
        <button onClick={handleAddGame}>Add Game</button>
      </div>
      {/* Render columns for each category */}
      <Columns title="To Do" games={games.filter((game) => game.status === 'To Do')} moveGame={moveGame} />
      <Columns title="In Progress" games={games.filter((game) => game.status === 'In Progress')} moveGame={moveGame} />
      <Columns title="Completed" games={games.filter((game) => game.status === 'Completed')} moveGame={moveGame} />
      <Columns title="Dropped" games={games.filter((game) => game.status === 'Dropped')} moveGame={moveGame} />
    </div>
  );
};

export default TodoList;