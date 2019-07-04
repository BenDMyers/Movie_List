import React from 'react';
import PropTypes from 'prop-types';
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

/**
 * Display of current search results, which collapses when search is not active
 */
const SearchResults = (props) => {
    let expandContents;
    if(props.loading) {
        expandContents = <div className="search-message">Loading...</div>;
    } else if(props.query && !props.results.length) {
        expandContents = <div className="search-message">No movies found</div>;
    } else {
        let results = props.query ? props.results : props.ghostResults;
        const resultCards = results.map((movie) => (
            <Grid item xs={8} sm={4} md={2} key={movie.id}>
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

SearchResults.propTypes = {
    /** Array of previous search results, used for a less choppy collapsing experience */
    ghostResults: PropTypes.arrayOf(PropTypes.object),
    /** Flag denoting whether to show a loading spinner */
    loading: PropTypes.bool.isRequired,
    /** Flag denoting whether there is a current search query */
    query: PropTypes.bool.isRequired,
    /** List of search results obtained with the current search query */
    results: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => {
    return {
        ghostResults: state.search.ghostResults,
        loading: state.search.loading === 'spin',
        query: state.search.query.length > 0,
        results: state.search.results
    };
}

export default connect(mapStateToProps)(SearchResults);