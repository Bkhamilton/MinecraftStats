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
        {node.features.length === 0 && (<h1 className='display-title'><minecraft>{node.title}</minecraft></h1>)}
        <div className="buttons-container">
          {node.features.map((feature, index) => (
          <button
            key={index}
            className={`feature-button ${toggleStates[index] ? 'active' : ''}`}
            onClick={() => toggleButton(index, feature.type)}
          >
            <div className='feature-button-inner'>
              <span>{feature.type}</span>
            </div>
          </button>
          ))}
        </div>
        <div className='query-option-container'>
          {node.options.map((option, index) => (
            <div key={index} className='query-option'>
              <div className='query-option-box'></div>
              <p><minecraft>{option}</minecraft></p>
            </div>
          ))}
        </div>
      </div>
      {node.features.length > 0 && (<h1 className='display-title-test'><minecraft>{node.title}</minecraft></h1>)}
    </div>
  );
};

export default BaseDisplay;