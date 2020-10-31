//Question 1: Write the code using if..else which would correspond to the following switch:
switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

  if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }

  //Question 2: Rewrite the code below using a single switch statement:

  let a = +prompt('a?', '');

  switch (a) {
    case 0:
      alert( 0 );
      break;
  
    case 1:
      alert( 1 );
      break;
  
    case 2:
    case 3:
      alert( '2,3' );
      break;
  }
