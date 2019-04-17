import {expectType} from 'tsd';
import escapeStringRegexp = require('.');

expectType<string>(escapeStringRegexp('how much $ for a 🦄?'));
