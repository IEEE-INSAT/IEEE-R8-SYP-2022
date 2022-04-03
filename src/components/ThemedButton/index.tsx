import React, { MouseEventHandler } from "react";
import "./ThemedButton.css";

interface ButtonProps{
    text: string;
    mode?: "dark" | "light";
    color?: "primary" | "secondary";
    onClick: MouseEventHandler | undefined;
}

export default function ThemedButton({ text, mode = "light", color = "primary", onClick } : ButtonProps) {
    const colors = {
        "primary" : "#CB8B4E",
        "secondary": "#B03842"
    }
    return <button onClick={onClick} className="btn"  style={mode === "light" ? { backgroundColor: colors[color], color: "white" } : { color: colors[color], backgroundColor: "white" }} >{text}</button>
}