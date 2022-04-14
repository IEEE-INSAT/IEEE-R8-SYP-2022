import React from 'react';
import './style.css';
import img1 from './../../assets/images/gallery/image1.png';
import img2 from './../../assets/images/gallery/image2.png';
import img3 from './../../assets/images/gallery/image3.png';
import img4 from './../../assets/images/gallery/image4.png';
import GalleryPictureBlock from '../GalleryPictureBlock';
import ThemedButton from '../ThemedButton';

interface IGallery {
    title: string;
    description: string;
}

export default function Gallery({ title, description }: IGallery) {
    const seeMoreClick = () => {
        console.log("hi")
    }
    return (
        <div className='gallery'>
            <div className='galleryTitle'>
                {title}
            </div>
            <div className='galleryDescription'>
                {description}
            </div>

            <div className='picturesContainer'>
                <GalleryPictureBlock pictures={[img1, img2, img3, img4]} />
                <GalleryPictureBlock reverse={true} pictures={[img1, img2, img3, img4]} />
            </div>

            <div className='seeMoreContainer'>
                <ThemedButton width='100%' text='See more' onClick={seeMoreClick} color='secondary' />
            </div>
        </div>
    );
}
