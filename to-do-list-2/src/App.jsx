import React, {useState} from "react";
import './App.css';


function App() {

   const [inputText, setInputText] = useState("");
   const [itens, setItem] = useState([]);

   function handleChange(event) {
       const newValue = event.target.value;
       setInputText(newValue);

   }

   function addItem() {
       setItem((prevItem) => {
           return [
               ...prevItem,
               inputText
           ]
       });
       setInputText("");
   }

  return (
      <div className="container">
        <div className="heading">
          <h1>To-Do-List V2</h1>
        </div>

        <div className="form" onSubmit={handleChange}>
          <input
              type="text"
              value={inputText}
              onChange={handleChange}
          />
          <button onClick={addItem} type="submit">
            <span>Add</span>
          </button>
        </div>

        <div>
          <ul>
              {itens.map((todoItem) => <li>{todoItem}</li>)}
          </ul>
        </div>
      </div>
  );
}

export default App;
