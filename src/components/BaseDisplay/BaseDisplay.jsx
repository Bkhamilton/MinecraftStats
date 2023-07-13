import React from 'react';
import './BaseDisplay.css';

const BaseDisplay = ({ node, list, toggleTypeStates, toggleOptionStates, toggleType, toggleOptions }) => {

  return (
    <div className="base-display-outer">
      <div className='base-display'>
        {node.features.length === 0 && (<div className='base-display-outer'><h1 className='display-title'><minecraft>{node.title}</minecraft></h1></div>)}
        {node.features.map((feature, index) => (
          <button
            key={index}
            className={`feature-button ${toggleTypeStates[index] ? 'active' : ''}`}
            onClick={() => toggleType(index, feature.type)}
          >
            <div className='feature-button-inner'>
              <span>{feature.type}</span>
            </div>
          </button>
        ))}
        <div className='query-option-container'>
          {node.options?.map((option, index) => (
            <div key={index} className='query-option'>
              <div onClick={() => toggleOptions(index)} className={`query-option-box ${toggleOptionStates[index] ? 'active-option-button' : ''}`}></div>
              <p><minecraft>{option.name}</minecraft></p>
            </div>
          ))}
        </div>
        {list?.map(({ type, list }, index) => (
          <div key={index} className='sort-icons'>
            {list?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`ball ball-${item.toLowerCase()}`}
              >
              </div>
            ))}
          </div>
          ))}
      </div>
      {node.features.length > 0 && (<h1 className='display-title-test'><minecraft>{node.title}</minecraft></h1>)}
    </div>
  );
};

export default BaseDisplay;