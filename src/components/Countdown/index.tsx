import React from "react";
import Countdown from 'react-countdown';
import "./Countdown.css"

interface rendererprops{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

export default function CountdownSection(){

    const renderer = ({ days, hours, minutes, seconds, completed } : rendererprops ) => {
        if (completed) {
          // Render a completed state
          return (
            <div className="countdown" >
                <h4>EVENT TIMER</h4>
                <h2>THE EVENT HAS STARTED</h2>
            </div>
          );
        } else {
          // Render a countdown
          return ( 
        <div className="countdown" >
          <h4>EVENT TIMER</h4>
          <h2>COMING SOON IN</h2>
          <div className="timer" >
              <div>
                  <p className="numbers">{days}</p>
                  <p className="unit">days</p>
              </div>
              <div>
                  <p className="numbers" >{hours}</p>
                  <p className="unit" >hours</p>
              </div>
              <p className="numbers">:</p>
              <div>
                  <p className="numbers" >{minutes}</p>
                  <p className="unit" >minutes</p>
              </div>
              <p className="numbers">:</p>
              <div>
                  <p className="numbers">{seconds}</p>
                  <p className="unit" >seconds</p>
              </div>
          </div>
      </div>)
        }
    };

    return(
        <Countdown
            date={new Date("3 Aug 2022")}
            renderer={renderer}
        />
    )

}