import React from 'react';
import './Header.css';

function ImageThumbnail(props) {
    const { imageSrc } = props;

    return (
        <img src={imageSrc} alt="post thumbnail">
        </img>
    )
}

export default ImageThumbnail;