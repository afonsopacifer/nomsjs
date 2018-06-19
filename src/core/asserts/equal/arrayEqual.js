/**
 * Assertion between two arrays.
 * @module core/asserts/equal/arrayEqual
 * 
 * @param {array} expected - The expected array for assertion.
 * @param {array} result - The result array for assertion.
 *
 * @returns {Boolean} Assert results.
 */

const arrayEqual = (expected, result) => {

	if(expected.length !== result.length) {
		return false;
	}

	for (let i = 0; i < expected.length; i++) {

		if(expected[i] !== result[i]) {
			return false;
		}

	}

	return true

}

export default arrayEqual;