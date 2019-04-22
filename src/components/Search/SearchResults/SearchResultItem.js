import React from 'react';
import {connect} from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {tmdbKey} from '../../../config/keys';
import {recommend} from '../../../actions/moviesActions';

const SearchResultItem = (props) => {
    const handleClick = () => {props.recommend(props.id, props.dispatch);};
    const title = `${props.title} (${props.release_date.split('-')[0]})`;
    const poster = `https://image.tmdb.org/t/p/original${props.poster_path}?api_key=${tmdbKey}`;

    return (
        <ButtonBase onClick={handleClick}>
            <Card>
                <CardMedia component="img" src={poster} title={`Poster for ${title})`} />
                <CardContent>
                    {title}
                </CardContent>
            </Card>
        </ButtonBase>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {dispatch, recommend};
}

export default connect(null, mapDispatchToProps)(SearchResultItem);