// console.log('Hello World');

// for (var i = 40; i <= 60; i++) {
//     console.log(i);
// }

// for (var i = 10; i >= 0; i--) {
//     console.log(i);
// }

// for (var i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// for (let i =1 ; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }



// for (let 1 = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }

// for (le)

// for (var i = 0; i <= 10; i += 3) {
//     console.log(i);
// }

// for (var i = 6; i <= 60; i *= 3) {
//     console.log(i);
// }

// let output = '';
// for (let i = 1; i <= 7; i++) {
//     output += "#";
//     console.log(output);
// }

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }

// const str = "Hello World";
//  console.log(str.length);
//  console.log(str[0]);

// for (const i in str) {
// 	console.log(str[i]);
// }

// const str = "Hello World";

// for (const c of str) {
// 	console.log(c);
// }

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// const str = "Hello World";

// for (const i in str) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// for (const c of str) {
// 	if (c == "l") {
// 		continue;
// 	}

// 	console.log(c);
// }

// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}
	
// 	console.log(x);
// }

// while loops
// Count down to 0 from a given number.
// a = 10;
// while (a > 0) {
//     console.log(a);
//     a--;
// }

// Log integers in multiples of 3 as long as they are less than 35.
// b = 3;
// while (b < 35) {
//     console.log(b);
//     b += 3;
// }
// Print integers in multiples of 5 as long as they are less than 100.
// c = 5;
// while (c < 100) {
//     console.log(c);
//     c += 5;
// }
// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
// d = 0;
// while (d < 20) {
//     if (d % 2 === 0) {
//         console.log(d * 3);
//     }
//     d++;
// }

// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.

// let cost = 4;
// let bill = 10;
// let change = bill - cost;
// let quarters = 0;

// while (change > 0.25) {
//     change -= 0.25;
//     quarters++;
// }

// console.log("quarter received", quarters);

// let x = 10;

// do {
// 	x--;
// 	console.log(x);
// } while (x > 50);

// let x = 1;
// let y = 1;

// myLoop: while (true) {
// 	console.log(`Outer loop ${x}.`);
// 	x++;

// 	while (true) {
// 		console.log(`Inner loop ${y}.`);
// 		y++;

// 		if (x == 5 && y % 5 == 0) {
// 			break myLoop;
// 		} else if (y % 5 == 0) {
// 			break;
// 		}
// 	}
// }

// let x = 1;
// let y = 1;

// myLoop: while (true) {
// 	console.log(`Outer loop ${x}.`);
// 	x++;

// 	while (true) {
// 		console.log(`Inner loop ${y}.`);
// 		y++;

// 		if (x == 5 && y % 5 == 0) {
// 			break myLoop;
// 		} else if (y % 5 == 0) {
// 			continue myLoop;
// 		}
// 	}
// }

// reverse a string using a for loop(no using .reverse())

let str = "Hello World";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}
console.log(newStr);

// Write a for loop that calculates and prints the sum of all numbers from 1 to 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Write a for loop that prints the multiplication table for a given number

let num = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}



