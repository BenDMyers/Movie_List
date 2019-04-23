import React from 'react';
import Badge from '@material-ui/core/Badge';
// import Check from '@material-ui/icons/Check';

import './searchResultItemFrame.styles.css';

const badgeOverrides = {
    fontSize: '2em'
}

const SearchResultItemFrame = (props) => {
    const frameColor = (props.currentList === 'inflight') ? 'yellow' : '#19975d';

    // const style = {
    //     boxShadow: `0px 0px 0px 10px ${frameColor}`,
    //     borderRadius: '0',
    //     backgroundColor: frameColor
    // }
    //
    // return (
    //     <div className="already-recommended" style={style}>
    //         {props.children}
    //     </div>
    // );

    return (
        <Badge color="primary" badge={badgeOverrides} badgeContent={4}>
            {props.children}
        </Badge>
    );
};

export default SearchResultItemFrame;