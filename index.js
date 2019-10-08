/**
 * Author: https://github.com/haryanapnx
 * @param {*} value 
 * @returns {boolean}
 */

/**
 * This function will checking for value that
 * passed into parameter, and check the value
 * 
 * if value {null}, {undefined}, {0}, {''}
 * will returns true
 */
const isEmpty = function (value) {
   return (!value || value == "0" || 0 === value.length || Object.entries(value).length === 0 && value.constructor === Object);
}
module.exports = isEmpty