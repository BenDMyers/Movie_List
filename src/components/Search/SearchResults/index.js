import React, {useState} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Expand from 'react-expand-animated';

import SearchResultItem from './SearchResultItem';
import './SearchResults.styles.css';

const expandStyles = {
    open: {
        backgroundColor: '#777',
    }
};

const rowStyles = {
    marginLeft: '10%',
    marginRight: '10%',
    width: '100%'
}

const SearchResults = (props) => {
    let expandContents;
    if(props.loading) {
        expandContents = <div className="search-message">Loading...</div>;
    } else if(props.query && !props.results.length) {
        expandContents = <div className="search-message">No movies found</div>;
    } else {
        let results = props.query ? props.results : props.ghostResults;
        console.log(props.query, results);
        const resultCards = results.map((movie) => (
            <Grid item xs={2} key={movie.id}>
                <SearchResultItem {...movie} />
            </Grid>
        ));
        expandContents = (
            <Grid container item xs={12} spacing={24} style={rowStyles}>
                {resultCards}
            </Grid>
        );
    }

    return (
        <Expand open={props.query} transitions={['height']} className="search-contents" style={expandStyles}>
            {expandContents}
        </Expand>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.search.loading === 'spin',
        query: state.search.query.length > 0,
        results: state.search.results,
        ghostResults: state.search.ghostResults
    };
}

export default connect(mapStateToProps)(SearchResults);