import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    const { text } = props;

    return (
        <div className="display">
            <span>
                {text}
            </span>
        </div>
    );
}
export default CalculatorDisplay;