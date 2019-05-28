import React from 'react';
import './Card.css';

function CardContent(props) {
    const { title, body, link, url } = props;

    return (
        <div className="card-content">
            <h3>{title}</h3>
            <p>{body}</p>
            <a href={url}>{link}</a>
        </div>
    );
}

export default CardContent;