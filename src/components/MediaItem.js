import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MediaItem(props){

    return (
        <div className='box'>
            <a>Type: {props.item.type} Title: {props.item.title}</a>
            <button onClick={() => props.addToCart(props.item)}>Add To Cart</button>
            
            <button onClick={() => props.removeFromCart(props.item)}>Remove from Cart</button>
            
            <button onClick={() => props.addToFavorite(props.item)}> 
            <FontAwesomeIcon icon="fa-solid fa-heart" />
            </button>
        </div>
    )
}

export default MediaItem;