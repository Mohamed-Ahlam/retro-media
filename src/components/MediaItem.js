import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MediaItem(props){

    return (
        <li>
            <a>Type: {props.item.type} Title: {props.item.title}</a>
            <button onClick={() => props.addToCart(props.item)}>Add To Cart</button>
            <button onClick={() => props.removeFromCart(props.item)}>Remove from Cart</button>
            <button class="btn"> 
            <FontAwesomeIcon icon="fa-solid fa-heart" />
            </button>
        </li>
    )
}

export default MediaItem;