import React from 'react'
import './SidebarOption.css';

function SidebarOption( props ) {
    return (
        <div className="sidebarOption">
            {props.icon && <props.icon className="sidebarOption__icon" />}
            {props.icon ? <h4>{ props.title }</h4> : <p>{ props.title }</p>}
        </div>
    )
}

export default SidebarOption
