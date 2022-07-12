import React from "react";
import {Link} from "react-router-dom";
import './styles.css';

interface items {
    name: string;
    path: string;
}

interface DropdownMenuProps {
    submenus: items[];
    dropmenuIsVisible: boolean;
}

export default function DropdownMenu({submenus, dropmenuIsVisible}: DropdownMenuProps) {
    return <div className={dropmenuIsVisible ? "dropdownMenu show" : "dropdownMenu"}>

        {submenus.map((item, i) => <Link to={item.path} key={i} className="NavItem">{item.name}</Link>)}
    </div>

}