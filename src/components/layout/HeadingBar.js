import React from 'react';

import './HeadingBar.styles.css';

const wrap = (level, withClasses) => {
    const classProp = {};
    withClasses && (classProp.className = `heading-bar-contents heading-bar-${level}`);

    const wrappers = {
        h1: c => <h1 {...classProp}>{c}</h1>,
        h2: c => <h2 {...classProp}>{c}</h2>,
        subtitle: c => <p {...classProp}>{c}</p>
    };

    return wrappers[level];
};

const HeadingBar = (props) => {
    let style = {...props.style};
    props.backgroundColor && (style.backgroundColor = props.backgroundColor);
    props.textColor && (style.color = props.textColor);
    return (
        <>
            <div aria-hidden="true" className="heading-bar" style={style}>
                {wrap(props.as, true)(props.children)}
                {wrap('subtitle', true)(props.subtitle)}
            </div>
            <div className="screenreader">
                {wrap(props.as, false)(props.children)}
                {wrap('subtitle', false)(props.subtitle)}
            </div>
        </>
    );
};

export default HeadingBar;