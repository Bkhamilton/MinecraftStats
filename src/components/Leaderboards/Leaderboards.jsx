import React from 'react';
import './Leaderboards.css';

const Leaderboards = ({ list }) => {
  return (
    <div className="leaderboards-outer">
      <div className='leaderboards'>
        <h1 className='display-title'>Leaderboards</h1>
        <div className='leaderboard-icons'>
          {list.map(({ type, list }, index) => (
            <div key={index} className='sort-icons'>
              {list.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`ball ball-${type.toLowerCase()}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Leaderboards;