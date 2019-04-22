import React from 'react';

import './searchResultItemFrame.styles.css';

const SearchResultItemFrame = (props) => {
    const frameColor = (props.currentList === 'inflight') ? 'yellow' : '#19975d';

    const style = {
        boxShadow: `0px 0px 0px 10px ${frameColor}`,
        borderRadius: '0',
        backgroundColor: frameColor
    }

    return (
        <div className="already-recommended" style={style}>
            {props.children}
        </div>
    );
};

export default SearchResultItemFrame;