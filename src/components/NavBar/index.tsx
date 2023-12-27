import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ThemedButton from "../ThemedButton";
import DropdownMenu from "../DropdownMenu";

import "./NavBar.css";

interface NavItem {
    name: string;
    path: string;
    submenus: {
        name: string;
        path: string;
    }[];
}

interface NavBarProps {
    navItems: NavItem[];
}

export default function NavBar({navItems}: NavBarProps) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        document.body.style.overflow = active ? "hidden" : "scroll";
    }, [active])

    const [showDropmenu, setShowDropmenu] = useState(false);

    return (
        <nav>
            <div className={active ? "MenuIcon active" : "MenuIcon"} onClick={() => setActive(!active)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className={active ? "items active" : "items"}>
                {/*If on mobile( active ==true) if an item has sub menus, */}
                {/*its title won't show on the navbar, and the content of its submenu will be displayed*/}
                {active ?
                    navItems.map((item, i) => {
                        if (item.submenus.length > 0) {
                            return item.submenus.map((item, i) =>
                                <Link to={item.path} key={i} className="NavItem">{item.name}</Link>)
                        } else
                            return <Link to={item.path} key={i} className="NavItem">{item.name}</Link>
                    })
                    : navItems.map((item, i) => {
                        // If the the screen is wide, there will be a dropdown on items where there is a submenu
                        if (item.submenus.length > 0)
                            return (
                                <div className="dropdownMenuWrapper"
                                     onMouseLeave={() => setShowDropmenu(false)}>
                                    <Link to={item.path}
                                          key={i}
                                          className="NavItem"
                                          onMouseEnter={() => setShowDropmenu(true)}
                                          style={{alignSelf: "inherit"}}
                                    >{item.name}</Link>
                                    <DropdownMenu submenus={item.submenus} dropmenuIsVisible={showDropmenu}/>
                                </div>)
                        else
                            return <Link to={item.path} key={i} className="NavItem">{item.name}</Link>
                    })

                }
                <a target='_blank' rel="noreferrer" href="https://forms.gle/SiZqTqL5J978S1uk6"><ThemedButton
                    text="Register Now" color="secondary" mode="dark"/></a>
            </div>
        </nav>
    )
}