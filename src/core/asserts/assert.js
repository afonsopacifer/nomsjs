import equal from './equal/equal';
import isFalse from './equal/isFalse';
import isTrue from './equal/isTrue';

/**
 * Assertions.
 * @module core/asserts/assert
 *
 * @returns {object} All assert methods.
 */

const assert = () => {
	return {
		equal,
		isFalse,
		isTrue,
	}
}

export default assert();