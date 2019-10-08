const isEmpty = function (value) {
   return (!value || value == "0" || 0 === value.length || Object.entries(value).length === 0 && value.constructor === Object);
}
module.exports = isEmpty