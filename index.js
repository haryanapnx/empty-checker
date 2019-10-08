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
   if (!value || value === '0') { return true }
   if (typeof value === 'object') {
      for (var k in value) {
         return false;
      }
      return true;
   }
   return false;
}
module.exports = isEmpty