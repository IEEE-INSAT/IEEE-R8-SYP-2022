
import './index.css';
import React, {  useState } from 'react';
import Zoom from "react-reveal/Zoom"
function SpeakerCard(props) {

  /* eslint-disable react/prop-types */
  const [hovered,setHover]=useState(false);
  const {name,linkedin,description,highlight}=props;

  //for handling different screen input
  let touchSupport = window.matchMedia("(hover: none)");
  let handleClick=()=>{
    if (touchSupport.matches)
      setHover(hovered?false:true)
  }
  let handleHover=()=>{
    if (!touchSupport.matches)
      setHover(hovered?false:true)
  }


  return (
    <Zoom>
      <div  className={`card${hovered?' cardHovered':''}`}
      style={{
        backgroundImage : `linear-gradient(0deg, rgba(203, 138, 78, 0.69) 0%, rgba(203, 138, 78, 0) 40%) , url("/images/speakers/${name}.jpg")` 
      }} 
      onMouseEnter={handleHover}
      onMouseLeave={()=>setHover(false)}
      onClick={handleClick}
      // onClick={()=>{setHover(hovered?false:true)}}
      >
        <div className='speakerCardBlur'>
          <div className='speakerDescription'>
            <a href={linkedin} style={{lineHeight:'3em'}}> <i className="fa-brands fa-linkedin SpeakerIcon"></i></a>
            <p>{description && description.substring(0,370)}</p>
            <div onClick={()=>setHover(false)} className='SpeakerCardX'><i  className="fa-solid fa-circle-xmark"></i></div>
          </div>
          <div className="SpeakerCardRow" style={{margin : "10px"}}>
            <div className="SpeakerCardText">
                <b>{name}</b>
                <br></br>
                {highlight}
            </div>
          </div>
        </div>
      </div>
      </Zoom>
  );
}

export default SpeakerCard;
