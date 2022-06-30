import React from "react";
import './style.css'

interface MainActivityNavBarProps{
    items: string[],
    changeView(a:string): any,
    default : string
}
export default function MainActivityNavBar(props : MainActivityNavBarProps){
    const list=props.items.map((item,index)=>
    <div className="MainActivityNavBarItems"  key={index}>
        
        <input type="radio" id={`${index}`} name="NavBarItems" value={`${item}`} defaultChecked={props.default===item} onChange={(event)=>props.changeView(event.target.value)}/>
        <label htmlFor={`${index}`} >{item}</label>
    </div>
    )
    return(
        <div className="MainActivityNavBar">
            {list}
        </div>
    );
}