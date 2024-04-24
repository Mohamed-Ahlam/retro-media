import React from 'react' // do i need this?
import MediaItem from './MediaItem';

function MediaList(props){

    const addToCart = (id, type, title) =>{
        props.setCart(
          [...cart, {
          id: id,
          type: type,
          title: title
        }])
      }
      
        
    
    return (
        <>

       <ul >
        {props.array.map((item) => <MediaItem key={item.id} type = {item.type} title = {item.title} addToCart={addToCart}/>)}
       </ul>

        </>
    );



}

export default MediaList;



