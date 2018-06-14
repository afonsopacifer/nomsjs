import normalizeString from '../../src/core/helpers/normalizeString.js';
import assert from 'assert';

describe('normalizeString()', () => {

	it('Should remove white spaces and break lines', () => {
		assert.equal('exampleTest', normalizeString('example Test'));
	});

});