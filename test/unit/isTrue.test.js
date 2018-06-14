import isTrue from '../../src/core/asserts/equal/isTrue.js';
import assert from 'assert';

describe('isTrue()', () => {

	it('Should return the correct assert result with a single boolean value', () => {
		assert.equal(true, isTrue(1));
	});

	it('Should return the incorrect assert result with a single boolean value', () => {
		assert.equal(false, isTrue(0));
	});

});