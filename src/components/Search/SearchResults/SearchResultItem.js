import React from 'react';
import {connect} from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {tmdbKey} from '../../../config/keys';
import determineList from '../../../utils/determineList';
import {recommend} from '../../../actions/inflightActions';
import Frame from './SearchResultItemFrame';

const SearchResultItem = (props) => {
    const handleClick = () => {props.recommend(props.id, props.dispatch);};
    const title = `${props.title} (${props.release_date.split('-')[0]})`;

    const posterProps = {
        className: 'card-movie-poster',
        component: 'img'
    };
    if(props.poster_path) {
        posterProps.src = `https://image.tmdb.org/t/p/original${props.poster_path}?api_key=${tmdbKey}`;
        posterProps.alt = `Poster for ${title}`;
    } else {
        posterProps.src = 'placeholderPoster.png';
        posterProps.alt = 'Placeholder for poster';
    }

    let movieItem = (
        <Card style={{marginBottom: '20px'}}>
            <CardMedia {...posterProps} />
            <span className="screenreader">{title}</span>
            <CardContent aria-hidden="true" className="card-movie">
                <div className="card-movie-title">
                    {props.title}
                </div>
                <div aria-hidden="true" className="card-movie-year">
                    {props.release_date.split('-')[0]}
                </div>
            </CardContent>
        </Card>
    );

    if(!props.currentList) {
        movieItem = (
            <ButtonBase onClick={handleClick}>
                {movieItem}
            </ButtonBase>
        );
    } /*else {
        movieItem = (
            <Frame currentList={props.currentList}>
                {movieItem}
            </Frame>
        );
    }*/

    return movieItem;
};


const mapStateToProps = (state, ownProps) => {
    const lists = {...state.movies, inflight: state.inflight.movies};
    return {
        currentList: determineList(lists, (mov) => mov.id == ownProps.id)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch, recommend};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultItem);