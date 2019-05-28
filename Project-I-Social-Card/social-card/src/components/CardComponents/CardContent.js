import React from 'react';
import './Card.css';

function CardContent(props) {
    const { title, body, link } = props;

    return (
        <div className="card-content">
            <h3>{title}</h3>
            <p>{body}</p>
            <span>{link}</span>
        </div>
    );
}

export default CardContent;