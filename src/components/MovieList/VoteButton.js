import React, {useCallback, useState} from 'react';
import {Button, Label, Ref} from 'semantic-ui-react';
import MaterialButton from '@material-ui/core/Button';
// import Odometer from 'react-odometerjs';

import 'semantic-ui-css/semantic.min.css';

const VoteButton = (props) => {
    const [votes, setVotes] = useState(0);

    // Height measurement using ref hooks courtesy of
    // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
        if (node !== null) {setHeight(node.getBoundingClientRect().height);}
    }, []);
    
    const style = {
        height: `${height}px`,
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0'
    };

    return (
        <Button as='div' labelPosition="right">
            <MaterialButton variant="contained" color="primary" style={style} onClick={() => setVotes(votes + 1)}>
                Vote
            </MaterialButton>
            <Ref innerRef={measuredRef}>
                <Label pointing="left">
                    {votes}
                </Label>
            </Ref>
        </Button>
    );
};

export default VoteButton;