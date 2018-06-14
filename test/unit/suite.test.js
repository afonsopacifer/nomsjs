import suite from '../../src/core/suite.js';
import assert from 'assert';

describe('suite()', () => {

	it('Should return the tests callback', () => {
		const mockTest = () => 'demo';
		assert.equal('demo', suite('description', mockTest));
	});

});