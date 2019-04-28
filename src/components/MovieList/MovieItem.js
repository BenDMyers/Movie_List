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

const getReceivedVotes = (numVotes, list) => {
    let voteOrVotes = numVotes === 1 ? 'vote' : 'votes';
    return (
        <>
            <span className="screenreader">Received {numVotes} {voteOrVotes}</span>
            <span aria-hidden="true" className="received-votes">Received <span className={`received-votes-${list}`}>{numVotes} {voteOrVotes}</span></span>
        </>
    );
}

const MovieItem = (props) => {
    const title = `${props.title} (${props.year})`;
    const poster = `https://image.tmdb.org/t/p/original${props.poster}?api_key=${tmdbKey}`;

    let votes;
    if(props.list === 'recommended') {
        votes = <VoteButton movie={props._id} />;
    } else {
        votes = getReceivedVotes(props.numVotes, props.list);
    }

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
                {votes}
            </CardActions>
        </Card>
    );
};

export default MovieItem;