import React from 'react';
import { useEffect } from 'react';
import './App.css';
import dayImage from './images/MinecraftDay.png'
import nightImage from './images/MinecraftNight.png'
import MainComponent from './components/MainComponent/MainComponent';

function App() {
  useEffect(() => {
    const preloadImages = [dayImage, nightImage];
    preloadImages.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  return (
    <div className='main-background'>
      <MainComponent/>
    </div>
  );
}

export default App;
