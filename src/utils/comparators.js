export const ASCENDING = 'ASCENDING';
export const DESCENDING = 'DESCENDING';

/**** COMPARATOR UTILS *****/
export const generateComparator = (getComparedValue, direction=ASCENDING) => {
    return (a, b, nextComparators) => {
        let A = getComparedValue(a);
        let B = getComparedValue(b);
        if(A === B) {
            // If there is another comparator to use, use that. Otherwise return 0.
            return (nextComparators && nextComparators.length) ?
                nextComparators[0](a, b, nextComparators.slice(0, 1))
                : 0;
        } else {
            let comparison = (A < B) ? -1 : 1;
            if(direction === DESCENDING) { comparison *= -1; }
            return comparison;
        }
    };
};

export const composeComparators = (initialComparator, ...rest) => {
    let comparators = [...rest];
    return (a, b) => initialComparator(a, b, comparators);
}

/**** BASIC COMPARATORS *****/
export const sortByVotesLength = generateComparator(a => a.votes.length, DESCENDING);
export const sortByTitle = generateComparator(a => a.title);

/**** COMPOSED COMPARATORS *****/
export const sortByVotesThenTitle = composeComparators(sortByVotesLength, sortByTitle);

/**** MAINTAIN ORDER *****/
export const maintainOrder = (originalOrder) => {
    const index = (element) => {
        return originalOrder.findIndex((originalElement) => {
            return originalElement._id === element._id;
        });
    };

    return generateComparator(element => index(element));
}