import prop from 'lodash/fp/prop';
import { defaultTo } from 'ramda'

import { createSelector } from 'reselect';

/**
 * Creates a new selector which takes identity => identity[propName].
 * @param {string} propName - lodash.model.selector.
 * @param {Function} processingFunction - To be called when the prop changes.
 * @returns {Function} New selector.
 */
function createStateSelector(propName: string, processingFunction = defaultTo(false)) {
    return createSelector(
        prop(propName),
        processingFunction
    );
}

export { createStateSelector };