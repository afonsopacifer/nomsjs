import arrayEqual from '../../src/core/asserts/equal/arrayEqual.js';
import assert from 'assert';

describe('arrayEqual()', () => {

	it('Should return the correct assert result with two equal arrays', () => {

		const array1 = [1,2,3,4,5,6];
		const array2 = [1,2,3,4,5,6];

		const result = arrayEqual(array1, array2); // true

		assert.equal(true, result);

	});

	it('Should return the correct assert result with two different arrays (with different length)', () => {

		const array1 = [1,2,3,4,5,6];
		const array2 = [1,2,3,4,5];

		const result = arrayEqual(array1, array2); // false

		assert.equal(false, result);

	});

	it('Should return the correct assert result with two different arrays (with different items)', () => {

		const array1 = ['a','b','c','d','e','f'];
		const array2 = ['a','b','c','c','e','f'];

		const result = arrayEqual(array1, array2); // false

		assert.equal(false, result);

	});

	// it('Should return the correct assert result with two deep equal arrays', () => {

	// 	const array1 = ['a','b',[1,2,3],'d','e','f'];
	// 	const array2 = ['a','b',[1,2,3],'d','e','f'];

	// 	const result = arrayEqual(array1, array2); // true

	// 	assert.equal(true, result);

	// });

	// it('Should return the correct assert result with two deep different arrays', () => {

	// 	const array1 = ['a','b',[1,2,3],'d','e','f'];
	// 	const array2 = ['a','b',[1,2,2],'d','e','f'];

	// 	const result = arrayEqual(array1, array2); // false

	// 	assert.equal(false, result);

	// });

	// it('Should return the correct assert result with two very deep equal arrays', () => {

	// 	const array1 = ['a','b',[1,2,3],'d','e',[1,2,['x','y','z']]];
	// 	const array2 =  ['a','b',[1,2,3],'d','e',[1,2,['x','y','z']]];

	// 	const result = arrayEqual(array1, array2); // true

	// 	assert.equal(true, result);

	// });

	// it('Should return the correct assert result with two very deep different arrays', () => {

	// 	const array1 = ['a','b',[1,2,3],'d','e',[1,2,['x','y','z']]];
	// 	const array2 =  ['a','b',[1,2,3],'d','e',[1,2,['a','y','z']]];

	// 	const result = arrayEqual(array1, array2); // false

	// 	assert.equal(false, result);

	// });

});