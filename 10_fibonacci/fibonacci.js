/*

*/
const fibonacci = function(n) {
    if (n === 0) {
        return 0;
      } else if (n === 1) {
        return 1;
      } else {
        let previous = 0;
        let current = 1;
    
        for (let i = 2; i <= n; i++) {
          let next = previous + current;
          previous = current;
          current = next;
        }
    
        return current;
      }
    
};

// Do not edit below this line
module.exports = fibonacci;
