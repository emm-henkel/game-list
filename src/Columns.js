import React from 'react';
import GameItem from './GameItem';

const Columns = ({ title, games, moveGame }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {games.map((game, index) => (
          <GameItem key={index} index={index} game={game} moveGame={moveGame} />
        ))}
      </ul>
    </div>
  );
};

export default Columns;