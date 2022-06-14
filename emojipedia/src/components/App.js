import React from "react";
import Entry from "./Entry.jsx";
import Header from "./Header.jsx";
import emojipedia from "../emojipedia.js";


function App() {
  return (
      <div>
          <Header />
          <dl className="dictionary">
              {emojipedia.map( emoji => (
                  <Entry
                      key={emoji.id}
                      emoji={emoji.emoji}
                      name={emoji.name}
                      meaning={emoji.meaning}
                  />))}
          </dl>
      </div>
  );
}

export default App;
