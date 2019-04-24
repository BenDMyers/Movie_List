// Determine which list an element is in using a validator function
const determineList = (object, validator) => {
    for(let i = 0; i < Object.keys(object).length; i++) {
        const key = Object.keys(object)[i];
        if(key !== 'all' && object[key].find(validator)) {
            return key;
        }
    }
};

export default determineList;