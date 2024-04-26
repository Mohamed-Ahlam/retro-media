import {useState} from "react"; 
import "./App.css";
import MediaList from "./components/MediaList"
import Header from "./components/Header"

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

//import router
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route, Link} from 'react-router-dom'



function App() {

  const listOfItems = [
    { "id": 1, "type": "VHS", "title": "Back to the Future" },
    { "id": 2, "type": "DVD", "title": "The Matrix" },
    { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson" }
  ];


const [cart, setCart] = useState([])

// const addToCart = (id, type, title) =>{
//   setCart(
//     [...cart, {
//     id: id,
//     type: type,
//     title: title
//   }])
// }

const addToCart = (item) =>{
  setCart([...cart,item])
console.log(`added ${item.title} ${cart.length}  to cart`)
}

const removeFromCart = (item) =>{
  setCart(cart.filter((removeItem)=> removeItem))
console.log(`removed ${item.title} ${cart.length} to cart`)
}

const [favorite, setFavorite] = useState([])

const addToFavorite = (item) =>{
  setFavorite([...favorite,item])
console.log(`added ${item.title} to favorite`)
}

return (
    <div>
      
    <Header/>
    
    <MediaList listOfItems = {listOfItems} addToCart={addToCart} removeFromCart={removeFromCart} addToFavorite={addToFavorite}/>

    </div>
      
  );
}

export default App;
library.add(fab, fas, far)
