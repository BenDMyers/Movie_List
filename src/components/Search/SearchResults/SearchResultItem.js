import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {tmdbKey} from '../../../config/keys';

const SearchResultItem = (props) => {
    const title = `${props.title} (${props.release_date.split('-')[0]})`;
    const poster = `https://image.tmdb.org/t/p/original${props.poster_path}?api_key=${tmdbKey}`;
    return (
        <ButtonBase>
            <Card>
                <CardMedia component="img" src={poster} title={`Poster for ${title})`} />
                <CardContent>
                    {title}
                </CardContent>
            </Card>
        </ButtonBase>
    );
};

export default SearchResultItem;