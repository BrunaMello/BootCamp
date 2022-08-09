import '../App.css';
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
import React, {useState} from "react";

function createCard(contact) {
    return <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
    />
}

//Imperative Programming
function declarativeProg() {
    var isDone = false;

    const strikeThrough = { textDecoration: "line-through" };

    return <h1 style={isDone ? strikeThrough : null}>My Contacts</h1>
}


function App() {

    //Hooks useState
    const [count, setCount] = React.useState(0);

    //destructuring example
    //const [red, green, blue] = [9, 132, 227]


    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    //hook pratice

    setInterval(updateTime, 1000);

    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString()
        setTime(newTime);
    }

  return (
      <div>
          {declarativeProg()}
          <Avatar img="https://avatars.githubusercontent.com/u/38960731?v=4"/>
          <br></br>
          <br></br>
          <br></br>

          <button onClick={updateTime}>GET TIME</button>
          <br></br>
          <br></br>
          <a>{time}</a>


          {/*<h1>{count}</h1>*/}
          {/*<button onClick={increase}>+</button>*/}
          {/*<button onClick={decrease}>-</button>*/}

          {contacts.map(createCard)}


          {/*<Card*/}
          {/*    name={contacts[0].name}*/}
          {/*    img={contacts[0].imgURL}*/}
          {/*    tel={contacts[0].phone}*/}
          {/*    email={contacts[0].email}*/}
          {/*/>*/}

          {/*<Card*/}
          {/*    name={contacts[1].name}*/}
          {/*    img={contacts[1].imgURL}*/}
          {/*    tel={contacts[1].phone}*/}
          {/*    email={contacts[1].email}*/}
          {/*/>*/}

          {/*<Card*/}
          {/*    name={contacts[2].name}*/}
          {/*    img={contacts[2].imgURL}*/}
          {/*    tel={contacts[2].phone}*/}
          {/*    email={contacts[2].email}*/}
          {/*/>*/}
      </div>

  );
}

export default App;
