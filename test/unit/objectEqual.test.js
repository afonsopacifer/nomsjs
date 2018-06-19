import objectEqual from '../../src/core/asserts/equal/objectEqual.js';
import assert from 'assert';

describe('objectEqual()', () => {

	it('Should return the correct assert result with two equal objects', () => {

		const object1 = {a: 1, b: 2, c: 3, d: 3};
		const object2 = {a: 1, b: 2, c: 3, d: 3};

		const result = objectEqual(object1, object2); // true

		assert.equal(true, result);

	});

	it('Should return the correct assert result with two different objects (with different length)', () => {

		const object1 = {a: 1, b: 2, c: 3, d: 3};
		const object2 = {a: 1, b: 2, c: 3};

		const result = objectEqual(object1, object2); // false

		assert.equal(false, result);

	});

	it('Should return the correct assert result with two different objects (with different keys)', () => {

		const object1 = {a: 1, b: 2, c: 3, d: 3};
		const object2 = {a: 1, b: 2, x: 3, d: 3};

		const result = objectEqual(object1, object2); // false

		assert.equal(false, result);

	});

	it('Should return the correct assert result with two different objects (with different values)', () => {

		const object1 = {a: 1, b: 2, c: 3, d: 3};
		const object2 = {a: 1, b: 5, c: 3, d: 3};

		const result = objectEqual(object1, object2); // false

		assert.equal(false, result);

	});

});