const isEmpty = function (value) {
   return (!value || value == "0" || 0 === value.length);
}
module.exports = isEmpty