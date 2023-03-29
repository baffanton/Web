import prop from 'lodash/fp/prop';
import { defaultTo } from 'ramda'
import { createSelector } from 'reselect';

function createStateSelector(propName: string, processingFunction = defaultTo(false)) {
    return createSelector(
        prop(propName),
        processingFunction
    );
}

export { createStateSelector };