import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getMovies, TRIGGER_SORT} from './actions/moviesActions';
import {setUser} from './actions/userActions';
import HeadingBar from './components/layout/HeadingBar';
import MovieList from './components/MovieList';
import Search from './components/Search';

class App extends Component {
    componentDidMount() {
        this.props.getMovies(TRIGGER_SORT);
        this.props.setUser();
    }

    render() {
        return (
            <div>
                <HeadingBar as="h1">What Should Ben Watch Next?</HeadingBar>
                <Search />
                <div>
                    <HeadingBar as="h2" backgroundColor="#3f51b5" style={{marginBottom: '20px'}}>
                        Vote on movies
                    </HeadingBar>
                    <MovieList list="recommended" />
                </div>
                <div>
                    <HeadingBar as="h2" backgroundColor="green" style={{marginTop: '10px', marginBottom: '20px'}} subtitle="Thank you for your recommendations">
                        Ben has now seen...
                    </HeadingBar>
                    <MovieList list="watched" />
                </div>
                <div>
                    <HeadingBar as="h2" backgroundColor="darkviolet" style={{marginTop: '10px', marginBottom: '20px'}} subtitle="But thank you anyways!">
                        Ben has already watched...
                    </HeadingBar>
                    <MovieList list="alreadyWatched" />
                </div>
            </div>
        );
    }
}

export default connect(null, {getMovies, setUser})(App);