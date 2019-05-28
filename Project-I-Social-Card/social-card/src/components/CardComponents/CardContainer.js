import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer(props) {
    const { banner, content} = props;

    return (
        <div className="card">
            <CardBanner imageSrc={banner.imageSrc} />
            <CardContent  title={content.title} body={content.body} link={content.link} />
        </div>
    );
}

export default CardContainer;