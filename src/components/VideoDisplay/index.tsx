import React from "react";
import top_disk from './../../assets/images/browndisk.svg';
import bot_disk from './../../assets/images/bluedisk.svg';
import './style.css';

interface VideoDisplayProps {
    link: string
}

export default function VideoDisplay({link}: VideoDisplayProps) {
    let isLocal = true;
    isLocal = !(link.split(':')[0] === 'https');
    console.log(link, link.split(':')[0], isLocal);
    return (
        <div className='videoContainer blockElement'>
            <img className="deco top-disk" src={top_disk}/>
            <img className="deco bottom-disk" src={bot_disk}/>

            <div className="video">
                {}
                <iframe className={"videoImage"} width="1280" height="720"
                        src={link} title="True Tunisia" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </div>
    );
}