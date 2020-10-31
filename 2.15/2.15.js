//Question 1: Do the two equations return any differences?
//Answer: No they return the same results

//Question 2: Rewrite function using ? or ||.
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

  //Question 3: Write a function min(a,b) which returns the least of two numbers a and b
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}

//Question 4: Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }
