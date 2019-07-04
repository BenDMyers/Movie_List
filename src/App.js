import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getMovies, TRIGGER_SORT} from './actions/moviesActions';
import {setUser} from './actions/userActions';
import DarkModeToggle from './components/layout/DarkModeToggle';
import HeadingBar from './components/layout/HeadingBar';
import MovieList from './components/MovieList';
import Search from './components/Search';
import {byTitle, byWatchedDate} from './utils/comparators';

/**
 * The root component for the entire movie list.
 */
class App extends Component {
    componentDidMount() {
        this.props.setUser();
        this.props.getMovies(TRIGGER_SORT);
    }

    render() {
        return (
            <div>
                <DarkModeToggle />
                <HeadingBar as="h1">What Should Ben Watch Next?</HeadingBar>
                <Search />
                <div>
                    <HeadingBar as="h2" backgroundColor="#3f51b5" style={{marginBottom: '20px'}}>
                        Vote on movies
                    </HeadingBar>
                    <MovieList list="recommended" />
                </div>
                <div>
                    <HeadingBar as="h2" backgroundColor="#006200" style={{marginTop: '10px', marginBottom: '20px'}} subtitle="Thank you for your recommendations">
                        Ben has now seen...
                    </HeadingBar>
                    <MovieList list="watched" comparator={byWatchedDate.desc} />
                </div>
                <div>
                    <HeadingBar as="h2" backgroundColor="#9400d3" style={{marginTop: '10px', marginBottom: '20px'}} subtitle="But thank you anyways!">
                        Ben has already watched...
                    </HeadingBar>
                    <MovieList list="alreadyWatched" comparator={byTitle.asc} />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    /** Bound action creator for fetching the entire movie list */
    getMovies: PropTypes.func.isRequired,
    /** Bound action creator for setting the user's authentication */
    setUser: PropTypes.func.isRequired
};

export default connect(null, {getMovies, setUser})(App);