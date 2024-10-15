import { useState } from "react"

export default function SimpleForm() {
    const [userName, setUserName] = useState("Nick");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        alert(`Submitted - UserName: ${userName}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            User Name:
            <input value={userName} onChange={(e) => setUserName(e.target.value)} />
            <br /><br />
            <button type="submit" disabled={submitted}>Update</button>
        </form>
    )
}