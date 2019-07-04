import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import MovieItem from './MovieItem';

/**
 * A row of `MovieItem`s, meant to go inside a `MovieList` container
 */
const MovieListRow = (props) => {
    let movieItems = props.contents.map(movie => (
        <Grid item xs={8} sm={4} md={2} key={movie.id}>
            <MovieItem {...movie} />
        </Grid>
    ));

    return (
        <>
            {movieItems}
        </>
    );
};

MovieListRow.propTypes = {
    /** The array of movie of objects that fit in this row. */
    contents: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieListRow;