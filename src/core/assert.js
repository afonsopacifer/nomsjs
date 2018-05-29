/**
 * Assertion between two values.
 * @module core/assert
 * 
 * @param result - The result value for assertion.
 * @param expected - The expected value for assertion.
 *
 * @returns {Boolean} Assert results.
 */

const assert = (result, expected) => {
	return result === expected ? true : false;
}

module.exports = assert;