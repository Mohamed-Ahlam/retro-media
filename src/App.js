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


    //1. cart list 
    //2. useState holds hold data about the media items and any user interactions
    // if they click add cart - it adds to cart array 

// The parent component needs to maintain either a 'logged in' or 'logged out' state in order to work as intended, so it should be stateful. 
  

    
const [cart, setCart] = useState([])



return (
  
    <div>
      

    <div className="title">
    <h1>Retro Media</h1>
    </div>
    

    <MediaList array = {array} addToCart = {addToCart}/>
    </div>
      
  );
}

export default App;
