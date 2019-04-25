import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getMovies, TRIGGER_SORT} from './actions/moviesActions';
import {setUser} from './actions/userActions';
import MovieList from './components/MovieList';
import Search from './components/Search';
import {sortByVotesThenTitle} from './utils/comparators';

class App extends Component {
    componentDidMount() {
        this.props.getMovies(TRIGGER_SORT);
        this.props.setUser();
    }

    render() {
        return (
            <div>
                <Search />
                <div>
                    <h2>Vote on Movies for Ben to Watch Next</h2>
                    <MovieList list="recommended" comparator={sortByVotesThenTitle} />
                </div>
                <hr />
                <div>
                    <h2>Ben Has Now Watched...</h2>
                    <MovieList list="watched" />
                </div>
                <hr />
                <div>
                    <h2>Ben Has Already Watched...</h2>
                    <MovieList list="alreadyWatched" />
                </div>
            </div>
        );
    }
}

export default connect(null, {getMovies, setUser})(App);