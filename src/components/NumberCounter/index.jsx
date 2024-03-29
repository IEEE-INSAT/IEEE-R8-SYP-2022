import React, { useEffect, useRef, useState } from 'react';

export default function NumberCounter(props) {
    /* eslint-disable react/prop-types */

    const [value, setValue] = useState(0);
    const valueRef = useRef(value);
    valueRef.current = value;
    const animate = () => {
        
        if (valueRef.current < props.number + 5 - (props.number % 5))
            setTimeout(() => {
                setValue(valueRef.current + 1);
            }, 70);        
    };
    useEffect(()=>animate())
    animate.bind(this);
    return (
        <span>{value}</span>
    );
}
