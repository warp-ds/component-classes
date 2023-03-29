
import { button } from './index.js';

export const buttonSafelist = [...new Set(Object.values(button).map(v => v.split(/\s/)).flat())];
