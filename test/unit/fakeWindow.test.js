import fakeWindow from '../../src/core/mocks/fakeWindow.js';
import assert from 'assert';

describe('fakeWindow()', () => {

	describe('document.createElement()', () => {

		it('Should create a fake DOM element', () => {
			const div = fakeWindow.document.createElement('div');
			assert.equal('DIV', div.nodeName);
		});

	});

	describe('element.classList.add()', () => {

		it('Should add a new class with the fake DOM element', () => {
			const p = fakeWindow.document.createElement('p');

			p.classList.add('fancy');

			assert.equal('fancy', p.className[0]);
		});

		it('Should add a multiple new class with the fake DOM element', () => {
			const p = fakeWindow.document.createElement('p');

			p.classList.add('fancy');
			p.classList.add('dark');
			p.classList.add('light');

			assert.equal('fancy', p.className[0]);
			assert.equal('dark', p.className[1]);
			assert.equal('light', p.className[2]);
		});

	});

});