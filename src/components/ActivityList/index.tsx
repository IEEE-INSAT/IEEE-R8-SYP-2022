import React, {useEffect, useState} from 'react';
import './style.css';

interface ActivityListProps {
    activities: {
        id: number;
        name: string;
        instructorname: string;
        instructor2name?: string
        instructor3name?: string
    }[];

    changeView(a: number): void;
}

export default function ActivityList(props: ActivityListProps) {
    const [selected, setSelected] = useState(props.activities[0].id);
    useEffect(() => {
        setSelected(props.activities[0].id);
    }, [props.activities[0].id])
    const list = props.activities.map((item, index) => (
        <div
            className={`ActivityListItem ${selected === item.id ? 'selectedActivityListItem' : ''}`}
            key={index}
            onClick={() => {
                props.changeView(item.id);
                setSelected(item.id);
            }}
        >
            <input
                type="radio"
                id={`${item.name}`}
                name="ActivityListItems"
                value={item.id}
                readOnly
                checked={item.id === selected}
            />
            <label htmlFor={`${item.name}`}>
                <b>{item.name}</b>
                <p>by {item.instructorname}
                    {item.instructor3name ? ', ' + item.instructor2name + ' and ' + item.instructor3name
                        : item.instructor2name ?
                            ' and ' + item.instructor2name : ''
                    }</p>
            </label>
        </div>
    ));

    return <div className="ActivityList">{list}</div>;
}
