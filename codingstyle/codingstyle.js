//Question 1:
//What's wrong with the code below?

function pow(x,n) //no space between pow and (x,n)
{  //bracket should be on line above after (x,n)
  let result=1; //no spaces
  for(let i=0;i<n;i++) {result*=x;} //needs spaces
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') //needs spaces
if (n<=0) //needs a space
{ //bracket should be on line above after (n < = 0 )
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} //string above should be broken up into multiple lines
else
{ //bracket should be on line above after else
  alert(pow(x,n)) //needs spaces and missing a ;
}