import React from 'react' // do i need this?

function MediaItem(props){

    return (
        <li>
            <a>Id: {props.id} Type: {props.type} Title: {props.title}</a>
            <button onClick={props.addToCart(props.id,props.type, props.title)}>Add To Cart</button>
        </li>
    )
}

export default MediaItem;