/**
 * Allow N.O.M.s to use ES Modules.
 */

require = require("esm")(module);
module.exports = require("./noms.js");