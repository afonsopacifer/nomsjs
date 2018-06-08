import test from '../src/core/test.js';
import assert from 'assert';

describe('test()', () => {

	it('Should return the correct callback for assertion result', () => {
		const mockAssert = () => true;
		assert.equal(true, test('description', mockAssert));
	});

	it('Should return the incorrect callback for assertion result', () => {
		const mockAssert = () => false;
		assert.equal(false, test('description', mockAssert));
	});

});