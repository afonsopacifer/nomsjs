/**
 * A fake DOM (mock window object).
 * @module core/mocks/fakeWindow
 *
 * @returns {object} A fake DOM (mock window object) for mock features in node.js environment.
 * 
 */

const fakeWindow = () => {
  return {

    document: {

      /**
       * Create a fake DOM element with properties and methods.
       *
       * @param {string} elementName - The element name.
       * 
       * @returns {object} A fake DOM element.
       * 
       */

      createElement: elementName => {

        const classList = [];

        return {
          nodeName: elementName.toUpperCase(),
          classList: { add: newClass => classList.push(newClass), },
          className: classList,
          style: {
            cssText: '',
          },
        }

      }

    }

  }
}

export default fakeWindow();