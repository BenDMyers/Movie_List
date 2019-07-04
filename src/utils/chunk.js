/**
 * Splits an array into arrays of a fixed size.
 * @param {Array} arr - array to split up into chunks
 * @param {number} chunkSize - length to use for smaller arrays
 */
const chunk = (arr, chunkSize) => {
    return arr.reduce((chunks, item) => {
        if(chunks[chunks.length - 1].length === chunkSize) {
            return [...chunks, [item]];
        } else {
            chunks[chunks.length - 1].push(item);
            return chunks;
        }
    }, [[]]);
};

export default chunk;