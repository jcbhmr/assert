const equal = require("./equal.js");

/**
 * @param {any} value
 * @param {string | Error} message
 * @returns {asserts value}
 */
module.exports = function ok(value, message) {
  equal(!!value, true, message);
};
