import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {tmdbKey} from '../../config/keys';

const MovieItem = (props) => {
    const title = `${props.title} (${props.year})`;
    const poster = `https://image.tmdb.org/t/p/original${props.poster}?api_key=${tmdbKey}`;
    return (
        <Card>
            <CardMedia component="img" src={poster} title={`Poster for ${title})`} />
            <CardContent>
                {title}
            </CardContent>
        </Card>
    );
};

export default MovieItem;