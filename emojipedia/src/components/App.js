import React from "react";
import Entry from "./Entry";
import Header from "./Header";
import emojipedia from "../emojipedia";

function createEntry(emoji){
    return (
        <Entry
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
        />
    )
}

function App() {
  return (
      <div>
          <Header />
          <dl className="dictionary">
              {emojipedia.map(createEntry)}
          </dl>
      </div>
  );
}

export default App;
