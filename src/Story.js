import React from 'react';
import { Avatar } from '@material-ui/core';
import './Story.css';

function Story(props) {
    return (
        <div className = 'story' style = {{backgroundImage : `url(${props.image})`}}>
            <Avatar className = 'story__avatar'/>
            <p>{props.name}</p>
        </div>
    )
}

export default Story
