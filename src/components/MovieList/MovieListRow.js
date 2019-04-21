import React from 'react';
import Grid from '@material-ui/core/Grid';

import MovieItem from './MovieItem';

const MovieListRow = (props) => {
    let movieItems = props.contents.map(movie => (
        <Grid item xs={3} key={movie.id}>
            <MovieItem {...movie} />
        </Grid>
    ));
    
    return (
        <>
            {movieItems}
        </>
    );
};

export default MovieListRow;