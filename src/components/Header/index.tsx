import React from "react";
import "./Header.css"

import HeaderWave from "../../assets/images/headerWave.png";
import logo from "../../assets/images/logo180-black.png";
import beb from "../../assets/images/bebAzra9.png";
import ThemedButton from "../ThemedButton";
import NavBar from "../NavBar";
import NavItems from "../../data/NavItems.json";


export default function Header(){
    return (
    <header>
        <img className="headerWave" src={HeaderWave} alt="" />
        <NavBar items={NavItems["items"]} />
        <img className="logo" src={logo} alt="SYP" />
        <div className="welcome">
            <div className="descr">
                <h1>IEEE R8 SYP</h1>
                <p>Student and Young Professional Congress is the largest student event in all Region 8</p>
                <ThemedButton text={"Apply for funding"} onClick={() => alert("testing")} />
            </div>
            <div><img className="beb" src={beb} alt="welcome"/></div>
        </div>
    </header>
    )
}

