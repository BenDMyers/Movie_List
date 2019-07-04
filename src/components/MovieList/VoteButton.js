import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Label, Ref} from 'semantic-ui-react';
import MaterialButton from '@material-ui/core/Button';
import 'semantic-ui-css/semantic.min.css';

import './VoteButton.styles.css';
import {vote, unvote} from '../../actions/inflightActions';

/**
 * Button that displays the current vote count and lets the user vote/unvote for a movie
 */
const VoteButton = (props) => {
    const handleClick = () => {
        props.userHasAlreadyVoted ? props.unvote(props.movie) : props.vote(props.movie);
    };

    // Height measurement using ref hooks courtesy of
    // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
        if (node !== null) {setHeight(node.getBoundingClientRect().height);}
    }, []);

    const buttonStyle = {
        height: `${height}px`
    };

    let buttonProps = {variant: 'contained', style: buttonStyle, onClick: handleClick};
    if(!props.userHasAlreadyVoted) {buttonProps.color = 'primary';};

    let callToAction = props.userHasAlreadyVoted ? 'Unvote' : 'Vote';

    return (
        <Button as='div' labelPosition="right" className="vote-button">
            <MaterialButton {...buttonProps}>
                {callToAction}
            </MaterialButton>
            <Ref innerRef={measuredRef}>
                <Label basic className="vote-count" pointing="left">
                    {props.numVotes}
                </Label>
            </Ref>
        </Button>
    );
};

VoteButton.propTypes = {
    /** The `_id` unique identifier for this button's movie */
    movie: PropTypes.string.isRequired,
    /** Movie's current vote count */
    numVotes: PropTypes.number.isRequired,
    /** Bound action creator for unvoting for this movie */
    unvote: PropTypes.func.isRequired,
    /** Flag determining whether the user has voted for this movie */
    userHasAlreadyVoted: PropTypes.bool.isRequired,
    /** User's unique identifier */
    uuid: PropTypes.string,
    /** Bound action creator for voting for this movie */
    vote: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    const {numVotes, userHasAlreadyVoted} = state.movies.all.filter(m => m._id === ownProps.movie)[0];
    return {
        numVotes,
        userHasAlreadyVoted,
        uuid: state.user
    };
};

export default connect(mapStateToProps, {vote, unvote})(VoteButton);