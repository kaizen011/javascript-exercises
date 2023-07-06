const convertToCelsius = function(number) {
  let cels = Math.round((number - 32) * (5/9) * 10) / 10;
  
  return cels;
};

const convertToFahrenheit = function(number1) {
  let fahr = Math.round(((number1 * 9) / 5 + 32) *10 )/10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
