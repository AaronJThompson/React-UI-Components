import React from 'react';
import './Card.css';

function CardBanner(props) {
    const { imageSrc } = props;
    const style = {
        backgroundImage: `url(${imageSrc})`,
    }

    return (
        <div className="card-banner" style={style} />
    )
}

export default CardBanner;