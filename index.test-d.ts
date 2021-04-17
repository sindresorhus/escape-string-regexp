import {expectType} from 'tsd';
import escapeStringRegexp from './index.js';

expectType<string>(escapeStringRegexp('how much $ for a 🦄?'));
