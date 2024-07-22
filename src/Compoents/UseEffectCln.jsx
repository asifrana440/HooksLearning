// screen width check by using UseEffect and useState hook
import { useEffect, useState } from "react";

const UseEffectCln = () => {
    const [count, setCount] = useState(window.screen.width);

    const actualWidth = () => {
        setCount(window.screen.width);
        console.log(window.innerWidth);
       // setCount(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", actualWidth);

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener("resize", actualWidth);
        };
    }, []); // Empty dependency array to ensure effect runs only once on mount

    return (
        <div>
            <p>This shows the screen width</p>
            <h1>{count}</h1>
        </div>
    );
};

export default UseEffectCln;
