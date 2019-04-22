import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';

import SearchResultItem from './SearchResultItem';

const SearchResults = (props) => {
    if(props.loading) {
        return <p>Loading...</p>;
    } else if(props.query && !props.results.length) {
        return <p>No movies found</p>;
    }

    const results = props.results.map((movie) => (
        <Grid item xs={2} key={movie.id}>
            <SearchResultItem {...movie} />
        </Grid>
    ));

    return (
        <Grid container item xs={12} spacing={24}>
            {results}
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.search.loading === 'spin',
        query: state.search.query.length > 0,
        results: state.search.results
    };
}

export default connect(mapStateToProps)(SearchResults);