const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR"; // returns error message if and negative numbers are input
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"; // determines numbers value and ! reverses result
    if (min > max) { // copies min into temporary, max to min, and moves temp to the max var. aka ordering from S to L
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
  };
  
  module.exports = sumAll;