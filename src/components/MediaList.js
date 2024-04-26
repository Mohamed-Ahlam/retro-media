import React from 'react' 
import MediaItem from './MediaItem';

function MediaList(props){

    const {listOfItems, addToCart, removeFromCart, addToFavorite} = props
    
    return (
        <div className='flexBox'>
       {/* <ul >
        {listOfItems.map((item) => <MediaItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} addToFavorite={addToFavorite}/>)}
       </ul> */}

       
        {listOfItems.map((item) => <MediaItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} addToFavorite={addToFavorite}/>)}
       

        </div>
    );

}

export default MediaList;



