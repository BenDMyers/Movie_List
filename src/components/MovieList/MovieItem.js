import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {tmdbKey} from '../../config/keys';
import VoteButton from './VoteButton';

const MovieItem = (props) => {
    const title = `${props.title} (${props.year})`;
    const poster = `https://image.tmdb.org/t/p/original${props.poster}?api_key=${tmdbKey}`;
    return (
        <Card>
            <CardMedia component="img" src={poster} alt={`Poster for ${title}`} />
            <CardContent>
                {title}
                <VoteButton movie={props._id} />
            </CardContent>
        </Card>
    );
};

export default MovieItem;