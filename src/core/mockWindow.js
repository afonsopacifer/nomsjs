/**
 * A fake DOM (mock window object).
 * @module core/mockWindow
 *
 * @returns {object} A fake DOM (mock window object) for mock features in node.js environment.
 */

const mockWindow = {
  document: {

    createElement: element => {

			const classList = [];

      return {
        nodeName: element.toUpperCase(),
        className: classList,
        classList: {
          add: newClass => {
            classList.push(newClass)
          },
        },
			}

		},

  },
}

export default mockWindow;