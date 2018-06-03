/**
 * Normalize (remove white spaces and break lines) strings.
 * @module core/normalizeString
 * 
 * @param {string} string - The string for normalize.
 *
 * @returns {string} A normalized string (Removed white spaces and break lines).
 */

const normalizeString = (string) => {
	return string.replace(/\s/g,'');
}

export default normalizeString;