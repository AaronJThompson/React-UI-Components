import React from 'react';
import './Button.css';

function ActionButton(props) {
    const { text } = props;

    return (
        <button className="action-button">{text}</button>
    );
}

export default ActionButton;