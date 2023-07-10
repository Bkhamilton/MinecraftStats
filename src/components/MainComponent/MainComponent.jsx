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
    const [statTrack, setStatTrack] = useState([]);
    const [hoveredTab, setHoveredTab] = useState(null);
    const [lightMode, setLightMode] = useState(true);

    const handleType = (type) => {
        const toAdd = content.features.filter((feature) => feature.type === type);
        setStatTrack((prevStatTrack) => {
            const existingFeatures = prevStatTrack.filter((feature) => feature.type !== type);
            if (existingFeatures.length === prevStatTrack.length) {
              // Add features to statTrack
              return [...prevStatTrack, ...toAdd];
            } else {
              // Remove features from statTrack
              return existingFeatures;
            }
        });
    }

    const handleToggleTheme = () => {
      setLightMode((prevMode) => !prevMode);
    };

    const handleClick = (index) => {
        setContent(tabs[index]);
        setStatTrack([]);
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
            features: [{type:"Hostile", list: ["Skeleton", "Zombie", "Creeper", "Enderman"]}, {type: "Passive", list: ["Cow", "Sheep", "Chicken", "Pig"]}],
            options: ["Killed", "Killed By"]
        },
        1: {
            title: "Farming",
            features: [{type: "Crops", list: ["Carrot", "Baked Potato", "Potato", "Bread"]}, {type: "Meat", list: ["Steak", "Chicken"]}, {type: "Fish", list:["Salmon", "Cod"]}],
            options: ["Planted", "Collected", "Eaten"]
        },
        2: {
            title: "Ores",
            features: [{type: "Overworld", list: ["Diamond", "Emerald", "Iron", "Gold", "Coal"]}, {type: "Nether", list: ["Quartz", "Ancient Debris"]}],
            options: ["Mined", "Picked Up"]
        },
        3: {
            title: "Deaths",
            features: [{type: "Mobs", list: ["Creeper", "Enderman", "Blaze", "Zombie"]}, {type: "World", list: ["Fall Damage", "Lava", "Drowning"]}],
            options: ["Killed"]
        },
        4: {
            title: "Achievements",
            features: [{type: "Type 1"}, {type: "Type 2"}, {type: "Type 3"}],
            options: ["Collected"]
        },
        5: {
            title: "Blocks",
            features: [{type: "Natural"}, {type: "Wood"}, {type: "Building"}, {type: "Job"}],
            options: ["Picked Up", "Crafted", "Placed"]
        },
        6: {
            title: "Items",
            features: [{type: "Tools"}, {type: "Weapons"}, {type: "Valuables"}],
            options: ["Picked Up", "Crafted", "Used"]
        },
        7: {
            title: "Movement",
            features: [{type: "Walking"}, {type: "Swimming"}, {type: "Falling"}],
            options: ["Total"]
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
                            isActive={tabs[index].title === content.title}
                        />
                    ))}
                </div>
                <div className="content">
                    <BaseDisplay node={content} onClick={handleType}/>
                    <div className='content-bottom'>
                        <Leaderboards list={statTrack}/>
                        <SQLDisplay/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;
