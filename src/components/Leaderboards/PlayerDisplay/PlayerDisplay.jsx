import React from 'react';
import './PlayerDisplay.css';

const PlayerDisplay = ({player, place, highestStat}) => {
  return (
    <div className="result-display">
        <div>
            <h1>1</h1>
            <div className='display-pfp'>

            </div>
            <div
              className={`bar ${place === 1 ? 'highest' : ''}`}
              style={{ height: `${(player.stat / highestStat) * 100}%` }}
            ></div>
        </div>
    </div>

  );
};

export default PlayerDisplay;