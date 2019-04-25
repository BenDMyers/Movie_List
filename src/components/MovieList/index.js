import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import chunk from '../../utils/chunk';
import MovieListRow from './MovieListRow';

const style = {
    marginLeft: '10%',
    marginRight: '10%',
    width: '100%'
}

const MovieList = (props) => {
    // Loading spinner
    if(props.initialLoad) {
        return <div className="movie-list-spinner"><CircularProgress thickness={3} /></div>
    }

    // Create rows
    const rowContents = chunk(props.movies, 5);
    const rows = rowContents.map((row, index) => (
        <Grid key={index} container item xs={12} spacing={24}>
            <MovieListRow contents={row} />
        </Grid>
    ));

    return (
        <Grid container spacing={8} style={style}>
            {rows}
        </Grid>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.movies[ownProps.list],
        initialLoad: state.movies.initialLoad
    };
};

export default connect(mapStateToProps)(MovieList);