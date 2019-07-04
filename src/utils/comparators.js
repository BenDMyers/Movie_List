import {comparators, composeComparators} from 'generate-comparators';

// BASIC COMPARATORS

/** An object with `asc` and `desc` comparators for sorting a list by vote count */
export const byNumVotes = comparators(a => a.numVotes);
/** An object with `asc` and `desc` comparators for sorting a list by title, case-insensitively */
export const byTitle = comparators(a => a.title.toLowerCase());
/** An object with `asc` and `desc` comparators for sorting a list by watched date */
export const byWatchedDate = comparators(a => a.updatedDate);

// COMPOSED COMPARATORS
/** An object with `asc` and `desc` comparators for sorting a list first vote count, then by title */
export const byVotesThenTitle = composeComparators(byNumVotes.desc, byTitle.asc);

// MAINTAIN ORDER
/**
 * Creates a pair of compatators for reordering a list to conform to some previous order.
 * @param {Array} originalOrder - the array's prior order to match
 * @return {Object} a pair of `asc` and `desc` comparators to "sort" a list to the prior order
 */
export const byPreviousOrder = (originalOrder) => {
    const index = (element) => {
        return originalOrder.findIndex((originalElement) => {
            return originalElement._id === element._id;
        });
    };

    return comparators(element => index(element));
}