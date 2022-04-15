import React from 'react';
import './style.css';

interface IGalleryPictureBlock {
    pictures: [string, string, string, string];
    reverse?: boolean
}

export default function GalleryPictureBlock({ reverse = false, pictures }: IGalleryPictureBlock) {
    return (
        <>
            <div className={'imgContainer desktopView ' + (reverse ? 'reverseContainer' : '')}>
                <div className='soloPicture'>
                    <img src={pictures[0]} />
                </div>

                <div className='groupPicture'>
                    <div className='groupPicture-grp1'>
                        <img src={pictures[1]} />
                        <img src={pictures[2]} />
                    </div>
                    <div className='groupPicture-grp2'>
                        <img src={pictures[3]} />
                    </div>
                </div>
            </div>
            <div className='imgContainer mobileView'>
                <div className='mobileViewImgContainer'>
                    <img src={pictures[0]} />
                </div>
                <div className='mobileViewImgContainer'>
                    <img src={pictures[1]} />
                </div>
                <div className='mobileViewImgContainer'>
                    <img src={pictures[2]} />
                </div>
                <div className='mobileViewImgContainer'>
                    <img src={pictures[3]} />
                </div>
            </div>
        </>
    );
}