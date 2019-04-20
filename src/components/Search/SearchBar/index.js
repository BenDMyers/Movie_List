import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';

import {clearSearch, updateSearchQuery} from '../../../actions/searchActions';

const SearchBar = (props) => {
    const handleSearch = (event) => {
        const {value} = event.target;
        value ? props.updateSearchQuery(value, props.dispatch) : props.clearSearch();
    };

    return (
        <form className="search-bar" noValidate autoComplete="off">
            <TextField
                id="movie-search"
                label="Search for a movie..."
                margin="normal"
                value={props.query}
                onChange={handleSearch}
            />
        </form>
    );
};

const mapStateToProps = (state) => {
    return {query: state.query}
};

const mapDispatchToProps = (dispatch) => {
    return {dispatch, clearSearch, updateSearchQuery};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);