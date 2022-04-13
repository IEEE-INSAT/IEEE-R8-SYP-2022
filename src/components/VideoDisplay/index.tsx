import React, { useRef } from "react";
import video from './../../assets/images/vid_img.png';
import top_disk from './../../assets/images/browndisk.svg';
import bot_disk from './../../assets/images/bluedisk.svg';
import './style.css'

export default function VideoDisplay() {
    const imgRef = useRef<HTMLImageElement | null>(null);

    return (
        <div className='videoContainer blockElement'>
            <img className="deco top-disk" src={top_disk} />
            <img className="deco bottom-disk" src={bot_disk} />

            <div className="video">
                <img className="videoImage" src={video} />
            </div>
        </div>
    );
}