//Question 1: What is the last value outputted?
let i = 3;
while (i) {
    alert ( i-- );
}
//Answer: The last number shown is 1.

//Question 2: Which values are outputted and do both loops output the same values?
let i= 0;
while (++i < 5) alert (i);

let i=0;
while (i++ < 5) alert (i);

//Answer: the first operation shows 0-4 and the second shows 1-5

//Question 3: Which values are outputted and do both loops output the same values?
for (let i =0; i < 5; i++) alert (i);

for (let i =0; i < 5; ++i) alert (i);
//Answer: Both equations show 0-4

//Question 4: Output even numbers between 2-10
for (let i =2; i <= 10, i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

//Question 5: change code from for to while without changing properties
for (let i=0; i < 3; i++) {
    alert ('number ${i}!' );
}
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//Question 6: Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
//The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//Question 7:
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}
