import React from 'react';

const GameItem = ({ index, game, moveGame }) => {
  const handleMove = (newStatus) => {
    moveGame(index, newStatus);
  };

  return (
    <li>
      {game.name} - {game.status}
      <button onClick={() => handleMove('To Do')}>Move to To Do</button>
      <button onClick={() => handleMove('In Progress')}>Move to In Progress</button>
      <button onClick={() => handleMove('Completed')}>Move to Completed</button>
      <button onClick={() => handleMove('Dropped')}>Move to Dropped</button>
    </li>
  );
};

export default GameItem;