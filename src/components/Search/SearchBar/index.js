import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import {withStyles} from '@material-ui/core/styles';

import {updateSearchQuery} from '../../../actions/searchActions';

const styles = theme => ({
    cssUnderline: {
        '&:after': {
            borderBottomColor: 'black',
        },
    },
});

const SearchBar = (props) => {
    const {classes} = props;

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
                InputProps={{
                    classes: {
                        underline: classes.cssUnderline
                    },
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {dispatch, updateSearchQuery};
};

export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps)
)(SearchBar);