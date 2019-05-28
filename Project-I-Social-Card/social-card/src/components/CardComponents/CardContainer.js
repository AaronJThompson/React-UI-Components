import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer(props) {
    const { banner, content} = props;

    return (
        <div className="card">
            <CardBanner imageSrc={banner.imageSrc} />
            <CardContent  title={content.title} body={content.body} link={content.link} url={content.url} />
        </div>
    );
}

export default CardContainer;