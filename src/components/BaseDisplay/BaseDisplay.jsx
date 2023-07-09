import React from 'react';
import { useState } from 'react';
import './BaseDisplay.css';

const BaseDisplay = ({ node, onClick }) => {
  const [toggleStates, setToggleStates] = useState(new Array(node.features.length).fill(false));

  const toggleButton = (index, type) => {
    setToggleStates((prevState) => {
      const newToggleStates = [...prevState];
      newToggleStates[index] = !newToggleStates[index];
      return newToggleStates;
    });
    onClick(type);
  };

  return (
    <div className="base-display-outer">
      <div className='base-display'>
        <h1 className='display-title'>{node.title}</h1>
        <div className="buttons-container">
          {node.features.map((feature, index) => (
          <button
            key={index}
            className={`feature-button ${toggleStates[index] ? 'active' : ''}`}
            onClick={() => toggleButton(index, feature.type)}
          >
            <div>
              <span>{feature.type}</span>
            </div>
          </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseDisplay;