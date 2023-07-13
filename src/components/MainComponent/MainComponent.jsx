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
    const [content, setContent] = useState({title: "Press any tab to Get Started", features: [], options: []});
    const [statTrack, setStatTrack] = useState([]);
    const [hoveredTab, setHoveredTab] = useState(null);
    const [lightMode, setLightMode] = useState(true);
    const [toggleTypeStates, setToggleTypes] = useState(new Array(content.features.length).fill(false));
    const [toggleOptionStates, setToggleOptions] = useState(new Array(content.options.length).fill(false));

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

    const toggleType = (index, type) => {
      setToggleTypes((prevState) => {
        const newToggleTypes = [...prevState];
        newToggleTypes[index] = !newToggleTypes[index];
        return newToggleTypes;
      });
      handleType(type);
    };
  
    const toggleOptions = (index) => {
      setToggleOptions((prevState) => {
        const newToggleOptions = [...prevState];
        newToggleOptions[index] = !newToggleOptions[index];
        return newToggleOptions;
      })
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
            features: [{type:"Hostile", list: ["Skeleton", "Zombie", "Creeper", "Enderman"]}, {type: "Passive", list: ["Cow", "Sheep", "Chicken", "Pig"]}, {type: "Pet", list: ["Dog", "Cat", "Horse"]}, {type: "Golem", list: ["Iron", "Snow"]}],
            options: [{name: "Killed", table: "mobkills"}, {name: "Killed By", table: "playerkills"}]
        },
        1: {
            title: "Farming",
            features: [{type: "Crops", list: ["Carrot", "Baked Potato", "Potato", "Bread"]}, {type: "Meat", list: ["Steak", "Chicken"]}, {type: "Fish", list:["Salmon", "Cod"]}],
            options: [{name: "Planted", table: "farming"}, {name: "Collected", table: "itempickup"}, {name: "Eaten", table: "itemuse"}]
        },
        2: {
            title: "Ores",
            features: [{type: "Overworld", list: ["Diamond", "Emerald", "Iron", "Gold", "Coal"]}, {type: "Nether", list: ["Quartz", "Ancient Debris"]}],
            options: [{name: "Mined", table: "blockmined"}, {name: "Picked Up", table: "itempickup"}]
        },
        3: {
            title: "Deaths",
            features: [{type: "Mobs", list: ["Creeper", "Enderman", "Blaze", "Zombie"]}, {type: "World", list: ["Fall Damage", "Lava", "Drowning"]}],
            options: [{name: "Killed", table: "playerkills"}]
        },
        4: {
            title: "Achievements",
            features: [{type: "Type 1"}, {type: "Type 2"}, {type: "Type 3"}],
            options: [{name: "Collected"}]
        },
        5: {
            title: "Blocks",
            features: [{type: "Natural"}, {type: "Wood"}, {type: "Building"}, {type: "Job"}],
            options: [{name: "Picked Up"}, {name: "Crafted"}, {name: "Placed"}]
        },
        6: {
            title: "Items",
            features: [{type: "Tools"}, {type: "Weapons"}, {type: "Valuables"}],
            options: [{name: "Picked Up"}, {name: "Crafted"}, {name: "Used"}]
        },
        7: {
            title: "Movement",
            features: [{type: "Walking"}, {type: "Swimming"}, {type: "Falling"}],
            options: [{name: "Total"}]
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
                    <BaseDisplay
                        node={content} 
                        list={statTrack}
                        toggleTypeStates={toggleTypeStates}
                        toggleOptionStates={toggleOptionStates}
                        toggleType={toggleType}
                        toggleOptions={toggleOptions}
                    />
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
