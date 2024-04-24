import React from 'react' // do i need this?

function MediaItem(props){

    return (
        <li>
            <a>{props.type} {props.title}</a>
        </li>
    )
}

export default MediaItem;