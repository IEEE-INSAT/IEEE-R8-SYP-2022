import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ThemedButton from "../ThemedButton";
import "./NavBar.css";

interface NavItem{
    name: string;
    path: string;
}
interface NavBarProps{
    navItems : NavItem[];
}

export default function NavBar({ navItems }: NavBarProps){
    const [active, setActive] = useState(false);

    useEffect(() => {
        document.body.style.overflow = active ? "hidden" : "scroll";
    }, [active])

    return(
    <nav>
        <div className={active ? "MenuIcon active" : "MenuIcon"} onClick={() => setActive(!active)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        <div className={active ? "items active" : "items"} >
            {navItems.map((item, i) => (
                <Link to={item.path} key={i} className="NavItem">{item.name}</Link>
            ) )}
            <a target='_blank' rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfz6Pmg4dJeODT3fyeKYLSLaA3rmELCYvX1PsSWrwajQ2vBvQ/viewform" ><ThemedButton text={"Apply for funding"} color="secondary" mode="dark" /></a>
        </div>
    </nav>
    )
}