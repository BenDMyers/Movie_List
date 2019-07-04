import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import withWidth from '@material-ui/core/withWidth';

import chunk from '../../utils/chunk';
import {getChunkSize, getStyle} from '../../utils/movieListSizingUtils';
import MovieListRow from './MovieListRow';

/**
 * A responsive grid of `MovieItem`s.
 */
const MovieList = (props) => {
    // Loading spinner
    if(props.initialLoad) {
        return <div className="movie-list-spinner"><CircularProgress thickness={3} /></div>
    }

    // Create rows
    const rowContents = chunk(props.movies, getChunkSize(props.width));
    const rows = rowContents.map((row, index) => (
        <Grid key={index} container item xs={12} spacing={24}>
            <MovieListRow contents={row} />
        </Grid>
    ));

    return (
        <Grid container spacing={8} style={getStyle(props.width)}>
            {rows}
        </Grid>
    );
};

MovieList.propTypes = {
    /** Optional comparator function used to sort the movies in this list */
    comparator: PropTypes.func,
    /** Flag for determining whether to display a loading spinner. Sourced from Redux store. */
    initialLoad: PropTypes.bool,
    /** List name, used to pull only relevant movies from the Redux store */
    list: PropTypes.string.isRequired,
    /** The list of movies to render, as pulled from the Redux store */
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** Material UI breakpoint provided by `withWidth` HOC */
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
};

const mapStateToProps = (state, ownProps) => {
    let movies = state.movies[ownProps.list];
    if(ownProps.comparator) {
        movies = [...movies];
        movies.sort(ownProps.comparator);
    }

    return {
        movies,
        initialLoad: state.movies.initialLoad
    };
};

export default compose(
    withWidth(),
    connect(mapStateToProps)
)(MovieList);