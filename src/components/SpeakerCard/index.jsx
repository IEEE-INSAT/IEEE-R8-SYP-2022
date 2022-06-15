
import './index.css';
import React from 'react';
function SpeakerCard(props) {
  /* eslint-disable react/prop-types */
  const {name,linkedin,description,highlight}=props
  return (
      <div  className="card" style={{
        backgroundImage : `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%) , url("/images/speakers/${name}.jpg")` 
      }}>
        <div className='speakerCardBlur'>
          <div className='speakerDescription'>
            <a href={linkedin} style={{lineHeight:'3em'}}><i className="fa fa-linkedin-square SpeakerIcon" ></i></a>
            <p>{description && description.substring(0,370)+"..."}</p>
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

  );
}

export default SpeakerCard;
