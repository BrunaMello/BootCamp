import React, {useState} from "react";

function ReactForms() {

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    // const [headingText, setHandingText] = useState("");

    // function handleChange(event) {
    //     console.log(event.target.value);
    //     setName(event.target.value);
    // }
    //
    // function handleClick(event) {
    //     setHandingText(name);
    //     event.preventDefault();
    // }

    function handleChange(event) {
        // const newValue = event.target.value;
        // const inputContact = event.target.name;

        //using Spread Operator
        const { name, value } = event.target;

        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value,
            }
        });

        // setContact(prevValue => {
        //     if (inputContact === "fName") {
        //         return {
        //             fName: newValue,
        //             lName: prevValue.lName,
        //             email: prevValue.email
        //         };
        //     } else if (inputContact === "lName") {
        //         return {
        //             fName: prevValue.fName,
        //             lName: newValue,
        //             email: prevValue.email
        //         };
        //     } else if (inputContact === "email") {
        //         return {
        //             fName: prevValue.fName,
        //             lName: prevValue.lName,
        //             email: newValue
        //         };
        //     }
        // });

    }

    return (
        <div>
            <h1>Hello {contact.fName} {contact.lName}</h1>
            <a type="email">{contact.email}</a>
            <form>
                <input
                    name="fName"
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your name"
                    value={contact.fName}
                />
                <br/>
                <br/>

                <input
                    name="lName"
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your last name"
                    value={contact.lName}
                />
                <br/>
                <br/>

                <input
                    name="email"
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your email"
                    value={contact.email}
                />
                <br/>
                <br/>
                <button
                    type="submit"
                >Submit</button>
            </form>


        </div>
    )
}

export default ReactForms;