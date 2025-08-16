import { useEffect, useState } from "react";

const CursorCircle = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [])

    return (
        <div
            style={{
                top: position.y,
                left: position.x,
            }}
            className="glass-cursor"
        />
    );
}

export default CursorCircle;