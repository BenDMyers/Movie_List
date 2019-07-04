import React from 'react';
import PropTypes from 'prop-types';
import {Label} from 'semantic-ui-react';

const RIBBON_OPTIONS = {
    'recommended': {
        color: 'blue',
        text: 'Recommended'
    },
    'watched': {
        color: 'green',
        text: 'Watched'
    },
    'alreadyWatched': {
        color: 'purple',
        text: 'Already Watched'
    },
    'limbo': {
        color: 'red',
        text: 'Limbo'
    }
};

/**
 * Ribbon displayed on a card for a search result that's already in a list
 */
const SearchResultItemRibbon = (props) => {
    const {color, text} = RIBBON_OPTIONS[props.list];

    return (
        <Label className="search-result-ribbon" color={color} ribbon="right">
            {text}
        </Label>
    );
};

SearchResultItemRibbon.propTypes = {
    /** Movie's current list */
    list: PropTypes.oneOf(['recommended', 'watched', 'alreadyWatched', 'limbo']).isRequired
};

export default SearchResultItemRibbon;