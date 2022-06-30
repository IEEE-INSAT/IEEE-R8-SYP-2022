import React, { useState } from "react";
import './style.css'

interface MainActivityNavBarProps{
    items: string[],
    changeView(a:string): any,
    default : string
}
export default function MainActivityNavBar(props : MainActivityNavBarProps){
    const [selected,setSelected]=useState(props.items[1]);
    const list=props.items.map((item,index)=>
    <div className={`MainActivityNavBarItems ${selected===item?"selectedItem":""}`}  key={index}>
        <input 
            type="radio" 
            id={`${item}`} 
            name="NavBarItems" 
            value={`${item}`} 
            defaultChecked={props.default===item} 
            onChange={(event)=>{
                props.changeView(event.target.value);
                setSelected(event.target.value);
            }}
        />
        <label htmlFor={`${item}`} >{item}</label>
    </div>
    )
    return(
        <div className="MainActivityNavBar">
            {list}
        </div>
    );
}