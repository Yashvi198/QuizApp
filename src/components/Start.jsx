import { useRef } from "react"

export default function Start({setUsername}) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };

    return (
        <div className="start">
            <div className="profile">
            </div>
            <input 
                placeholder="Enter your name" 
                className="startInput"
                ref={inputRef}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                    handleClick();
                }}

            />
            <button className="startButton" onClick={handleClick}>
                Start
            </button>
        </div>
    )
}
