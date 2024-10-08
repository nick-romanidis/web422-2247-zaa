// Answer to question 1 of T2

import { useState } from "react";

export default function ClickCounter({ buttonText }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <button type="button" onClick={handleClick}>{buttonText}</button>
            <h1>The button was clicked {count} times.</h1>
        </>
    );
}

// Question #2 
<ClickCounter buttonText={"Click Me"} />

// Question #3
{ (age >= 18 ? <p>The student is an adult.</p> : <p>The student is a minor.</p>) }

// Question #4
// if (!loading)
// return null;