import React from 'react' 
import MediaItem from './MediaItem';

function MediaList(props){

    const {array, addToCart} = props
    
    return (
        <>
       <ul >
        {array.map((item) => <MediaItem key={item.id} type = {item.type} title = {item.title} addToCart={addToCart}/>)}
       </ul>

        </>
    );

}

export default MediaList;



