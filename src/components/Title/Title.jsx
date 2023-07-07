import React from 'react';
import './Title.css';

const Title = () => {
  return (
    <div className='title-message'>
        <h1 className='main-title'>Hardcore Stats</h1>
        <minecraft className='motd bobbing-element'>Minecraft and SQL Combined!</minecraft>
        <p className='main-subtitle desktop-only'>a project by ben hamilton and kenneth sullivan</p>
        <p className='main-subtitle mobile-only'>by ben hamilton and kenneth sullivan</p>
    </div>
  );
};

export default Title;