import React from 'react' // do i need this?
import MediaItem from './MediaItem';

function MediaList(props){
    
    return (
        <>

       <ul >
        {props.array.map((item) => <MediaItem key={item.id} type = {item.type} title = {item.title} addToCart={props.addToCart}/>)}
       </ul>

        </>
    );



}

export default MediaList;



