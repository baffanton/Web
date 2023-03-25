import { defaultTo } from 'ramda';
import { get, set } from 'lodash';

import { createSelector } from 'reselect';

export const state = {};

/**
 * Combine selectors from an object config format.
 * Example:
 * combine({
 *    game: 'game'
 * }) => (state) => ({ game })
 *
 * @param {Object<String,String>} selectorsObject - key => {selector.model.location}.
 * @param postProcessingFunction
 * @returns {Function} Selector.
 */
function combine(
    selectorsObject: { [s: string]: any } | ArrayLike<any>,
    postProcessingFunction: Function | undefined = undefined
) {
    const selectorKeys = Object.keys(selectorsObject);
    const selectorModels = Object.values(selectorsObject);

    // Get all the selectors which the user asked for
    const selectorsArray = selectorModels
        // prettier-no-wrap
        .map(keyOrSelector => {
            // We were simply passed a selector
            if (keyOrSelector instanceof Function) {
                return keyOrSelector;
            }

            const selector: any = get(state, keyOrSelector, false);

            // We want to use the __default selector
            if (selector instanceof Object) {
                if (selector.__default instanceof Function) return selector.__default;
            }

            // The selector is not a function
            if (!(selector instanceof Function)) {
                console.warn('No selector with name', keyOrSelector);
                return defaultTo(undefined);
            }

            return selector;
        });

    // Return a new selector, which when called resolves to an object with the requested values
    return createSelector(
        // @ts-ignore
        ...selectorsArray,

        // called when any selector changes
        // @ts-ignore
        (...values) => {
            const toReturn = {};
            selectorKeys.forEach((key, index) => set(toReturn, key, values[index]));

            // We asked to perform some custom post processing
            if (postProcessingFunction instanceof Function) {
                return postProcessingFunction(toReturn);
            }

            return toReturn;
        }
    );
}

export default { ...state, combine };
