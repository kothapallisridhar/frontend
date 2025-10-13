import { useState } from "react"

export default function Clicker() {

    const [count, setCount] = useState(0)

    function buttonClick() {
        setCount(value => value + 1)
    }

    return (
        <div>
            <div>Clicks count: {count}</div>
            <button onClick={buttonClick}>Click me</button>
        </div>
    )
}