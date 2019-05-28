import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

function HeaderContent(props) {
    const { content, postInfo} = props;

    const {  title, userHandle, date } = postInfo;

    return (
        <div className="content">
            {content}
            <HeaderTitle title={title} userHandle={userHandle} date={date} />
        </div>
    );
}

export default HeaderContent;