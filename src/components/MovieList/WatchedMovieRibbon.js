import React from 'react';
import moment from 'moment';
import {Label} from 'semantic-ui-react';

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

export default WatchedMovieRibbon;