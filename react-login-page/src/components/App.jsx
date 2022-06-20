import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
      <div className="container">
          //Ternary
          {isLoggedIn ? <h1>Hello</h1> : <Login />}

          //AND operator
          {currentTime > 12 && <h1>Still working?</h1>}
      </div>
  )
}

export default App;