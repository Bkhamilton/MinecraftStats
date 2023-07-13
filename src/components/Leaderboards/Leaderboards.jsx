import React from 'react';
import './Leaderboards.css';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';

const Leaderboards = ({ list }) => {
  return (
    <div className="leaderboards-outer">
      <div className='leaderboards'>
        <h1 className='display-title'>Leaderboards</h1>
        {false && (        
        <div className='display-results'>
          <PlayerDisplay player={{name: "Ben", stat: 90}} place={1} highestStat={90}/>
          <PlayerDisplay player={{name: "Kenneth", stat: 70}} place={2} highestStat={90}/>
          <PlayerDisplay player={{name: "Kev", stat: 50}} place={3} highestStat={90}/>
        </div>
        )}
      </div>
    </div>

  );
};

export default Leaderboards;