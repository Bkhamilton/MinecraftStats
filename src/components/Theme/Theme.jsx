import * as React from 'react';
import { useState } from 'react';
import sun from '../../images/Sun.webp';
import moon from '../../images/Sun.webp';
import './Theme.css';

export default function Theme() {
    const [isSunset, setIsSunset] = useState(false);

    const handleClick = () => {
        setIsSunset((prevState) => !prevState);
    };

    return (
        <div className={`theme-container sun-start ${isSunset ? 'sunset-x-element' : 'sunrise-x-element'}`}>
            <div className={`sun`} onClick={handleClick}></div>
        </div>
    );
};
