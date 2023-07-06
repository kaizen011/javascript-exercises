const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a,b) {
	return a + b;
};

const multiply = function(a,b) {
  return a * b;
};

const power = function(a,b) {
	return a ** b;
};


const factorial = function(n) {
  if (n === 0) {
    return 1;
  }

  let factorial1 = 1;

  // Use a loop to calculate the factorial
  for (let i = 1; i <= n; i++) {
    factorial1 *= i;
  }

  return factorial1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
