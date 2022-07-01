import React, { useState } from 'react';
import './style.css';

interface ActivityListProps {
    activities: { id: number, name: string; instructorName: string }[];
    changeView(a: number): any;
}

export default function ActivityList(props: ActivityListProps) {
    const [selected, setSelected] = useState(props.activities[0].id);
    const list = props.activities.map((item, index) => (
        <div className={`ActivityListItem ${selected === item.id ? 'selectedActivityListItem' : ''}`} key={index}>
            <input
                type="radio"
                id={`${item.name}`}
                name="ActivityListItems"
                value={item.id}
                defaultChecked={index == 0}
                onChange={(event) => {
                    props.changeView(parseInt(event.target.value));
                    setSelected(parseInt(event.target.value));
                }}
            />
            <label htmlFor={`${item.name}`}>
                <h3>{item.name}</h3>
                <p>by {item.instructorName}</p>
            </label>
        </div>
    ));

    

    return <div className="ActivityList">{list}</div>;
}
