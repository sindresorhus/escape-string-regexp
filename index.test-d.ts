import {expectType} from 'tsd';
import escapeStringRegexp from '.';

expectType<string>(escapeStringRegexp('how much $ for a 🦄?'));
