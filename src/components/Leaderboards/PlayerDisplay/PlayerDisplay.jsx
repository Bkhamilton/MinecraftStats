import React from 'react';
import './PlayerDisplay.css';

const PlayerDisplay = ({player, place, highestStat}) => {
  return (
    <div className="player-display">
        <div className='result-inner'>
            <h1><minecraft>{place}</minecraft></h1>
            <div className='display-pfp'>

            </div>
            <div className='bar-wrapper' style={{ height: `${highestStat * 2 + 16}px`, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
              <div
                className={`leaderboard-bar ${place === 1 ? 'highest' : ''}`}
                style={{ height: `${((player.stat / highestStat) * 100) * 1.8 + 10}px`, alignSelf: "flex-end" }}
              ></div>
            </div>
            <div>
              <minecraft>{player.name}</minecraft>
            </div>
        </div>
    </div>

  );
};

export default PlayerDisplay;