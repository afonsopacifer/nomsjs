import { suite, test, assert, normalizeString, fakeWindow } from '../../src/noms.js';
import nodeAssert from 'assert'

describe('N.O.M.s - integrations', () => {

	it('Should create and execute a test with a single assert', () => {

		// N.O.M.s test
		const result = test('Should return a correct string', () => {
			const nExpect = `TextForDemoTest`;
			const nResult = normalizeString(`Text For Demo Test`);
			return assert.equal(nExpect, nResult);
		});

		nodeAssert.equal(true, result)

	});

	it('Should create and execute a test with a DOM element', () => {

		const createEl = (elementName, context) => context.document.createElement(elementName);

		// N.O.M.s test
		const result = test('Should return a correct DOM element', () => {
			const nExpect = `P`;
			const nResult = createEl('p', fakeWindow);
			return assert.equal('P', nResult.nodeName);
		});

		nodeAssert.equal(true, result)

	});

});