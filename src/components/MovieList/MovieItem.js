import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './watchedMovieRibbon.styles.css';
import {tmdbKey} from '../../config/keys';
import VoteButton from './VoteButton';
import WatchedMovieRibbon from './WatchedMovieRibbon';

const cardActionsStyles = {
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: '16px'
};

/**
 * Generates an accessible vote count string for watched movies.
 * @param {number} numVotes - count of people who voted for this movie
 * @param {string} list - movie's current list, used for coloring
 * @return {React.Fragment} a sighted-friendly `<span>` and a screenreader-friendly `<span>` that present the number of votes received
 */
const getReceivedVotes = (numVotes, list) => {
    let voteOrVotes = numVotes === 1 ? 'vote' : 'votes';
    return (
        <>
            <span className="screenreader">Received {numVotes} {voteOrVotes}</span>
            <span aria-hidden="true" className="received-votes">Received <span className={`received-votes-${list}`}>{numVotes} {voteOrVotes}</span></span>
        </>
    );
}

/**
 * A card representing a single movie in a list
 */
const MovieItem = (props) => {
    const title = `${props.title} (${props.year})`;

    let votes;
    if(props.list === 'recommended') {
        votes = <VoteButton movie={props._id} />;
    } else {
        votes = getReceivedVotes(props.numVotes, props.list);
    }

    const posterProps = {
        className: 'card-movie-poster',
        component: 'img'
    };
    if(props.poster) {
        posterProps.src = `https://image.tmdb.org/t/p/original${props.poster}?api_key=${tmdbKey}`;
        posterProps.alt = `Poster for ${title}`;
    } else {
        posterProps.src = 'placeholderPoster.png';
        posterProps.alt = 'Placeholder for poster';
    }

    return (
        <div style={{position: 'relative'}}>
            <Card id={`movie-${props._id}`} className="movie-item-card">
                <div className="movie-poster-container">
                    <CardMedia {...posterProps} />
                    {props.list === 'watched' && <WatchedMovieRibbon date={props.updatedDate} describes={props._id} />}
                </div>
                <span className="screenreader">{title}</span>
                <CardContent aria-hidden="true" className="card-movie">
                    <div className="card-movie-title">
                        {props.title}
                    </div>
                    <div aria-hidden="true" className="card-movie-year">
                        {props.year}
                    </div>
                </CardContent>
                <CardActions style={cardActionsStyles}>
                    {votes}
                </CardActions>
            </Card>
        </div>
    );
};

MovieItem.propTypes = {
    /** Movie's unique identifier for the API */
    _id: PropTypes.string.isRequired,
    /** Name of the list this movie is in. */
    list: PropTypes.oneOf(['recommended', 'watched', 'alreadyWatched']).isRequired,
    /** The count of votes this movie has currently received */
    numVotes: PropTypes.number.isRequired,
    /**
     * Path to the movie's poster on TMDB.
     * If no poster path is provided, the card defaults to using a placeholder poster.
     */
    poster: PropTypes.string,
    /** Movie's name */
    title: PropTypes.string.isRequired,
    /**
     * Datestring denoting the last time this movie was updated in the database.
     * Used for displaying a movie's watched date.
     */
    updatedDate: PropTypes.string.isRequired,
    /** The year this movie was released */
    year: PropTypes.string.isRequired
};

export default MovieItem;