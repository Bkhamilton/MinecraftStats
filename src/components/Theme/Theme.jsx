import * as React from 'react';
import { useState, useEffect } from 'react';
import './Theme.css';

export default function Theme({ lightMode, toggleTheme }) {
    const [isSunset, setIsSunset] = useState(false);

    const handleClick = () => {
        setIsSunset((prevState) => !prevState);
        setTimeout(() => {
            toggleTheme();
        }, 840);
    };

    useEffect(() => {
        document.documentElement.setAttribute('theme', lightMode ? 'light' : 'dark');
    }, [lightMode]);

    return (
        <div className={`theme-container sun-start ${isSunset ? 'sunset-x-element' : 'sunrise-x-element'}`}>
            {lightMode ? (
            <div className={`sun ${isSunset ? 'sunset-y-element' : 'sunrise-y-element'}`} onClick={handleClick}></div>) : (
            <div className={`moon ${isSunset ? 'sunrise-y-element' : 'sunset-y-element'}`} onClick={handleClick}></div>)}            
        </div>
    );
};
