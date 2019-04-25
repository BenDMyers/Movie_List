import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {tmdbKey} from '../../config/keys';
import VoteButton from './VoteButton';

const cardActionsStyles = {
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: '16px'
};

const MovieItem = (props) => {
    const title = `${props.title} (${props.year})`;
    const poster = `https://image.tmdb.org/t/p/original${props.poster}?api_key=${tmdbKey}`;
    return (
        <Card style={{backgroundColor: '#fbfbfb', marginBottom: '20px'}}>
            <CardMedia className="card-movie-poster" component="img" src={poster} alt={`Poster for ${title}`} />
            <span className="screenreader">{title}</span>
            <CardContent aria-hidden="true" className="card-movie">
                <div className="card-movie-title">
                    {props.title}
                </div>
                <div aria-hidden="true" className="card-movie-year">
                    {props.year}
                </div>
            </CardContent>
            <CardActions style={cardActionsStyles}>
                <VoteButton movie={props._id} />
            </CardActions>
        </Card>
    );
};

export default MovieItem;