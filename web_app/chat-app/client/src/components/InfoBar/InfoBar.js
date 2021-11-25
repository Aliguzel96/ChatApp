import React from 'react';
import close2 from '../../icons/closee.png'; 
import onlineIcon from '../../icons/onlineIcon.png';
import './InfoBar.css';

const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online"></img>
            <h3>{room}</h3>

        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={close2} alt="close" className="closeIcon"></img></a>

        </div>

    </div>
)

export default InfoBar;