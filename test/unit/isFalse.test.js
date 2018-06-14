import isFalse from '../../src/core/asserts/equal/isFalse.js';
import assert from 'assert';

describe('isFalse()', () => {

	it('Should return the correct assert result with a single boolean value', () => {
		assert.equal(false, isFalse(1));
	});

	it('Should return the incorrect assert result with a single boolean value', () => {
		assert.equal(true, isFalse(0));
	});

});