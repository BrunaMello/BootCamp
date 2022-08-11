import React, {useState} from "react";

function ReactForms() {

    const [name, setName] = useState("");
    const [headingText, setHandingText] = useState("");

    function handleChange(event) {
        console.log(event.target.value);
        setName(event.target.value);
    }

    function handleClick(event) {
        setHandingText(name);

        event.preventDefault();
    }

    return (
        <div>
            <h1>Hello {headingText}</h1>
            <form onSubmit={handleClick}>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your name"
                    value={name}
                />
                <button
                    onClick={handleClick}
                    type="submit"
                >Submit</button>
            </form>


        </div>
    )
}

export default ReactForms;