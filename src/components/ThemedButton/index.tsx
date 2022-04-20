import React, { CSSProperties, MouseEventHandler } from "react";
import internal from "stream";
import "./ThemedButton.css";

interface ButtonProps {
    width?: string;
    height?: string;
    text: string;
    mode?: "dark" | "light";
    color?: "primary" | "secondary";
    onClick?: MouseEventHandler | undefined;
    style?: CSSProperties | undefined;
}

export default function ThemedButton({ height, width, text, mode = "light", color = "primary", onClick, style }: ButtonProps) {
    const colors = {
        "primary": "#CB8B4E",
        "secondary": "#B03842"
    }
    const finalStyle = {
        backgroundColor: (mode === "light" ? colors[color] : "white"),
        color: (mode !== "light" ? colors[color] : "white"),
        ...(width != undefined ? { width: width } : {}),
        ...(height != undefined ? { height: height } : {}),
        ...style
    }
    return <button onClick={onClick} className="btn" style={finalStyle} >{text}</button>
}