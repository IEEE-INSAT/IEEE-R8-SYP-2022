import React, { useState } from 'react';
import './style.css';

interface ActivityListProps {
    activities: { id: number; name: string; instructorName: string }[];
    changeView(a: number): any;
}

export default function ActivityList(props: ActivityListProps) {
    const [selected, setSelected] = useState(props.activities[0].id);
    const list = props.activities.map((item, index) => (
        <div
            className={`ActivityListItem ${selected === item.id ? 'selectedActivityListItem' : ''}`}
            key={index}
            onClick={()=>{
                props.changeView(item.id);
                setSelected(item.id)
            }}
        >
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
                checked={item.id === selected}
            />
            <label htmlFor={`${item.name}`}>
                <b>{item.name}</b>
                <p>by {item.instructorName}</p>
            </label>
        </div>
    ));

    return <div className="ActivityList">{list}</div>;
}
