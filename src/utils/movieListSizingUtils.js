/**
 * Determines `MovieList`'s style object based on the current Material UI breakpoint of the page.
 * @param {string} width - Material UI page breakpoint
 * @return {object} style object to apply to `MovieList`
 */
const getStyle = (width) => {
    switch(width) {
        case 'xs':
        case 'sm':
            return {margin: '0 auto', textAlign: 'center'};
        case 'md':
        case 'lg':
        case 'xl':
            return {marginLeft: '10%', marginRight: '10%', width: '100%'};
        default:
            return {width: '100%'};
    }
};

/**
 * Determines how many movies can fit on a row given the page's current breakpoint.
 * @param {string} width - Material UI page breakpoint
 * @return {number} how many movies per row
 */
const getChunkSize = (width) => {
    switch(width) {
        case 'xs':
            return 1;
        case 'sm':
            return 3;
        case 'md':
        case 'lg':
        case 'xl':
            return 5;
        default:
            return 1;
    }
}

export {getChunkSize, getStyle};