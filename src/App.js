import {
  useState,
  useRef
} from "react"; 
import "./App.css";

import MediaList from "./components/MediaList"

function App() {

  const array = [
    { "id": 1, "type": "VHS", "title": "Back to the Future" },
    { "id": 2, "type": "DVD", "title": "The Matrix" },
    { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson" }
  ];


const [cart, setCart] = useState([])

const addToCart = (id, type, title) =>{
  setCart(
    [...cart, {
    id: id,
    type: type,
    title: title
  }])
}

return (
    <div>
      
    <div className="title">
    <h1>Retro Media</h1>
    </div>
    

    <MediaList array = {array} addToCart = {addToCart}/>

    <MediaItem />
    </div>
      
  );
}

export default App;
