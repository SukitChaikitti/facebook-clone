import React from 'react';
import { Avatar , Icon} from '@material-ui/core';
import './SidebarRow.css'

function SidebarRow(props) {
    return (
        <div className = 'sidebarrow'>
            {props.src && <Avatar src = {props.src}/>}
            {props.Icon && <props.Icon/>}
            <h4>{props.title}</h4>
        </div>
    )
}

export default SidebarRow
