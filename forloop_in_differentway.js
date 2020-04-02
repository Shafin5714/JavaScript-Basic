//Power function
function power(base, exponent) {

    var result = 1
    // initialize here
    var count = 0
  
    for (; count < exponent; count++)
      result *= base
    return result;
  }
  
  console.log((power(5, 2)));