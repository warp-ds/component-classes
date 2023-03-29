import { button } from './index.js';

export const buttonSafelist = () => {
    const allClasses = Object.values(button).map(v => v.split(/\s/)).flat();
    return [...new Set(allClasses)];
}