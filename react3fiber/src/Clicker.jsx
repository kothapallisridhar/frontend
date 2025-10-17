import { useState, useEffect } from "react"

export default function Clicker({ keyName }) {
    
    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))

    useEffect(() => {

        return () => {
            localStorage.removeItem(keyName)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(keyName, count)
    }, [count])

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