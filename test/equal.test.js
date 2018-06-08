import equal from '../src/core/asserts/equal/equal.js';
import assert from 'assert';

describe('equal()', () => {

	it('Should return the correct assert result with two primitive values', () => {
		assert.equal(true, equal(12, 12));
		assert.equal(true, equal('test', 'test'));
		assert.equal(true, equal(false, false));
	});

	it('Should return the incorrect assert result with two primitive values', () => {
		assert.equal(false, equal(12, 14));
		assert.equal(false, equal('test', 'tes'));
		assert.equal(false, equal(false, true));
	});

});