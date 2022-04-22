import React from "react";
import top_disk from './../../assets/images/browndisk.svg';
import bot_disk from './../../assets/images/bluedisk.svg';
import './style.css';

interface IVideoDisplay {
    pictureOnly?: boolean;
    img?: string;
}

export default function VideoDisplay({ pictureOnly = false, img }: IVideoDisplay) {
    return (
        <div className='videoContainer blockElement'>
            <img className="deco top-disk" src={top_disk} />
            <img className="deco bottom-disk" src={bot_disk} />

            <div className="video">
            <iframe className={"videoImage"}  width="1280" height="720" src="https://www.youtube.com/embed/izQqZEEy1cU" title="True Tunisia" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
*            </div>
        </div>
    );
}