import React from 'react';
import {connect} from 'react-redux';

const SearchResults = (props) => {
    if(props.loading) {
        return <p>Loading...</p>;
    } else if(props.query.length && !props.results.length) {
        return <p>No movies found</p>;
    }

    const results = props.results.map((movie) => <li key={movie.id}>{movie.title}</li>);

    return (
        <ul className="search-results">
            {results}
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.search.loading === 'spin',
        query: state.search.query,
        results: state.search.results
    };
}

export default connect(mapStateToProps)(SearchResults);