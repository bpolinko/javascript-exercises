const fibonacci = function(input) {
    const num = Number(input);
    if (num < 0) {return "OOPS";}
    else {
    const sequence = [0, 1];
      for (let i = 2; i <= num; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
        return sequence[num];
      }
    
};

// Do not edit below this line
module.exports = fibonacci;
