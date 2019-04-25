import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import {Button, Label, Ref} from 'semantic-ui-react';
import MaterialButton from '@material-ui/core/Button';
import 'semantic-ui-css/semantic.min.css';

import './VoteButton.styles.css';
import {vote, unvote} from '../../actions/inflightActions';

const VoteButton = (props) => {
    const handleClick = () => {
        if(props.userHasAlreadyVoted) {
            props.unvote(props.movie, props.dispatch, props.uuid);
        } else {
            props.vote(props.movie, props.dispatch, props.uuid);
        }
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
    const {votes} = state.movies.all.filter(m => m._id === ownProps.movie)[0];
    return {
        numVotes: `${votes.length}`,
        userHasAlreadyVoted: votes.includes(state.user),
        uuid: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {dispatch, vote, unvote};
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);