/**
 * Assertion between two objects.
 * @module core/asserts/equal/objectEqual
 * 
 * @param {object} expected - The expected object for assertion.
 * @param {object} result - The result object for assertion.
 *
 * @returns {Boolean} Assert results.
 */

const objectEqual = (expectedObj, resultObj) => {

	const expectedKeys = Object.keys(expectedObj);
	const resultKeys = Object.keys(resultObj);

	if(expectedKeys.length !== resultKeys.length) {
		return false;
	}

	for (let i = 0; i < expectedKeys.length; i++) {

		const isSameKey = expectedKeys[i] !== resultKeys[i];
		const isSameValue = expectedObj[expectedKeys[i]] !== resultObj[resultKeys[i]];

		if(isSameKey !== isSameValue) {
			return false;
		}

	}

	return true

}

export default objectEqual;