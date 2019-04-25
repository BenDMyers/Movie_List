import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';

import {updateSearchQuery} from '../../../actions/searchActions';


const SearchBar = (props) => {
    const handleSearch = (event) => {
        const {value} = event.target;
        props.updateSearchQuery(value, props.dispatch);
    };

    return (
        <form className="search-bar" noValidate autoComplete="off">
            <TextField
                className="search-bar-input"
                id="movie-search"
                label="Search for a movie..."
                margin="normal"
                onChange={handleSearch}
            />
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {dispatch, updateSearchQuery};
};

export default connect(null, mapDispatchToProps)(SearchBar);