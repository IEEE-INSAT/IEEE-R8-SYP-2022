import React, { MouseEventHandler } from "react";
import internal from "stream";
import "./ThemedButton.css";

interface ButtonProps {
    width?: string;
    height?: string;
    text: string;
    mode?: "dark" | "light";
    color?: "primary" | "secondary";
    onClick?: MouseEventHandler | undefined;
}

export default function ThemedButton({ height, width, text, mode = "light", color = "primary", onClick }: ButtonProps) {
    const colors = {
        "primary": "#CB8B4E",
        "secondary": "#B03842"
    }
    const style = {
        backgroundColor: (mode === "light" ? colors[color] : "white"),
        color: (mode !== "light" ? colors[color] : "white"),
        ...(width != undefined ? { width: width } : {}),
        ...(height != undefined ? { height: height } : {}),
    }
    return <button onClick={onClick} className="btn" style={style} >{text}</button>
}