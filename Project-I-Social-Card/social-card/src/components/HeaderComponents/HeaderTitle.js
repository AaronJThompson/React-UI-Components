import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    const { title, userHandle, date } = props;

    return (
        <div className="title">
            {title}

            <span className="post-info">
                {`@${userHandle} • ${date}`}
            </span>
        </div>
    );
}

export default HeaderTitle;