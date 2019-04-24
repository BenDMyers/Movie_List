import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';

import chunk from '../../utils/chunk';
import MovieListRow from './MovieListRow';

const MovieList = (props) => {
    const rowContents = chunk(props.movies, 5);
    const rows = rowContents.map((row, index) => (
        <Grid key={index} container item xs={12} spacing={24}>
            <MovieListRow contents={row} />
        </Grid>
    ));
    return (
        <Grid container spacing={8}>
            {rows}
        </Grid>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        movies: ownProps.comparator ?
            [...state.movies[ownProps.list]].sort(ownProps.comparator)
            : state.movies[ownProps.list]
    };
};

export default connect(mapStateToProps)(MovieList);