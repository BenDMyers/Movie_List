import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import {Button, Label, Ref} from 'semantic-ui-react';
import MaterialButton from '@material-ui/core/Button';
import 'semantic-ui-css/semantic.min.css';

import './VoteButton.styles.css';
import {vote, unvote} from '../../actions/inflightActions';

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

const mapStateToProps = (state, ownProps) => {
    const {numVotes, userHasAlreadyVoted} = state.movies.all.filter(m => m._id === ownProps.movie)[0];
    return {
        numVotes,
        userHasAlreadyVoted,
        uuid: state.user
    };
};

export default connect(mapStateToProps, {vote, unvote})(VoteButton);