import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

var userIsRegistered = true;

function App() {
  return (
      <div className="container">
          <Login
              isRegistered={userIsRegistered}
          />

          {/*//Ternary*/}
          {/*/!*{isLoggedIn ? <h1>Hello</h1> : <Login />}*!/*/}

          {/*//AND operator*/}
          {/*/!*{currentTime > 12 && <h1>Still working?</h1>}*!/*/}
      </div>
  )
}

export default App;