import React from 'react' 
import MediaItem from './MediaItem';

function MediaList(props){

    const {listOfItems, addToCart, removeFromCart} = props
    
    return (
        <>
       <ul >
        {listOfItems.map((item) => <MediaItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />)}
       </ul>

        </>
    );

}

export default MediaList;



