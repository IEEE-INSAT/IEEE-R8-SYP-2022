import React from 'react';
import './style.css';
import img1 from './../../assets/images/gallery/image1.png';
import img2 from './../../assets/images/gallery/image2.png';
import img3 from './../../assets/images/gallery/image3.png';
import img4 from './../../assets/images/gallery/image4.png';
import img5 from './../../assets/images/gallery/image5.png';
import img6 from './../../assets/images/gallery/image6.png';
import img7 from './../../assets/images/gallery/image7.png';
import img8 from './../../assets/images/gallery/image8.png';
import GalleryPictureBlock from '../GalleryPictureBlock';
import ThemedButton from '../ThemedButton';

interface IGallery {
    title: string;
    description: string;
}

export default function Gallery({ title, description }: IGallery) {
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
                <GalleryPictureBlock reverse={true} pictures={[img5, img6, img7, img8]} />
            </div>

            <div className='seeMoreContainer'>
                <a href='https://www.youtube.com/channel/UC8Byf7CiZwJPUHKNGLIeIRw' target="_blank" rel="noreferrer" ><ThemedButton width='100%' text='See more' color='secondary' /></a> 
            </div>
        </div>
    );
}
