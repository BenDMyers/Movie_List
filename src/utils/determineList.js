/**
 * Determine which list an element is in using a validator function
 * @param {Object} object - an object whose properties are arrays
 * @param {function} validator - determines whether a list contains a match
 * @return key of the list that contains this element
 */
const determineList = (object, validator) => {
    for(let i = 0; i < Object.keys(object).length; i++) {
        const key = Object.keys(object)[i];
        if(key !== 'all' && key !== 'initialLoad' && object[key].find(validator)) {
            return key;
        }
    }
};

export default determineList;