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
    


  // const itemZero = { "id": 1, "type": "VHS", "title": "Back to the Future" };

  return (
    <div>

    <div className="title">
    <h1>Retro Media</h1>
    </div>
    

    <MediaList array = {array} />
    </div>
      
  );
}

export default App;