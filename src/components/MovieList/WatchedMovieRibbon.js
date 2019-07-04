import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Label} from 'semantic-ui-react';

/**
 * Ribbon for a watched movie's card that displays the watched date accessibly
 */
const WatchedMovieRibbon = (props) => {
    let watchedDate = moment(new Date(props.date));
    let screenreaderDate = watchedDate.format('MMMM D, YYYY');
    let formattedDate = watchedDate.format('MMM D, [\']YY');

    return (
        <Label className="watched-movie-ribbon" htmlFor={`movie-${props.describes}`} color="green" ribbon="right">
            <span className="screenreader">Watched on {screenreaderDate}</span>
            <span aria-hidden="true">{formattedDate}</span>
        </Label>
    );
};

WatchedMovieRibbon.propTypes = {
    /** Datestring denoting when the movie was watched */
    date: PropTypes.string.isRequired,
    /** Movie ID, used to link this ribbon as a label to the rest of the card for accessibility */
    describes: PropTypes.string.isRequired
};

export default WatchedMovieRibbon;