import React from 'react';
import {connect} from 'react-redux';

const MovieList = (props) => {
    const movies = props.movies.map(movie => <li key={movie.id}>{movie.title}</li>)
    return (
        <ul>
            {movies}
        </ul>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.movies[ownProps.list]
    };
};

export default connect(mapStateToProps)(MovieList);