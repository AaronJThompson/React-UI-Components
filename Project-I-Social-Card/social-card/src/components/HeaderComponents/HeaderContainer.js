import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

function HeaderContainer(props) {
    const { imageSrc, content, postInfo } = props;

    return (
        <div className="post-header">
            <ImageThumbnail imageSrc={imageSrc} />
            <HeaderContent content={content} postInfo={postInfo} />
        </div>
    )
}

export default HeaderContainer;