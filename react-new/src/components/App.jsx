import '../App.css';
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

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

  return (
      <div>
          {declarativeProg()}
          <Avatar img="https://avatars.githubusercontent.com/u/38960731?v=4"/>
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
