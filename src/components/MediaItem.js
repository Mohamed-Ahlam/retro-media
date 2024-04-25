import React from 'react' 

function MediaItem(props){

    return (
        <li>
            <a>Id: {props.id} Type: {props.type} Title: {props.title}</a>
            <button onClick={() => props.addToCart(props.id, props.type, props.title)}>Add To Cart</button>
        </li>
    )
}

export default MediaItem;