import React, {useState} from "react";

function EventHandling() {

    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false);

    function handleClick() {
        setHeadingText("Submitted")
    }

    function changeBottomColor() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }


    return (
        <div className='container'>
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's is your name?"/>
            <br/>
            <br/>
            <button
                style={{backgroundColor: isMouseOver ? "black" : "grey"}}
                onMouseOver={changeBottomColor}
                onMouseOut={handleMouseOut}
                id="1"
                onClick={handleClick}>Submit</button>
        </div>
    )
}

export default EventHandling;