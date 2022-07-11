import React, { useState } from 'react';
import './style.css';

interface MainActivityNavBarProps {
    items: string[];
    changeView(a: string): any;
    default: string;
}
export default function MainActivityNavBar(props: MainActivityNavBarProps) {
    const [selected, setSelected] = useState(props.default);
    const list = props.items.map((item, index) => (
        <div
            className={`MainActivityNavBarItems ${selected === item ? 'selectedItem' : ''}`}
            key={index}
            onClick={
                () => {
                    setSelected(item);
                    props.changeView(item);
                }}
        >
            <input
                type="radio"
                id={`${item}`}
                name="NavBarItems"
                value={`${item}`}
                readOnly
                checked={selected === item}
            />
            <label htmlFor={`${item}`}>{item}</label>
        </div>
    ));
    return <div className="MainActivityNavBar">{list}</div>;
}
