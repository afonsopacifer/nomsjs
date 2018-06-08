import nAssert from '../src/core/asserts/assert.js';
import assert from 'assert';

describe('assert', () => {

	describe('assert.equal()', () => {

		it('Should return the correct assert result with two primitive values', () => {
			assert.equal(true, nAssert.equal(12, 12));
			assert.equal(true, nAssert.equal('test', 'test'));
			assert.equal(true, nAssert.equal(false, false));
		});

		it('Should return the incorrect assert result with two primitive values', () => {
			assert.equal(false, nAssert.equal(12, 14));
			assert.equal(false, nAssert.equal('test', 'tes'));
			assert.equal(false, nAssert.equal(false, true));
		});

	});

	describe('assert.isFalse()', () => {

		it('Should return the correct assert result with a single boolean value', () => {
			assert.equal(false, nAssert.isFalse(1));
		});
	
		it('Should return the correct assert result with a single boolean value', () => {
			assert.equal(true, nAssert.isFalse(0));
		});
	
	});

	describe('assert.isTrue()', () => {

		it('Should return the correct assert result with a single boolean value', () => {
			assert.equal(true, nAssert.isTrue(1));
		});
	
		it('Should return the correct assert result with a single boolean value', () => {
			assert.equal(false, nAssert.isTrue(0));
		});
	
	});

});