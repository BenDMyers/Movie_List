import React from 'react';
import PropTypes from 'prop-types';

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

/**
 * An accessible bar for displaying a heading and subtitle.
 */
const HeadingBar = (props) => {
    let style = {...props.style};
    props.backgroundColor && (style.backgroundColor = props.backgroundColor);
    props.textColor && (style.color = props.textColor);
    return (
        <div id={props.id} tabIndex="-1">
            <div aria-hidden="true" className="heading-bar" style={style}>
                {wrap(props.as, true)(props.children)}
                {wrap('subtitle', true)(props.subtitle)}
            </div>
            <div className="screenreader">
                {wrap(props.as, false)(props.children)}
                {wrap('subtitle', false)(props.subtitle)}
            </div>
        </div>
    );
};

HeadingBar.propTypes = {
    /** Heading level */
    as: PropTypes.oneOf(['h1', 'h2']),
    /** Bar color */
    backgroundColor: PropTypes.string,
    /** Heading contents (ignoring subtitle) */
    children: PropTypes.node,
    /** ID for anchor tags */
    id: PropTypes.string.isRequired,
    /**
     * Style object to apply to the heading bar.
     * Is not applied to the screenreader version of the heading bar.
     */
    style: PropTypes.object,
    /** Subtitle to display with the heading */
    subtitle: PropTypes.string,
    /** Color of heading text */
    textColor: PropTypes.string
};

export default HeadingBar;