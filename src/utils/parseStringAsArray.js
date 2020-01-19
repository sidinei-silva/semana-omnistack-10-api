module.exports = function parseStringAsArray(arrayAString){
  return arrayAString.split(',').map(tech => tech.trim());
}