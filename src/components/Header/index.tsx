import React from "react";
import "./Header.css"

import HeaderWave from "../../assets/images/headerWave.png";
import HeaderWaveNav from "../../assets/images/headerWave nav.png";
import logo from "../../assets/images/logo180-black.png";
import beb from "../../assets/images/bebAzra9.png";

import NavBar from "../NavBar";
import NavItems from "../../data/NavItems.json";
import {Link} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


import Fade from "react-reveal/Fade";

interface HeaderProps {
    mode?: "HOMEPAGE" | "PAGE";
    title: string;
    description?: React.ReactNode;
    buttonText?: string;
    handleBtnClick?: () => void;
}

export default function Header({mode = "PAGE", title, description, buttonText, handleBtnClick}: HeaderProps) {
    return (
        <header>

            <img className="headerWave" src={(mode == "HOMEPAGE") ? HeaderWave : HeaderWaveNav}
                 style={mode == "PAGE" ? {width: "80vw", minHeight: "230px"} : {}} alt=""/>
            <NavBar navItems={NavItems}/>
            <Link to="/"><img className="logo" src={logo} alt="SYP"/></Link>
            <Fade>
                <div className="welcome">
                    <div className={mode == "PAGE" ? "descr descrpage" : "descr"}
                         style={mode == "PAGE" ? {alignItems: "flex-start", textAlign: "center"} : {}}>
                        <h1>{title}</h1>
                        {description}
                        {/*{buttonText && (<a target='_blank' rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfz6Pmg4dJeODT3fyeKYLSLaA3rmELCYvX1PsSWrwajQ2vBvQ/viewform" ><ThemedButton text={buttonText} /></a>)}*/}
                    </div>
                    {mode == "HOMEPAGE" && (<div><img className="beb" src={beb} alt="welcome"/></div>)}
                </div>
            </Fade>
        </header>
    )
}

