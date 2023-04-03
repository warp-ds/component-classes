import * as components from './index.js';

const filterInternalClasses = (str) => {
    const classes = str.split(/\s/);
    return classes.filter(c => c.startsWith("i-"));
}

export const classes = Object.values(components)
    .map((e) => {
        if (typeof e === 'object') return Object.values(e).map(filterInternalClasses);

        return filterInternalClasses(e)
    })
    .flat(Infinity);
