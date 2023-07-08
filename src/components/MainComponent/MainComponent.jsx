import React from 'react';
import { useState } from 'react';
import BaseDisplay from '../BaseDisplay/BaseDisplay';
import './MainComponent.css';
import '../../index.css';
import Title from '../Title/Title';
import Leaderboards from '../Leaderboards/Leaderboards';
import SQLDisplay from '../SQLDisplay/SQLDisplay';
import Tab from '../Tab/Tab';
import Theme from '../Theme/Theme';

function MainComponent() {
    const [content, setContent] = useState({title: "Press any tab to Get Started", features: []});
    const [hoveredTab, setHoveredTab] = useState(null);
    const [lightMode, setLightMode] = useState(true);

    const handleToggleTheme = () => {
      setLightMode((prevMode) => !prevMode);
    };

    const handleClick = (index) => {
        setContent(tabs[index]);
    };

    const handleTabHover = (index) => {
        setHoveredTab(index);
    };
    
    const handleTabLeave = () => {
        setHoveredTab(null);
    };

    const tabs = {
        0: {
            title: "Mobs",
            features: ["Hostile", "Passive"]
        },
        1: {
            title: "Farming",
            features: ["Crops", "Meat", "Fish"]
        },
        2: {
            title: "Ores",
            features: ["Overworld", "Nether"]
        },
        3: {
            title: "Deaths",
            features: ["Mobs", "World"]
        },
        4: {
            title: "Achievements",
            features: ["Type 1", "Type 2", "Type 3"]
        },
        5: {
            title: "Blocks",
            features: ["Natural Blocks", "Building Blocks", "Job Blocks"]
        },
        6: {
            title: "Items",
            features: ["Tools", "Weapons", "Valuables"]
        },
        7: {
            title: "Movement",
            features: ["Walking", "Swimming", "Falling"]
        }
    }

    return (
        <div className='outer-container'>
            <Theme lightMode={lightMode} toggleTheme={handleToggleTheme}/>
            <Title/>
            <div className="container">
                <div className="tab">
                    {Object.keys(tabs).map((index) => (
                        <Tab
                            key={index}
                            title={tabs[index].title}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleTabHover(index)}
                            onMouseLeave={handleTabLeave}
                            isHovered={hoveredTab === index}
                        />
                    ))}
                </div>
                <div className="content">
                    <BaseDisplay node={content}/>
                    <div className='content-bottom'>
                        <Leaderboards/>
                        <SQLDisplay/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;
