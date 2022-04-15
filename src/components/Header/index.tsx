import React from "react";
import "./Header.css"

import HeaderWave from "../../assets/images/headerWave.png";
import HeaderWaveNav from "../../assets/images/headerWave nav.png";
import logo from "../../assets/images/logo180-black.png";
import beb from "../../assets/images/bebAzra9.png";
import ThemedButton from "../ThemedButton";
import NavBar from "../NavBar";
import NavItems from "../../data/NavItems.json";


interface HeaderProps{
    mode?: "HOMEPAGE" | "PAGE";
    title: string;
    description?: string;
    buttonText? : string;
    handleBtnClick?: () => void;
}

export default function Header({ mode = "PAGE", title, description, buttonText, handleBtnClick }: HeaderProps){
    return (
    <header>
        <img className="headerWave" src={(mode=="HOMEPAGE") ? HeaderWave : HeaderWaveNav} style={mode=="PAGE" ? { width: "70vw", minHeight: "181px" } : {}} alt="" />
        <NavBar items={NavItems} />
        <img className="logo" src={logo} alt="SYP" />
        <div className="welcome">
            <div className={mode=="PAGE" ? "descr descrpage" : "descr"} style={mode=="PAGE" ? { alignItems: "flex-start", textAlign: "center" } : {}}>
                <h1>{title}</h1>
                <p>{description}</p>
                {buttonText && (<ThemedButton text={buttonText} onClick={handleBtnClick} />)}
            </div>
           {mode=="HOMEPAGE" && (<div><img className="beb" src={beb} alt="welcome"/></div>)}
        </div>
    </header>
    )
}

