import React, { useState } from 'react';
import './style.css';

interface ActivityListProps {
    activities: { name: string; instructor: string }[];
    changeView(a: string): any;
}

export default function ActivityList(props: ActivityListProps) {
    const [selected, setSelected] = useState(props.activities[0].name);
    const list = props.activities.map((item, index) => (
        <div className={`ActivityListItem ${selected === item.name ? 'selectedActivityListItem' : ''}`} key={index}>
            <input
                type="radio"
                id={`${item.name}`}
                name="ActivityListItems"
                value={`${item.name}`}
                defaultChecked={index == 0}
                onChange={(event) => {
                    props.changeView(event.target.value);
                    setSelected(event.target.value);
                }}
            />
            <label htmlFor={`${item.name}`}>
                <h3>{item.name}</h3>
                <p>by {item.instructor}</p>
            </label>
        </div>
    ));
    return <div className="ActivityList">{list}</div>;
}
