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