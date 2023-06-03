import { useState, useEffect } from "react";
import Link from "next/link";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prev => prev + 1)   
    }

    return (
        <div className="main">
            <h1>COUNTER</h1>
            <div className="counter">{count}</div>
            <button onClick={handleClick} className="btn">INCREASE</button>
            <Link href="/">
                <button className="btn">
                    Go to Home Page
                </button>
            </Link>
        </div>
    )
}

export default Counter