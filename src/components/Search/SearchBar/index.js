import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import {withStyles} from '@material-ui/core/styles';

import './searchBar.styles.css';
import {updateSearchQuery} from '../../../actions/searchActions';

const styles = theme => ({
    cssUnderline: {
        '&': {
            borderBottom: '2px solid black'
        },
        '&:after': {
            borderBottom: '3px solid black'
        },
    },
});

/**
 * Searchbar used to find movies to recommend
 */
const SearchBar = (props) => {
    const {classes} = props;

    const handleSearch = (event) => {
        const {value} = event.target;
        props.updateSearchQuery(value, props.dispatch);
    };

    return (
        <form className="search-bar" noValidate autoComplete="off">
            <label htmlFor="movie-search">
                <span className="screenreader">Recommend Movies</span>
                <span aria-hidden="true" className="search-label">Recommend Movies</span>
            </label>
            <TextField
                className="search-bar-input"
                id="movie-search"
                margin="normal"
                onChange={handleSearch}
                InputProps={{
                    classes: {
                        underline: classes.cssUnderline
                    },
                    startAdornment: (
                        <InputAdornment position="start">
                            <Icon id="search-icon" className="fa fa-search" />
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    );
};

SearchBar.propTypes = {
    /** Style object provided by `withStyles` HOC */
    classes: PropTypes.object.isRequired,
    /** Redux action dispatcher function */
    dispatch: PropTypes.func.isRequired,
    /** Bound action creator that is a hook for mutating controlled search query state */
    updateSearchQuery: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {dispatch, updateSearchQuery};
};

export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps)
)(SearchBar);