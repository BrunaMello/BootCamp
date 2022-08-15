import React, {useState} from "react";

function ReactForms() {

    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""

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
        const newValue = event.target.value;
        const inputName = event.target.name;

        setFullName(prevValue => {
            if (inputName === "fName") {
                return {
                    fName: newValue,
                    lName: prevValue.lName
                };
            } else if (inputName === "lName") {
                return {
                    fName: prevValue.fName,
                    lName: newValue
                };
            }
        });
    }

    return (
        <div>
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <form>
                <input
                    name="fName"
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your name"
                    value={fullName.fName}
                />
                <br/>
                <br/>
                <input
                    name="lName"
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your last name"
                    value={fullName.lName}
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