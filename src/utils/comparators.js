import {comparators, composeComparators} from 'generate-comparators';

/**** BASIC COMPARATORS *****/
export const byNumVotes = comparators(a => a.numVotes);
export const byTitle = comparators(a => a.title.toLowerCase());
export const byWatchedDate = comparators(a => a.updatedDate);

/**** COMPOSED COMPARATORS *****/
export const byVotesThenTitle = composeComparators(byNumVotes.desc, byTitle.asc);

/**** MAINTAIN ORDER *****/
export const byPreviousOrder = (originalOrder) => {
    const index = (element) => {
        return originalOrder.findIndex((originalElement) => {
            return originalElement._id === element._id;
        });
    };

    return comparators(element => index(element));
}