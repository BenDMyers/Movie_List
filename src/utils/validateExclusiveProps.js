/**
 * Generates a proptypes validator function for mutually exclusive props.
 * @param {Array} conflictingProps - array of strings, where each string is a name of a prop that is mutually exclusive to the current prop
 * @param {boolean} currentPropExpectedType - expected type of the current prop
 * @return {function} a proptype validation function
 */
function exclusivePropsValidator(conflictingProps=[], currentPropExpectedType='boolean') {
    // Validate required arguments
    if(!conflictingProps.some && conflictingProps.some(prop => (typeof prop !== 'string'))) {
        throw new Error('Expected an array conflicting props of type `string`.');
    } else if(currentPropExpectedType && typeof currentPropExpectedType !== 'string') {
        throw new Error('`currentPropExpectedType` must be of type `string`.');
    }

    return function validateExclusiveProps(props, propName, componentName) {
        let conflictingPropsExist = conflictingProps.filter(conflictingProp => !!props[conflictingProp]);

        if(props[propName] && conflictingPropsExist.length) {
            return new Error(`Prop \`${propName}\` supplied to \`${componentName}\` may not be supplied with props [${conflictingPropsExist}]. Validation failed.`);
        } else if(props[propName] !== undefined && typeof props[propName] !== currentPropExpectedType) {
            return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`. Expected \`${currentPropExpectedType}\`.`);
        }
    };
};

export default exclusivePropsValidator;