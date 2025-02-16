import { useState } from "react"
import { Button } from "../component"

export const A_Button = () => {
    const [isTrue,setIsTrue] = useState(true);

    const handleClick = () => {
        setIsTrue(!isTrue);
    }
    return (
        <>
            <Button name={isTrue ? "a" : "b"} onClick={handleClick} />
        </>
    )
}
