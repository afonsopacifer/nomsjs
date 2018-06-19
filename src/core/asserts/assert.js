import equal from './equal/equal';
import isFalse from './equal/isFalse';
import isTrue from './equal/isTrue';
import arrayEqual from './equal/arrayEqual';
import objectEqual from './equal/objectEqual';

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
		arrayEqual,
		objectEqual,
	}
}

export default assert();