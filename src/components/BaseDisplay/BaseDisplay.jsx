import React from 'react';
import './BaseDisplay.css';

const BaseDisplay = ({ node }) => {
  return (
    <div className="base-display-outer">
      <div className='base-display'>
        <h1 className='display-title'>{node.title}</h1>
        <div className="buttons-container">
          {node.features.map((feature, index) => (
            <button key={index} className="feature-button">
              <div>
                  <span>{feature}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseDisplay;