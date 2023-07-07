import React from 'react';
import './Tab.css';

const Tab = ({ title, onClick, onMouseEnter, onMouseLeave, isHovered }) => {
  return (
    <button className="tabItem" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isHovered && <div className="tooltip">{title}</div>}
      <div className="tab-title">{title.slice(0, 1)}</div>
    </button>
  );
};

export default Tab;